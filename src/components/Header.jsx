import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Header = ({ numPeople, setNumPeople, openModal }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h4">เว็บหารค่าอาหาร</Typography>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          label="จำนวนคน"
          type="number"
          variant="outlined"
          value={numPeople}
          onChange={(e) => setNumPeople(Number(e.target.value))}
          InputProps={{ inputProps: { min: 1 } }}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={openModal}>
        เพิ่มรายการใหม่
      </Button>
    </Box>
  );
};

export default Header;