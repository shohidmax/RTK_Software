import React from 'react';
import Header from '../Header/Header';
import Login from '../Authinticate/Login/Login';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box container >
            <Header></Header>
            <Login></Login>
            
        </Box>
    );
};

export default Home;