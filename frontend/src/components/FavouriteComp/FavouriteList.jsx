import { AspectRatio, Button, Card, CardContent, IconButton, Typography } from '@mui/joy';
import axios from 'axios';
import { HeartIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const FavouriteList = () => {
    const [Favourites, setFavourites] = useState()
    const [Error, setError] = useState(false);
    const GetFavourites = async () => {
        try {
            const response = await axios.get(
                import.meta.env.VITE_BACKENDURLFAVOURITE + "/getFavourites",
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            if (response.data.message === "No favourites found") {
                setError(true);
            }
            setFavourites(response.data);
        } catch (error) {
            console.error("Error fetching favourites:", error);
        }
    }
    useEffect(() => {
        GetFavourites();
    }, []);
  return (
    <>
    {Error ? (
        <div className='flex justify-center items-center h-screen'>No Favourites Found</div>
    ) : (
       <div className='p-5'>
           <h1 className='text-2xl font-bold mb-4'>Your Favourite Car :</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
               {Favourites?.map((item , index) => (
            <Card sx={{ width: 620 }} key={index}>
            <div className="flex justify-between">
              <div>
                <Typography level="title-lg">{item.car.name}</Typography>
                <Typography level="body-sm">{item.car.brand}</Typography>
              </div>
              <IconButton
                aria-label="bookmark car"
                variant="plain"
                color="neutral"
                size="sm"
              >
                <HeartIcon className="text-red-600 "  />
              </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
              <img
                src={item.car.imageUrl}
                srcSet={item.car.imageUrl}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="vertical">
              <div className="flex items-center mb-1">
                <Typography level="body-md">Price:</Typography>
                <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                  {item.car.price} DT
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                sx={{ ml: "auto", width : "100%", fontWeight: 600 }}
          
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
           ))}
        </div>
       </div>
    )}
    </>
  )
}

export default FavouriteList