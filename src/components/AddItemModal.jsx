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
          onChange={(e) => setItemPrice(e.target.value)}
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