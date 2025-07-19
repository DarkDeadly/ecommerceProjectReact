import React, { useContext } from "react";
import { CarDetailContext } from "../../context/CarContext";
import { Button } from "@mui/joy";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";

const CarDetailsInfo = () => {
  const { CarDetailData, setCarDetailData } = useContext(CarDetailContext);
  const [CarInCar, setCarInCar] = useState(false)
  const [Loading, setLoading] = useState(false);
  console.log(CarDetailData);
  const AddToCart = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        import.meta.env.VITE_BACKENDURLCART + "/addcart",
        {
          carId: CarDetailData?.car?._id,
        },
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      toast.success("Car added to cart successfully!");
    } catch (error) {
      console.error("Error adding car to cart:", error);
      toast.error("Failed to add car to cart.");
      setLoading(false);
    }
  };
  const CarINCart = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get(
       `${import.meta.env.VITE_BACKENDURLCART}/CheckCar?carId=${CarDetailData?.car?._id}`,
      );
        setCarInCar(response.data.carInCart);
    } catch (error) {
      console.error("Error checking car in cart:", error);
    }
  }
    useEffect(() => {
      CarINCart();
    }, []);
  return (
    <div className="flex  gap-5 max-[946px]:flex-col">
      <div className="w-[50%] max-[946px]:w-full">
        <img
          src={CarDetailData?.car?.imageUrl}
          alt="CarImage"
          srcSet={CarDetailData?.car?.imageUrl}
          className="bg-cover bg-center h-full"
        />
      </div>
      <div className="w-[50%] flex flex-col justify-start p-5 max-[946px]:w-full">
        <div className="flex justify-between items-center my-5">
          <div>
            <h1 className="text-2xl font-[var(--title-font)]">
              {CarDetailData?.car?.name}
            </h1>
            <p className="text-xl font-[var(--text-font)] text-gray-400">
              {CarDetailData?.car?.brand}
            </p>
          </div>
          <p className="text-xl font-[var(--text-font)]">
            Year : {CarDetailData?.car?.year}
          </p>
        </div>
        <p className="text-xl font-[var(--text-font)] ">
          <span className="font-bold my-2">Description :</span> <br />{" "}
          {CarDetailData?.car?.description}
        </p>
        <h2 className ="text-xl font-[var(--text-font)] my-2">
          <span className="font-bold">price :</span> {CarDetailData?.car?.price}{" "}
          DT
        </h2>
        <div className="flex flex-col gap-3 mt-4">
          <Button onClick={() => AddToCart()} disabled={CarInCar}>
            {Loading ? <Loader2Icon className=" animate-spin" /> : "Add to Cart"}
          </Button>
           <Button variant="soft" color="neutral" sx={{ flex: 1 }}>
              Preview
            </Button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsInfo;
