import { Modal, Box, Input, Textarea, Button } from '@mui/joy'
import React from 'react'

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
  return (
    <div>
          <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       
          <form action="" className='flex flex-col gap-4'>
            <h1 className='font-[var(--title-font)] text-2xl'>Add Your Car Info</h1>
            <Input placeholder='Car Name'/>
            <Input placeholder='Car brand'/>
            <Input placeholder='Car Price' type='number'/>
            <Textarea placeholder='Car Description'/>
            <Input type='file'/>
            <Button>Submit </Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddCarForm