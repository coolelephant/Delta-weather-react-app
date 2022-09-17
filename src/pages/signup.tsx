import { Button, Grid, Paper, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Copyright } from "../components/common/copyright";

export const SignUp = () => {
  return (
    <Grid container justifyContent={"center"} height={"100vh"}>
      <Grid item xs={12} md={5} component={Paper} elevation={4} square textAlign={'center'}>
        {/* <Avatar sx={{ 
          marginTop: 8,
          m: 1, bgcolor: "secondary.main", 
          alignItems: 'center'
        }}> */}
          <LockOutlinedIcon />
        {/* </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField fullWidth label={"email"}/> 
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label={"password"} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label={"name"} />
          </Grid>
        </Grid>
        <Button
                type="submit"
                variant="contained"
                sx={{ 
                  mt: 3, mb: 2,
                  alignItems: 'center',
                }}
              >
                Sign Up
        </Button>
        <Copyright />
      </Grid>
    </Grid>
  );
};
