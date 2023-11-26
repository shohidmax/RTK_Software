 import { Avatar, Box, Grid, Typography  } from '@mui/material'; 
import React from 'react'; 
import SignIn from '../SignIn';

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
                    height: '75%',
                    weight: '75%',
                    alignContent: 'center',  
                    display: 'flex-row',
                  }}
                >
                    <Box  item spacing={2} xs={4}   bgcolor='#342DAE'  sx={{
                        width: '40%',
                        height: '65vh',  

                    }} >
                        <Avatar alt="Remy Sharp" src="https://img.freepik.com/premium-photo/village-bangladesh_865967-58325.jpg" />
                        <Typography variant="body1" color="initial"> Welcome Back</Typography> 
                        <Typography variant="body1" color="initial"> you just one step aware to your fed </Typography>  
                        <Box
                            component="img"
                            sx={{
                                height: 233,
                                width: '100%',
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="login alter"
                            src="https://i.ibb.co/1Kb1r7w/Group-6.png"
                            />
                    </Box>
                    <Box item spacing={2}  xs={8} bgcolor='#81ecec'  sx={{
                        width: '60%',
                        height: '65vh',
                        border: '2px'
                    }} > 
                    <SignIn></SignIn>
                    </Box>
                  
                </Grid>
               


        </Box>
    );
};

export default Login;