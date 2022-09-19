import { Button, colors, Grid, Paper, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { Copyright } from "../components/common/copyright";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { blue, deepOrange, green, yellow } from "@mui/material/colors";
import { ChangeEvent, useState } from "react";
import { signUp, test } from "../services/sign";
import { useSignup } from "../hooks/use-signup";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const { signupHandler, data } = useSignup(signUp, {
    email: email,
    password: password,
    name: name,
  });

  // const signupHandler = () => {
  //   signUp({ email: email, password: password, name: name });
  // };
  const navigate = useNavigate();

  const testHandler = () => {
    test();
  };

  const onClickButton = () => {
    navigate("/signin");
  };

  return (
    <Grid
      container
      // textAlign={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Grid
        textAlign={"center"}
        container
        item
        xs={12}
        md={5}
        component={Paper}
        elevation={4}
        square
        spacing={5}
      >
        <Box
          marginTop={"90px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Avatar sx={{ m: 1, bgcolor: green[600] }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Grid container spacing={1} justifyContent={"center"}>
            <Grid item xs={11.5}>
              <TextField
                fullWidth
                label={"email"}
                value={email}
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={11.5}>
              <TextField
                fullWidth
                label={"password"}
                value={password}
                onChange={handlePassword}
              />
            </Grid>
            <Grid item xs={11.5}>
              <TextField
                fullWidth
                label={"name"}
                value={name}
                onChange={handleName}
              />
            </Grid>
          </Grid>
          <Grid alignSelf={"end"} sx={{ right: 0, marginRight: "10px" }}>
            <Button
              size="small"
              variant="text"
              onClick={onClickButton}
              sx={{ color: green[100] }}
            >
              If you already have an account, Sign in
            </Button>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              alignItems: "center",
              bgcolor: green[300],
            }}
            onClick={signupHandler}
          >
            Sign Up
          </Button>
          <Copyright />
          <Button onClick={testHandler}>test</Button>
        </Box>
      </Grid>
    </Grid>
  );
};
