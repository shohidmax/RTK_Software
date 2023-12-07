import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography } from '@mui/material';

const columns = [  
    { id: 'ID', label: ' ID', minWidth: 10 }, 
    { id: 'ID', label: 'Staff ID', minWidth: 10 }, 
    { id: 'Name', label: 'Username', minWidth: 10 }, 
    { id: 'Password', label: 'Password', minWidth: 10}, 
    { id: 'Designations', label: 'Designations', minWidth: 10 }, 
    { id: 'Role', label: 'Role', minWidth: 10 }, 
    { id: 'Nid_Copy', label: 'Nid Copy', minWidth: 10 }, 
    { id: 'Phone_Number', label: 'Phone Number', minWidth: 10 }, 
    { id: 'create_at', label: 'create at', minWidth: 10 }, 
    { id: 'Last_Update', label: 'Last Update at', minWidth: 10 }, 
    { id: 'Action', label: 'Action', minWidth: 10 },  
    
  ];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }
const renderTableCells = (row) => {
    return Object.values(row).map((value, index) => (
      <TableCell key={index} onClick={() =>{
        console.log("clicked");
      }}>{value}</TableCell>
    ));
  };
 
const rows = [ 
    {id: 1, staffid: 'Snow', username: 'shohidmax', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 2, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 3, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 4, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 1, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 1, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 1, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 1, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 1, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 1, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 1, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 1, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 1, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
    {id: 1, staffid: 'Snow', username: 'Jon', password: 3544, desnation: 35, role: 'admin', nid: 'nid0987777', phone: 988766666, carate: '17jan 6366', lastupdate: '2/12/21', action: 'block'},  
     

];


export default function Mystaff() {
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
        <Box display="flex" mx="3px" my="10px" sx="">
        <Typography variant='h4'> My Staff</Typography>
        <Button variant='outlined' size='small' xs={{
          MarginInlineStart:'auto',
          marginStart:'-23px'
        }}>Add Staff</Button>
        </Box>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table  aria-label="sticky table">
          <TableHead  >
            <TableRow > 
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth , background: '#DFDEEB'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox"   key={row.code}>  
                
                    {renderTableCells(row)}
                  </TableRow>
                );
              })} 
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
  );
}