import { Modal, Box, Input, Textarea, Button } from '@mui/joy'
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddCarForm = ({openModal , handleClose}) => {
    const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const { register , handleSubmit } = useForm()
  const [Loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("year", data.year);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append('quantity' , data.quantity);
    formData.append("imageUrl", data.imageUrl[0]);
    setLoading(true)
    try {
      const response = await axios.post(import.meta.env.VITE_BACKENDURLCAR + "/addCar", formData, {
      
        withCredentials: true,
      });
      console.log(response.data);
      toast.success("Car added successfully");
      setLoading(false)
      handleClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add car");
      setLoading(false)
    }
  }


  return (
    <div>
          <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       
          <form onSubmit = {handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <h1 className='font-[var(--title-font)] text-2xl'>Add Your Car Info</h1>
            <Input placeholder='Car Name' {...register("name")}/>
            <Input placeholder='Car brand' {...register("brand")}/>
            <Input placeholder='Car Year' type='number' {...register("year")}/>
            <Input placeholder='Car Quantity in Store' type='number' {...register("quantity")}/>

            <Input placeholder='Car Price' type='number' {...register("price")}/>
            <Textarea placeholder='Car Description' {...register("description")}/>
            <Input type='file' {...register("imageUrl")}/>
            <Button type='submit' disabled = {Loading}>{Loading && <Loader2Icon className='animate-spin'/>} Submit</Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddCarForm