import React, { useContext } from "react";
import { CarDetailContext } from "../../context/CarContext";
import { Button } from "@mui/joy";

const CarDetailsInfo = () => {
  const { CarDetailData, setCarDetailData } = useContext(CarDetailContext);
  console.log(CarDetailData);
  return (
    <div className="flex  gap-5">
      <div className="w-[50%] flex flex-col ">
        <img
          src={CarDetailData?.car?.imageUrl}
          alt="CarImage"
          srcSet={CarDetailData?.car?.imageUrl}
          className="bg-cover bg-center h-full"
        />
        <div className="flex flex-col gap-3 mt-4">
          <Button>Add to Cart</Button>
          <div className="flex justify-between gap-2">
            <Button variant="outlined" color="neutral" sx={{ flex: 1 }}>
              Buy Now
            </Button>
            <Button variant="soft" color="neutral" sx={{ flex: 1 }}>
              Preview
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col justify-start p-5">
        <div className="flex justify-between items-center my-5">
          <div>
            <h1 className="text-2xl font-[var(--title-font)]">{CarDetailData?.car?.name}</h1>
            <p className="text-xl font-[var(--text-font)] text-gray-400">{CarDetailData?.car?.brand}</p>
          </div>
          <p className="text-xl font-[var(--text-font)]"> Year : {CarDetailData?.car?.year}</p>
        </div>
        <p className="text-xl font-[var(--text-font)] ">
          <span className="font-bold my-2">Description :</span> <br /> {CarDetailData?.car?.description}
        </p>
        <h2 className="text-xl font-[var(--text-font)] my-2"><span className="font-bold">price :</span> {CarDetailData?.car?.price} DT</h2>
      </div>
    </div>
  );
};

export default CarDetailsInfo;
