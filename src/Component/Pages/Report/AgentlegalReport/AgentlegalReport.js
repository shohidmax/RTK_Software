import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead'; 
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography, TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';

const columns = [  
    { id: '123', label: ' SL No', minWidth: 10 }, 
    { id: 'ID', label: 'Agent ID', minWidth: 10 }, 
    { id: 'Name', label: 'Company Name', minWidth: 10 }, 
    { id: 'Password', label: 'Ledger Type', minWidth: 10}, 
    { id: 'Designations', label: 'Ledger Discription', minWidth: 10 }, 
    { id: 'Role', label: 'Cost', minWidth: 10 }, 
    { id: 'Nid_Copy', label: 'Transaction Date', minWidth: 10 }, 
    { id: 'Phone_Number', label: 'Attachment', minWidth: 10 }, 
    { id: 'create_at', label: 'Last Balance', minWidth: 10 } 
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
    {id: 1, Agentid: 'Sn1244352ow', Company_name: 'ac/dc', ledger: 'ac/dc', desnation: 35, role: '15000', nid: 'nid0987777', phone: 'nid', carate: ' 6366'},  
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
    {id: 2, staffid: 'Sn1244352ow', username: 'Jon', password: 3544, desnation: 35, role: '18600', nid: 'nid0987777', phone: 'nid/passport', carate: ' 6366'},   
     

];


export default function AgentligalReport() {
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
        <Box display="flex" p={2}  sx="">
        <Typography variant='h6' > My Agent Legal Report</Typography> 
        </Box>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 'auto' }}>
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