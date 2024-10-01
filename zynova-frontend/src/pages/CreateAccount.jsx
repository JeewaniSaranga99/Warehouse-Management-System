import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Input,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import img from '../assets/login_image1.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';

const getCurrentGreeting = () => {
  const curDate = new Date().getHours();
  if (curDate >= 1 && curDate < 12) return "Good Morning!";
  if (curDate >= 12 && curDate < 16) return "Good Afternoon!";
  return "Good Evening!";
};

const CreateAccount = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (e) => e.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    setIsSubmitting(true);
  };

  const validate = () => {
    let errors = {};
    if (!fullName) errors.fullName = "Full Name is required";
    if (!email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email address is invalid";
    if (!password) errors.password = "Password is required";
    else if (password.length < 8) errors.password = "Password must be at least 8 characters";
    if (!confirmPassword) errors.confirmPassword = "Confirm Password is required";
    else if (confirmPassword !== password) errors.confirmPassword = "Passwords do not match";
    return errors;
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", padding: "20px" }}>
      <Box sx={{ display: "flex", position: "relative", height: "1024px", width: "1440px", borderRadius: "36px" }}>
        <Box
          sx={{
            width: "417px",
            flexShrink: "0",
            background: "linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)",
            borderRadius: "25px 0 0 25px",
            padding: "81px 72px 0 72px",
            color: "#FFF",
          }}
        >
          <Typography sx={{ fontSize: "24px", fontWeight: "500", letterSpacing: "2px" }}>
            {getCurrentGreeting()}
          </Typography>
          <Typography sx={{ fontSize: "48px", fontWeight: "900", letterSpacing: "2px" }}>
            HAVE A NICE DAY
          </Typography>
        </Box>

        <Box
          component="img"
          src={img}
          sx={{
            width: "500px",
            height: "356px",
            position: "absolute",
            bottom: "0px",
            left: "-1px",
            borderRadius: "0 0 0 25px",
          }}
        />

        <Paper elevation={3} sx={{ padding: "36px", borderRadius: "0px 25px 25px 0px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "62px", padding: "81px 0 0 110px" }}>
            <Typography sx={{ fontSize: "48px", fontWeight: "700", letterSpacing: "3.84px", color: "#277502" }}>
              Create Account
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
              <Stack direction="row" spacing={3}>
                <Button variant="outlined" sx={{ width: "331px", height: "73px", textTransform: "none" }}>
                  <Box component="img" src={google} sx={{ width: "38px", height: "35px", position: "absolute", left: "38px" }} />
                  <Typography sx={{ position: "absolute", right: "52px", color: "#5A5A5A", fontSize: "18px", fontWeight: "600" }}>
                    Sign up with Google
                  </Typography>
                </Button>
                <Button variant="outlined" sx={{ width: "331px", height: "73px", textTransform: "none" }}>
                  <Box component="img" src={facebook} sx={{ width: "38px", height: "35px", position: "absolute", left: "38px" }} />
                  <Typography sx={{ position: "absolute", right: "43px", color: "#5A5A5A", fontSize: "18px", fontWeight: "600" }}>
                    Sign up with Facebook
                  </Typography>
                </Button>
              </Stack>

              <Typography sx={{ fontSize: "18px", fontWeight: "400", color: "#A3A3A3" }}>- OR -</Typography>

              <TextField
                id="fullName"
                label="Full Name"
                variant="standard"
                value={fullName}
                onChange={handleInputChange(setFullName)}
                sx={{ width: "714px" }}
                error={!!errors.fullName}
                helperText={errors.fullName}
              />
              <TextField
                id="emailAddress"
                label="Email Address"
                variant="standard"
                value={email}
                onChange={handleInputChange(setEmail)}
                sx={{ width: "714px" }}
                error={!!errors.email}
                helperText={errors.email}
              />
              <FormControl variant="standard" sx={{ width: "714px" }} error={!!errors.password}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleInputChange(setPassword)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password && (
                  <Typography variant="caption" color="error">
                    {errors.password}
                  </Typography>
                )}
              </FormControl>
              <FormControl variant="standard" sx={{ width: "714px" }} error={!!errors.confirmPassword}>
                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleInputChange(setConfirmPassword)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.confirmPassword && (
                  <Typography variant="caption" color="error">
                    {errors.confirmPassword}
                  </Typography>
                )}
              </FormControl>
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                padding: "16px 234px",
                borderRadius: "8px",
                textTransform: "none",
                background: "linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)",
              }}
              onClick={handleSubmit}
            >
              <Typography sx={{ color: "#FFF", fontSize: "20px", fontWeight: "600", textAlign: "center" }}>
                Create Account
              </Typography>
            </Button>

            {formSubmitted && (
              <Typography variant="body1" color="primary" sx={{ marginTop: "20px", textAlign: "center" }}>
                Account created successfully!
              </Typography>
            )}

            <Typography sx={{ fontSize: "20px", color: "#5FC301", marginTop: "30px" }}>
              Do you have an account? <a href="/Createaccount" style={{ fontWeight: "bold", color: "#5FC301" }}>Log in</a>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default CreateAccount;