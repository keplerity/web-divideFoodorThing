import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import ItemDetail from './ItemDetail';

const ItemTable = ({ items, numPeople }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ชื่อรายการ</TableCell>
            <TableCell align="right">ราคา (บาท)</TableCell>
            <TableCell align="right">จ่ายคนละ (บาท)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <ItemDetail key={item.id} item={item} numPeople={numPeople} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemTable;