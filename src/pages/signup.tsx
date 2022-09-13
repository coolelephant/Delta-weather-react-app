import { Button, Grid, Paper, TextField } from "@mui/material";

export const SignUp = () => {
  return (
    <Grid container justifyContent={"center"} height={"100vh"}>
      <Grid item xs={12} md={5} component={Paper} elevation={4} square>
        <TextField fullWidth label={"email"} />
        <TextField fullWidth label={"password"} />
        <TextField fullWidth label={"name"} />
        <Button>회원가입</Button>
      </Grid>
    </Grid>
  );
};
