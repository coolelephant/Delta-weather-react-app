import { Menu } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardFrame } from "../components/common/card-frame";
import { Copyright } from "../components/common/copyright";
import { Header } from "../components/common/header";
import { LocationInfo } from "../components/common/location-info";
import { NavFrame } from "../components/common/nav-frame";
import { TextButton } from "../components/common/text-button";
import { SubmitButton } from "../components/home/submit-button";
import { InputGroup } from "../components/main/input-group";
import Namsan from "../assets/namsan.png";
import dayjs, { Dayjs } from "dayjs";

export const Home = () => {
  const navigate = useNavigate();

  const [prevLocate, setPrevLocate] = useState("중구");
  const [prevDate, setPrevDate] = useState("");
  const [nextLocate, setNextLocate] = useState("중구");
  const [nextDate, setNextDate] = useState("");
  const [locateList, setLocateList] = useState([
    "중구",
    "동대문구",
    "중랑구",
    "종로구",
  ]);

  const handlePrevLoacte = (e: ChangeEvent<HTMLInputElement>) => {
    setPrevLocate(e.target.value);
  };
  const handlePrevDate = (e: string) => {
    setPrevDate(e);
  };
  const handleNextLoacte = (e: ChangeEvent<HTMLInputElement>) => {
    setNextLocate(e.target.value);
  };
  const handleNextDate = (e: string) => {
    setNextDate(e);
  };
  const handleTextButton = () => {
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
          <TextButton text={"login"} onClick={handleTextButton} />
        </NavFrame>
      </Grid>

      <Grid item container lg={12} spacing={10}>
        <Grid item lg={6}>
          <CardFrame image={Namsan}>
            <LocationInfo locate={prevLocate} date={prevDate} />
            <InputGroup
              locate={prevLocate}
              locateList={locateList}
              handleLocate={handlePrevLoacte}
              handleDate={handlePrevDate}
            />
          </CardFrame>
        </Grid>
        <Grid item lg={6}>
          <CardFrame image={Namsan}>
            <LocationInfo locate={nextLocate} date={nextDate} />
            <InputGroup
              locate={nextLocate}
              locateList={locateList}
              handleLocate={handleNextLoacte}
              handleDate={handleNextDate}
            />
          </CardFrame>
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
