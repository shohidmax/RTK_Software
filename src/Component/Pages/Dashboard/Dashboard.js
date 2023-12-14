import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box'; 
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List'; 
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';  
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Link as linkmuu} from '@mui/material/Link'; 
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'; 
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import LayersIcon from '@mui/icons-material/Layers'; 
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Link as RouterLink, Outlet } from 'react-router-dom'; 
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupsIcon from '@mui/icons-material/Groups';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography'
import LogoutIcon from '@mui/icons-material/Logout';




const drawerWidth = 240;
 

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box xs={12} sx={{ display: 'flex' }}>
        <CssBaseline />
         
        <Drawer variant="permanent" open={open}>  
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              
            }}
          >
            {open? <Typography variant="body1" color="initial"> RTK Softwire</Typography> : ''}

            <IconButton onClick={toggleDrawer}> 
              <MenuIcon />
            </IconButton>
          </Toolbar>
          
          <Divider />
          <Grid  xs={12}
          container
          justifyContent="space-between"
          alignItems="center">
              <Grid display="" container item mx="" my="" sx="">
              <List component="nav"> 
          <ListItemButton component={RouterLink} to="/dashboard/1">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            </ListItemButton>
            
            <ListItemButton component={RouterLink} to="/dashboard/2">
            <ListItemIcon>
                <AccountBoxIcon /> 
            </ListItemIcon>
            <ListItemText primary="My Accounts" />
            </ListItemButton>

            <ListItemButton component={RouterLink} to="/dashboard/agent-legal-report/v1">
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Consumer" />
            </ListItemButton>

            <ListItemButton component={RouterLink} to="/dashboard/1">
            <ListItemIcon>
                <BoltIcon />
            </ListItemIcon> 
            <ListItemText primary="Payment"  /> 
            </ListItemButton >

            <ListItemButton component={RouterLink} to="/dashboard/mystaff"> 
            <ListItemIcon>
                <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Staff"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard/myagent"> 
            <ListItemIcon>
                <SupportAgentIcon/>
            </ListItemIcon>
            <ListItemText primary="Agent"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard/addstaff"> 
            <ListItemIcon>
                <PendingActionsIcon />
            </ListItemIcon>
            <ListItemText primary="Inventry"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard"> 
            <ListItemIcon>
                <TimelapseIcon />
            </ListItemIcon>
            <ListItemText primary="Activity"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard"> 
            <ListItemIcon>
                <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Company profile"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Deposite"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Coustomer"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Request Senter"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Activity"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Ledger"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Report"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Download Center"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="log"  />
            </ListItemButton> 
             
          </List>
                
                
              </Grid>
              <Grid display="" container item mx="" my="" sx="">
                <List component='nav'>
                <ListItemButton sx={{
                  display: 'flex',
                  flexDirection:'column'
                }} component={RouterLink} to="/dashboard/5"> 
                  {
                    !open? "": <><ListItemText primary="Abdullah"/> 
                    <ListItemText primary="Project namager"/> </>
                  }

                </ListItemButton>

              <ListItemButton component={RouterLink} to="/dashboard/5"> 
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout"  />
            </ListItemButton>

                </List>
                
              </Grid>
            
          </Grid>
        </Drawer>
        <Box
          component="main" 
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto' 
          }}
        >
           <Paper elevation={8}  xs={{
              overflow: 'hidden',
             }}>
                <Grid container    p={1}> 
                          <Box item  xs={12} md={8} lg={9}  sx={{
                            background: '#ffff',
                            width: '100%',
                            height:'100%',  
                          }}>
                          <Outlet></Outlet> 
                            
                          </Box> 
                      
                      
                    </Grid> 
             </Paper>
          


              {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={1}> 
                      <Box item  xs={12} md={8} lg={9}  sx={{
                        background: 'gray',
                        width: '100vw',
                        height:'100vh',
                        overflow: 'hidden'
                      }}>
                      <Outlet></Outlet> 
                        
                      </Box> 
                  
                  
                </Grid> 
              </Container> */}
            
        </Box> 
      </Box> 
    </ThemeProvider>
  );
}

{/* <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    width: '100%'
                  }}
                >
                  
                 </Paper> */}