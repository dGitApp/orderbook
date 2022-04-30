import React from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { styled } from '@mui/material/styles';
import './Order.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
}));

function Order() {
  return (
    <Box sx = {{width: '100%'}}>
      <Stack spacing={1}>
        <Item elevation={5} >
          <Table sx={{ width: '500px'}}>
            <TableHead>
              <TableRow>
                <TableCell> Dessert (100g serving)</TableCell>
                <TableCell> Dessert (100g serving)</TableCell>
                <TableCell> Dessert (100g serving)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell align="right">cell1</TableCell>
              <TableCell align="right">cell2</TableCell>
              <TableCell align="right">cell3</TableCell>
            </TableBody>
          </Table>
        </Item>
        <Item elevation= {5}> order 2 </Item>
      </Stack>
    </Box>
  )
}

export default Order