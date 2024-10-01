import React from 'react';
import {
  Typography,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Button,
  CssBaseline,
  Box,
  Link,
} from '@mui/material';
import img from '../assets/login_image1.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    const passwordRegex = /^(?=.*[0-9].*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError('Password must be at least 8 characters long and include at least two numbers and one special character');
    } else {
      setPasswordError('');
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailError && !passwordError) {
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div className="bg-white h-screen w-screen flex flex-col md:flex-row items-center justify-center p-8">
      <CssBaseline />
      <img src={img} alt="login" className='w-1/3 mx-16' />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
          />
          <FormControl variant="outlined" margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              error={!!passwordError}
            />
            <Typography variant="caption" color="error">
              {passwordError}
            </Typography>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Typography variant="body2" color="textSecondary" align="center">
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            Don’t have an account? <Link href="/Createaccount">Sign up</Link>
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              startIcon={<img src={google} alt="google" />}
              fullWidth
            >
              Sign up with Google
            </Button>
            <Button
              variant="outlined"
              startIcon={<img src={facebook} alt="facebook" />}
              fullWidth
            >
              Sign up with Facebook
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
