import { Button, Grid, Paper, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Copyright } from "../components/common/copyright";
import { Box } from "@mui/system";
import { green } from "@mui/material/colors";

export const SignIn = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/signup");
  };

  return (
    <Grid
      container
      // textAlign={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Grid
        // textAlign={"center"}
        item
        xs={12}
        md={5} 
        component={Paper}
        elevation={4}
        square
        spacing={5}
      >
        <Box
          marginTop={"40px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Avatar sx={{ m: 1, bgcolor: green[600]}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Grid container spacing={1} justifyContent={'center'}>
            <Grid item xs={11.5}>
              <TextField fullWidth label={"email"} />
            </Grid>
            <Grid item xs={11.5}>
              <TextField fullWidth label={"password"} />
            </Grid>
          </Grid>
          <Grid alignSelf={"end"} sx={{right:0, marginRight:"10px"}}>
            <Button size="small" variant="text" onClick={onClickButton} sx={{color : green[100]}}>
              Don't you have an account? Sign up
            </Button>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              alignItems: "center",
              backgroundColor: green[300]
            }}
          >
            Sign In
          </Button>
          <Copyright />
        </Box>

      </Grid>
    </Grid>
  );
}
