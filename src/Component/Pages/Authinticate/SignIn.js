import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; 

class SignIn extends Component {
 constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
 }

 handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log({
      email: this.state.email, 
      password: this.state.password,
    });
    event.target.reset();
 };

 handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
 }; 

 render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Agent Login
          </Typography>
          <Typography   variant="body-1" xs={{
            textAlign: 'start',
            TextDecoder: 'none'
          }}>
          Don’t have an account ? <Link top='/bangla'>Create Account</Link> 
          </Typography>
          <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.email}
              onChange={this.handleChange}
              variant='standard'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleChange}
              variant='standard'
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                 Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                 {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box> 
      </Container>
    );
 }
}

export default SignIn;