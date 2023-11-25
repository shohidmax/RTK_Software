import { Height } from '@mui/icons-material';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const Login = () => {
    return (
        <Box container    > 
                <Box
                  container
                  spacing={4}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="wrap"
                  xs={{
                    height: '75%',
                    weight: '75%',
                    alignContent: 'center', 
                    display: 'flex',
                  }}
                >
                    <Box item spacing={2} xs={4} bgcolor='red' >
                        <Typography variant="body1" color="initial"> login</Typography>
                        <Typography variant="body1" color="initial"> login</Typography>
                        <Typography variant="body1" color="initial"> login</Typography>
                        <Typography variant="body1" color="initial"> login</Typography>
                        <Typography variant="body1" color="initial"> login</Typography> 
                      
                    </Box>
                    <Box item spacing={2} xs={6} bgcolor='red' >
                        <Box display="" mx="auto" my="" sx="">
                         
                            <TextField id="standard-basic" label="Standard" variant="standard"  xs={{
                                width: '70%'
                            }}  /><br/>
                            <TextField id="standard-basic" label="Standard" variant="standard" /><br/>
                            <Button variant="text" color="primary" >
                            Login
                            </Button>
                          
                        </Box>
                      
                    </Box>
                  
                </Box>
               


        </Box>
    );
};

export default Login;