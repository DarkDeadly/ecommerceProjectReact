import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Lottie from 'lottie-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast'; // ✅ Add this import
import Animation from '../../assets/Loading_car.json';
import { AspectRatio, Button, Card, CardContent, IconButton, Modal, Typography, Box, Input } from '@mui/joy';
import { Plus } from 'lucide-react';

const PromoList = () => {
    const queryClient = useQueryClient();
    const [SoldDone, setSoldDone] = useState(false);
    const [Sold, setSold] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null); // ✅ Track selected car

    const GetCars = async() => {
        try {
            const response = await axios.get(
                import.meta.env.VITE_BACKENDURLCAR + "/getCars"
            );
            return response.data;
        } catch (error) {
            console.error(error);
            throw error; // ✅ Important for React Query error handling
        }
    };

    const EditCar = async(carId, sold) => {
        try {
            const response = await axios.put(
                import.meta.env.VITE_BACKENDURLCAR + `/editCar/${carId}`,
                {
                    carId: carId,
                    Promo: sold,   
                }, 
                {
                    withCredentials: true
                }
            );
            return response.data;
        } catch (error) {
            console.error('EditCar error:', error);
            throw error; // ✅ Important for React Query error handling
        }
    };

    const { status, data, error } = useQuery({
        queryKey: ["cars"],
        queryFn: GetCars
    });

    const PromoAdd = useMutation({
        mutationFn: ({ carId, sold }) => EditCar(carId, sold),
        onSuccess: (updatedCar) => {
            toast.success("Promo Updated Successfully!");
            setSoldDone(true);
            queryClient.invalidateQueries(['cars']);
            handleClose(); // ✅ Close modal on success
        },
        onError: (error) => {
            toast.error("Failed to update promo");
            console.error('PromoAdd error:', error);
        }
    });

    // ✅ Reset promo function
    const ResetPromo = useMutation({
        mutationFn: (carId) => EditCar(carId, 0), // Set Promo to 0
        onSuccess: () => {
            toast.success("Promo Reset Successfully!");
            queryClient.invalidateQueries(['cars']);
        },
        onError: (error) => {
            toast.error("Failed to reset promo");
            console.error('ResetPromo error:', error);
        }
    });

    const handleOpen = (car) => {
        setSelectedCar(car); // ✅ Store the selected car
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCar(null); // ✅ Clear selected car
        setSold(0); // ✅ Reset form
        setSoldDone(false);
    };

    const handleSubmit = () => {
        if (!selectedCar || !Sold || Sold <= 0) {
            toast.error('Please enter a valid promo percentage');
            return;
        }

        PromoAdd.mutate({
            carId: selectedCar._id,
            sold: parseInt(Sold)
        });
    };

    const handleResetPromo = (carId) => {
        ResetPromo.mutate(carId);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        outline: 'none',
    };

    if (status === "pending") {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <Lottie animationData={Animation} />
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="pl-5 pt-5">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Error loading cars: {error?.message}
                </div>
            </div>
        );
    }

    return (
        <div className="pl-5">
            {/* ✅ Modal outside the map - only one modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-[var(--title-font)] text-2xl'>
                            Add Promo for {selectedCar?.name || 'Selected Car'}
                        </h1>          
                        
                        <Input 
                            placeholder='Promo Percentage' 
                            type='number' 
                            min="1" 
                            max="100"
                            value={Sold}
                            onChange={(e) => setSold(e.target.value)}
                            disabled={PromoAdd.isLoading}
                        />
                        
                        <div className="flex gap-2">
                            <Button 
                                onClick={handleSubmit}
                                disabled={PromoAdd.isLoading || !Sold}
                                loading={PromoAdd.isLoading}
                            >
                                {PromoAdd.isLoading ? 'Adding...' : 'Submit'}
                            </Button>
                            
                            <Button 
                                variant="outlined" 
                                onClick={handleClose}
                                disabled={PromoAdd.isLoading}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>

            <h1 className="text-3xl pt-5">Manage your Promo Cars:</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
                {data.cars.map((car, index) => (
                    <Card sx={{ width: 420 }} key={car._id || index}>
                        <div className="flex justify-between">
                            <div>
                                <Typography level="title-lg">{car.name}</Typography>
                                <Typography level="body-sm">{car.brand}</Typography>
                            </div>
                            <IconButton
                                aria-label="add promo"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                disabled={PromoAdd.isLoading || ResetPromo.isLoading}
                                onClick={() => handleOpen(car)} // ✅ Pass car object
                            >
                                <Plus className="hover:text-red-600" />
                            </IconButton>
                        </div>
                        
                        <AspectRatio minHeight="120px" maxHeight="200px">
                            <img
                                src={car.imageUrl}
                                srcSet={car.imageUrl}
                                loading="lazy"
                                alt={`${car.name} ${car.brand}`}
                            />
                        </AspectRatio>
                        
                        <CardContent orientation="vertical">
                            <div className="flex items-center mb-1">
                                <Typography level="body-md">Price:</Typography>
                                <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                                    {car.price} DT
                                </Typography>
                            </div>
                            
                            {/* ✅ Show current promo status */}
                            {car.Promo > 0 && (
                                <div className="mb-2">
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                        {car.Promo}% OFF
                                    </span>
                                </div>
                            )}
                            
                            <Button
                                variant="outlined"
                                size="sm"
                                disabled={!car.Promo || car.Promo === 0 || ResetPromo.isLoading || PromoAdd.isLoading}
                                onClick={() => handleResetPromo(car._id)}
                            >
                                {ResetPromo.isLoading ? 'Resetting...' : 'Reset Promo'}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}


export default PromoList