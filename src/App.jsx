import React, { useState } from "react";

// import Component จาก components folder
import Header from "./components/Header";
import ItemTable from "./components/ItemTable";
import AddItemModal from "./components/AddItemModal";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

  // import mui
import { Box, Container, Paper, Typography } from "@mui/material";

function App() {
  // ใช้ state เพื่อจัดการค่า
  const [numPeople, setNumPeople] = useState(1);
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ฟังก์ชันสำหรับเปิดและปิด modal เพื่อเพิ่มรายการ
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // �ฟังก์ชั่นสำหรับเพิ่มไอเทม (รายการ) ใหม่
  const addItem = (name, price) => {
    setItems([...items, { name, price, id: items.length }]);
  };

  // ฟังก์ชั่นสำหรับคำนวนยอดรวมทั้งหมดของไอเทม (รายการ) และยอดรวมทั้งหมดที่ต้องจ่ายคนละ
  const totalAmount = items.reduce(
    (sum, item) => sum + parseFloat(item.price || 0),
    0
  );
  // ใช้ค่า numPeople โดยให้ค่า default เป็น 1 ถ้าหากเป็นค่าว่าง
  const totalAmountPerPerson = Math.ceil(totalAmount / (numPeople || 1));

  return (
    <>
      <Navigation />
      <Container>
        <Box mt={4}>
          <Header
            numPeople={numPeople}
            setNumPeople={setNumPeople}
            openModal={openModal}
          />
          <ItemTable items={items} numPeople={numPeople} />

          {/* ยอดรวมทั้งหมด */}
          <Box mt={4} display="flex" justifyContent="center">
            <Paper
              elevation={3}
              sx={{ padding: 2, width: 300, textAlign: "center" }}
            >
              <Typography variant="h6">ยอดรวมทั้งหมด</Typography>
              <Typography variant="h4" color="primary">
                {totalAmountPerPerson.toFixed(2)} บาท
              </Typography>
            </Paper>
          </Box>

          <AddItemModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            addItem={addItem}
          />
        </Box>
        
      </Container>
      <Footer />
    </>
  );
}

export default App;
