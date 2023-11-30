import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box'; 
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List'; 
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton'; 
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Link as linkmuu} from '@mui/material/Link'; 
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers'; 
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Link as RouterLink, Outlet } from 'react-router-dom'; 

 

const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

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
            <IconButton onClick={toggleDrawer}> 
              <WidgetsIcon />
            </IconButton>
          </Toolbar>
          
          <Divider />
          <List component="nav"> 
          <ListItemButton component={RouterLink} to="/dashboard/1">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            </ListItemButton>
            
            <ListItemButton component={RouterLink} to="/dashboard/2">
            <ListItemIcon>
                <ShoppingCartIcon /> 
            </ListItemIcon>
            <ListItemText primary="Orders" />
            </ListItemButton>

            <ListItemButton component={RouterLink} to="/dashboard/3">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
            </ListItemButton>

            <ListItemButton component={RouterLink} to="/dashboard/4">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon> 
            <ListItemText primary="Reports"  /> 
            </ListItemButton >

            <ListItemButton component={RouterLink} to="/dashboard/5"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard/5"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard/5"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations"  />
            </ListItemButton> 
            <ListItemButton component={RouterLink} to="/dashboard/5"> 
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations"  />
            </ListItemButton> 
            <Divider sx={{ my: 1 }} /> 
          </List>
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
            overflow: 'auto',
          }}
        >
          <Toolbar />


              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
              </Container>
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