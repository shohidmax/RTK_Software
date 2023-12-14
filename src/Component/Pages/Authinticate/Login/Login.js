 import { Avatar, Box, Grid, Typography  } from '@mui/material'; 
import React from 'react'; 
import SignIn from '../SignIn';
import MenuIcon from '@mui/icons-material/Menu';
const Login = () => {
     
    return (
        <Box 
            container  
            display="flex"
            justifyContent="center"
            alignItems="center" 
            m={4} >  
                <Grid
                xs={8}
                  container 
                  direction="row"
                  justifyContent="center" 
                  alignItems="center"
                  alignContent="center" 
                  wrap="wrap"
                  bgcolor='#ffff'
                  sx={{  
                    height: '750px',
                    weight: '75%',
                    alignContent: 'center',  
                    display: 'flex-row',

                  }}
                >
                    <Box  item spacing={2} xs={4}   bgcolor='#342'  sx={{
                        width: '40%',
                        height: '650px',
                        display: 'flex-colum',
                        alignItems: 'center',
                        justifyContent: 'justify-between',  

                    }} >
                        <Box display="" mx="" my="" sx="">
                        <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" />

                        <Typography variant="h6" color="initial" sx={{
                            color:'white',
                            textAlign: 'center'
                        }} justifyContent='center'> Welcome Back</Typography> 
                        <Typography variant="body2" color="initial" sx={{
                            color:'white',
                            textAlign: 'center'
                        }} justifyContent='center'> you just one step aware to your fed</Typography>  
                          
                        </Box>
                        <Box />
                            <Box display="" mx="" my="" sx="">
                                <img
                                    src="https://i.ibb.co/1Kb1r7w/Group-6.png" // Replace with the actual path to your image
                                    alt="Description of the image"
                                    style={{ width: '100%', height: 'auto' }} // Optional styling
                                />
                              
                            </Box>
                            <Box display="" mx="" my="" sx="">
                                    <img
                                        src="https://i.ibb.co/b54msk7/Vector-1-1.png" // Replace with the actual path to your image
                                        alt="Description of the image"
                                        style={{ width: '100%', height: 'auto' }} // Optional styling
                                    />
                            </Box>
                    </Box>
                    <Box item spacing={2}  xs={8} bgcolor='#81ecec'  sx={{
                        width: '60%',
                        height: '650px',
                        border: '2px'
                    }} > 
                    <SignIn></SignIn>
                    </Box>
                  
                </Grid>
               


        </Box>
    );
};

export default Login;