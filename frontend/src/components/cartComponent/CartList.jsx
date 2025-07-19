import { Button, Table } from "@mui/joy";
import axios from "axios";
import { Car, Minus, Plus } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CartList = () => {
  const [CartList, setCartList] = useState();
  const GetCart = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKENDURLCART + "/getcart",
        {
          withCredentials: true,
        }
      );

      setCartList(response.data.Cart);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    GetCart();
  }, []);
 
  return (
    <>
      {CartList?.items == undefined || null ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        </div>
      ) : (
        <div className="h-full bg-gray-300 p-5">
          <h1 className="text-2xl ">Your Cart</h1>
          <p className="mb-5 text-xl text-gray-600">
            There is{" "}
            <span className="font-bold">{CartList?.items.length} item(s)</span>{" "}
            in your cart.
          </p>
          <Table sx={{ backgroundColor: "white", borderRadius: "8px" }}>
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Car</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {CartList?.items.map((item, index) => (
              <tbody key={index} >
                <tr>
                  <td>
                    <div className="flex gap-2">
                      <img
                        src={item.car.imageUrl}
                        alt="image"
                        className="w-[30%] h-[30%]"
                      />
                      <div>
                        <h1 className="text-2xl">{item.car.name}</h1>
                        <p className="text-gray-500 text-xl">
                          {item.car.brand}
                        </p>
                        <p className="text-gray-500 text-xl">
                          In Company there is {item.car.quantity} car(s)
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-xl">{item.car.price} DT</td>
                  <td> <div className="flex gap-4 text-xl items-center">
                      <Plus /> {item.quantity} <Minus />
                    </div></td>
                  <td className="text-xl">
                    {item.car.price * item.quantity} DT
                  </td>
                  <td>
                    <Button
                      variant="outlined"
                    >
                      Save
                    </Button>
                  </td>
                </tr>
              </tbody>
             
            ))}
          </Table>
        </div>
      )}
    </>
  );
};

export default CartList;
