import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  width: 300,
};

const AddItemModal = ({ isOpen, closeModal, addItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  
  const handlePriceChange = (e) => {
    const value = e.target.value;
  
    // ตรวจสอบว่าเป็นค่าว่างหรือเป็นตัวเลขบวก
    if (value === "" || (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 0)) {
      setItemPrice(value); // ใช้ value โดยตรง ไม่แปลงเป็นตัวเลข เพื่อเก็บค่าว่างได้
    }
  
  };
  const handleAdd = () => {
    if (itemName && itemPrice) {
      addItem(itemName, parseFloat(itemPrice));
      setItemName('');
      setItemPrice('');
      closeModal();
    }
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box sx={modalStyle}>
        <Typography variant="h6" mb={2}>เพิ่มรายการใหม่</Typography>
        <TextField
          label="ชื่อรายการ"
          variant="outlined"
          fullWidth
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="ราคา"
          type="number"
          variant="outlined"
          fullWidth
          value={itemPrice}
          onChange={handlePriceChange}
          sx={{ mb: 2 }}
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            บันทึกรายการ
          </Button>
          <Button variant="outlined" color="danger" onClick={closeModal}>
            ยกเลิก
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddItemModal;