import axios from "axios";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import animation from "../../assets/Loading_car.json";
import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/joy";
import { Bookmark } from "lucide-react";
const CarsCardList = () => {
  const [Loading, setLoading] = useState(false);
  const [CarList, setCarList] = useState();
  const CardList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKENDURLCAR + "/getCars",
        {
          withCredentials: true,
        }
      );
      setCarList(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    CardList();
  }, []);

  return (
    <>
      {Loading ? (
        <Lottie animationData={animation} />
      ) : (
        CarList?.cars?.map((car, index) => (
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
              >
                <Bookmark className="hover:text-amber-300" />
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
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Buy car"
                sx={{ ml: "auto", width : "100%", fontWeight: 600 }}
              >
                View More 
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
};

export default CarsCardList;
