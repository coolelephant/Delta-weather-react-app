import { Menu } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardFrame } from "../components/common/card-frame";
import { Copyright } from "../components/common/copyright";
import { Header } from "../components/common/header";
import { NavFrame } from "../components/common/nav-frame";
import { TextButton } from "../components/common/text-button";
import { SubmitButton } from "../components/home/submit-button";

export const Home = () => {
  const navigate = useNavigate();

  const onClickTextButton = () => {
    navigate("/signin");
  };
  const onClickSubmit = () => {
    // sumit hooks
  };
  return (
    <Grid container spacing={5} padding={`50px`}>
      <Grid item>
        <NavFrame>
          <Header />
          <TextButton text={"login"} onClick={onClickTextButton} />
        </NavFrame>
      </Grid>

      <Grid item container lg={12} spacing={10}>
        <Grid item lg={6}>
          <CardFrame />
        </Grid>
        <Grid item lg={6}>
          <CardFrame />
        </Grid>
      </Grid>
      <Grid item lg={12} textAlign={"right"}>
        <SubmitButton onClick={onClickSubmit} />
      </Grid>
      <Grid item lg={12}>
        <Copyright />
      </Grid>
    </Grid>
  );
};
