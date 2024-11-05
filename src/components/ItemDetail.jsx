import React from 'react';
import { TableCell, TableRow } from '@mui/material';

// ฟังก์ชั่นสำหรับหารจำนวนราคาให้เท่ากับคนให้ปัดเศษขึ้นหากมีเศษ
const ItemDetail = ({ item, numPeople }) => {
  const perPerson = Math.ceil((item.price / numPeople)).toFixed(2);

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell align="right">{item.price.toFixed(2)}</TableCell>
      <TableCell align="right">{perPerson}</TableCell>
    </TableRow>
  );
};

export default ItemDetail;