import React from 'react';
import Header from '../Header/Header';
import Login from '../Authinticate/Login/Login';
import { Box } from '@mui/material';
import SignIn from '../Authinticate/SignIn';
import Test from '../Test/Test';

const Home = () => {
    return (
        <Box container >
            <Header></Header>
            {/* <Login></Login> */}
            {/* <SignIn></SignIn> */}
            <Test></Test>
        </Box>
    );
};

export default Home;