import { useState } from "react";
import {  IconButton, styled, Badge, BadgeProps, Box, Typography, Modal, Button, TextField  } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export function Model() {
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false), handleButtonClick()};
  const handleButtonClick = () => {
  const inputElement1 = document.getElementById('inputText1') as HTMLInputElement;
  const inputElement2 = document.getElementById('inputText2') as HTMLInputElement;
  if (inputElement1 && inputElement2) {
    setInputText(inputElement1.value + inputElement2.value);
  }}
  return (
    <div id="main">
                <TextField sx={{backgroundColor:"greenyellow"}} variant="filled" id="inputText1" />
                <TextField sx={{backgroundColor:"greenyellow"}} variant="filled" id="inputText2" />

        <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {inputText}
    </Typography>
  </Box>
</Modal>
    </div>
  );
}
