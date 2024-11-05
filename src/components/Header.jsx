import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Header = ({ numPeople, setNumPeople, openModal }) => {
  
  // ฟังก์ชันจัดการการเปลี่ยนค่า numPeople
  const handleNumPeopleChange = (e) => {
    const value = e.target.value;
    setNumPeople(value === "" ? 0 : parseInt(value, 10)); // ถ้าเป็น "" ให้เก็บ 0 ไว้ใน state
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          label="จำนวนคน"
          type="number"
          variant="outlined"
          value={numPeople === 0 ? "" : numPeople} // แสดง "" ถ้าค่าเป็น 0
          onChange={handleNumPeopleChange}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={openModal}>
        เพิ่มรายการใหม่
      </Button>
    </Box>
  );
};

export default Header;
