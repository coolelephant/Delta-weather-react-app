import { Button, Grid, Paper, TextField } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright '}
      <Link color="inherit" href="https://mui.com/">
        Delta Weather
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const SignUp = () => {
  return (
    <Grid container justifyContent={"center"} height={"100vh"}>
      <Grid item xs={12} md={5} component={Paper} elevation={4} square>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <TextField fullWidth label={"email"} />
        <TextField fullWidth label={"password"} />
        <TextField fullWidth label={"name"} />
        <Button>회원가입</Button>
      <Copyright sx={{ mt: 5 }} />
      </Grid>
    </Grid>
  );
};
