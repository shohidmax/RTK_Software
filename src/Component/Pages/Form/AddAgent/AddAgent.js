import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles'; 
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const AddAgent = () => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });




    return (
        <Box container   p={4} sx={{
            width: '100%',
            height: '1000px'

        }} >
            <Typography variant="h2" color="initial" sx={{
                textAlign:'start',
                padding: '20px'
            }}>Add Agent</Typography>
            <Grid container spacing={2} >
                <Box item display="true" xs={4} spacing={4}  sx={{
                    margin: 4,
                    flex: 'inline',
                    alignContent: 'center',
                    display:'flex',
                    alignItems: 'center', 

                }}>
                    <TextField id="standard-basic"   label="Name" variant="standard" required sx={{
                    width: '350px' , 
                     }}/> 
                </Box>
                <Box item display="true"  xs={4} spacing={4}  sx={{
                    margin: 4,
                    flex: 'inline'

                }}>
                <TextField id="standard-basic"   label="Company Name" variant="standard" required sx={{
                    width: '350px' 
                }}/> 
                </Box>
              
                <Box item display="true"  xs={4} spacing={4}  sx={{
                    margin: 4,
                    flex: 'inline'

                }}>
                <TextField id="standard-basic"   label="Phone Number" type='text' variant="standard" required sx={{
                    width: '350px' 
                }}/> 
                </Box>
              
                <Box item display="true"  xs={4} spacing={4}  sx={{
                    margin: 4,
                    flex: 'inline'

                }}>
                <TextField id="standard-basic" type='text'  label="Address" variant="standard" required sx={{
                    width: '350px' 
                }}/> 
                </Box>
              
                <Box item display="true"  xs={4} spacing={4}  sx={{
                    margin: 4,
                    flex: 'inline'

                }}>
                <TextField id="standard-basic"   label="Email" type='email' variant="standard" required sx={{
                    width: '350px' 
                }}/> 
                </Box>
              
                <Box item display="true"   xs={4} spacing={4}  sx={{
                    margin: 4,
                    flex: 'inline'

                }}> 
                <TextField id="standard-basic" type='password'   label="Password" variant="standard" required sx={{
                    width: '350px' 
                }}/> 
                </Box>
              
                <Box item display="true"   xs={4} spacing={4}  sx={{
                    margin: 4,
                    flex: 'inline'

                }}> 
                    <Button component="label"   variant="contained" startIcon={<CloudUploadIcon />}>
                    Upload Nid file
                    <VisuallyHiddenInput type="file" />
                    </Button> 
                </Box>
                <Box item display="true"   xs={4} spacing={4}  sx={{
                    margin: 4,
                    flex: 'inline'

                }}> 
                    <Button component="label"   variant="contained" startIcon={<CloudUploadIcon />}>
                    Upload Tin file
                    <VisuallyHiddenInput type="file" />
                    </Button> 
                </Box>
            </Grid>

            <Button size='large' sx={{
                width:'150px'
            }} variant="contained">submit</Button>
                
        </Box>
    );
};

export default AddAgent;