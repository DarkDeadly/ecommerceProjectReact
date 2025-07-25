import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Lottie from "lottie-react";
import React from "react";
import animation from "../../assets/Loading_car.json";
import { AspectRatio, Button, Card, CardContent, IconButton, Typography } from "@mui/joy";
import { BookMarked, HeartIcon } from "lucide-react";
import toast from "react-hot-toast";
const PopularList = () => {
    const queryClient = useQueryClient()
  const GetCars = async () => {
    
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKENDURLCAR + "/getCars"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const UpdateCar = async(carId , Popular) => {
    try {
        const response = await axios.put(import.meta.env.VITE_BACKENDURLCAR +`/editCar/${carId}` ,
            {
             carId: carId,
             Popular: !Popular,   
            }, 
            {
             withCredentials : true
            }
        )
        return response.data
    } catch (error) {
        console.log(error)
    }
  }
  const { status, data, error } = useQuery({
    queryKey: ["cars"],
    queryFn: GetCars,
  });

  const togglePopular  = useMutation({
    mutationFn : ({carId , Popular}) => UpdateCar(carId , Popular),
    onSuccess : () => {
        (toast.success("Update Successfully"))
        queryClient.invalidateQueries(['cars']);
    }
  }) 

  if (status === "pending") {
    return <Lottie animationData={animation} />;
  }

  console.log(data);
  return (
    <div className="pl-5">
        <h1 className="text-3xl pt-5"> Manage your Popular Cars : </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
      {data.cars.map((car, index) => (
        <Card sx={{ width: 420 }} key={index}>
          <div className="flex justify-between">
            <div>
              <Typography level="title-lg">{car.name}</Typography>
              <Typography level="body-sm">{car.brand}</Typography>
            </div>
            <IconButton
              aria-label="bookmark car"
              variant="plain"
              color="neutral"
              size="sm"
              onClick={() => togglePopular.mutate({carId : car._id , Popular : car.Popular })}
            >
              <BookMarked className={`hover:text-red-600 ${car.Popular ? 'text-red-600' : ""}`} />
            </IconButton>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={car.imageUrl}
              srcSet={car.imageUrl}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent orientation="vertical">
            <div className="flex items-center mb-1">
              <Typography level="body-md">Price:</Typography>
              <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                {car.price} DT
              </Typography>
            </div>
          
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default PopularList;
