import React, { useState } from 'react';
import Header from './components/Header';
import ItemTable from './components/ItemTable';
import AddItemModal from './components/AddItemModal';
import { Box, Container, Paper, Typography } from '@mui/material';

function App() {
  const [numPeople, setNumPeople] = useState(1);
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addItem = (name, price) => {
    setItems([...items, { name, price, id: items.length }]);
  };

  const totalAmount = items.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);
  // ใช้ค่า numPeople โดยให้ค่า default เป็น 1 ถ้าเป็นค่าว่าง
const totalAmountPerPerson = totalAmount / (numPeople || 1);

  return (
    <Container>
      <Box mt={4}>
        <Header 
          numPeople={numPeople} 
          setNumPeople={setNumPeople} 
          openModal={openModal} 
        />
        <ItemTable items={items} numPeople={numPeople} />
        
        {/* กล่องยอดรวมทั้งหมด */}
        <Box mt={4} display="flex" justifyContent="center">
          <Paper elevation={3} sx={{ padding: 2, width: 300, textAlign: 'center' }}>
            <Typography variant="h6">ยอดรวมทั้งหมด</Typography>
            <Typography variant="h4" color="primary">
              {totalAmountPerPerson.toFixed(2)} บาท
            </Typography>
          </Paper>
        </Box>

        <AddItemModal isOpen={isModalOpen} closeModal={closeModal} addItem={addItem} />
      </Box>
    </Container>
  );
}

export default App;