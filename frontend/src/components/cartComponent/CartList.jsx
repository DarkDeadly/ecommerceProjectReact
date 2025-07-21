import { Button, IconButton, Table } from "@mui/joy";
import axios from "axios";
import { Car, Minus, Plus } from "lucide-react";
import { toast } from "react-hot-toast";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CartList = () => {
  const [CartList, setCartList] = useState();
  const [Couting, setCouting] = useState(0)
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
const CheckButtonStatePlus = (item , initial) => {
  if (item >= initial) {
    return true
  }
  else return false
}
const CheckButtonStateMinus = (item) => {
  if (item == 1) {
    return true
  }
  else return false
}

const ModifyInfo = async(carId , Quantity) => {
  try {
    const response = await axios.put(
      import.meta.env.VITE_BACKENDURLCART + "/editcart",
      {
        carId: carId,
        quantity: Quantity,
      },
      {
        withCredentials: true,
      }
    );
    toast.success("Cart updated successfully");
  } catch (error) {
    console.error("Error modifying cart item:", error);
    
  }
}

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
                          In Company there is {item.car.quantity - item.quantity} car(s)
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-xl">{item.car.price} DT</td>
                  <td> <div className="flex gap-4 text-xl items-center">
                     <IconButton 
                     disabled={CheckButtonStatePlus(item.quantity, item.car.quantity)}
                     onClick={() => setCouting(item.quantity += 1)}
                     > 
                     <Plus /></IconButton> {item.quantity} 
                     <IconButton 
                     onClick={() => setCouting(item.quantity -= 1)}
                     disabled={CheckButtonStateMinus(item.quantity)}> 
                      <Minus /></IconButton>
                    </div></td>
                  <td className="text-xl">
                    {item.car.price * item.quantity} DT
                  </td>
                  <td>
                    <Button
                      variant="outlined"
                      onClick={() => ModifyInfo(item.car._id, item.quantity)}
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
