import { Box, TablePagination } from '@mui/material';
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Userreport = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 30, city: 'New York' },
        { id: 2, name: 'Jane Doe', age: 25, city: 'San Francisco' },
        { id: 3, name: 'Bob Smith', age: 35, city: 'Los Angeles' },
        { id: 3, name: 'Bob Smith', age: 35, city: 'Los Angeles' },
        { id: 3, name: 'Bob Smith', age: 35, city: 'Los Angeles' },
        { id: 3, name: 'Bob Smith', age: 35, city: 'Los Angeles' },
      
      ];
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
      
    return (
        <Box>
             <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
        </Box>
    );
};

export default Userreport;