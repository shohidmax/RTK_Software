import React from 'react';
import AddAgent from '../Form/AddAgent/AddAgent';
import Mystaff from '../Report/Mystaff/Mystaff';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Test = () => {
    let location = useLocation();
    const loca = () =>{
        console.log(location);
    }

    return (
        <div>
           <Mystaff/>
           <Button onClick={loca} variant='outlied'>use loacation</Button>
        </div>
    );
};

export default Test;
const columns = [
    { id: 'ID', label: 'Staff ID', minWidth: 170 },
    { id: 'Name', label: 'Username', minWidth: 100 }, 
    { id: 'Password', label: 'Password', minWidth: 100 }, 
    { id: 'Designations', label: 'Designations', minWidth: 100 }, 
    { id: 'Role', label: 'Role', minWidth: 100 }, 
    { id: 'Nid_Copy', label: 'Nid Copy', minWidth: 100 }, 
    { id: 'Phone_Number', label: 'Phone Number', minWidth: 100 }, 
    { id: 'create_at', label: 'create at', minWidth: 100 }, 
    { id: 'Last_Update', label: 'Last Update at', minWidth: 100 }, 
    { id: 'Action', label: 'Action', minWidth: 100 }, 
    
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];