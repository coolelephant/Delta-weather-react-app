import { Header } from "../components/common/header";
import { Grid, IconButton } from "@mui/material";
import { NavFrame } from "../components/common/nav-frame";
import { TextButton } from "../components/common/text-button";
import { Map } from "../components/map";
import { Copyright } from "../components/common/copyright";
import { Box } from "@mui/system";
import MapIcon from "@mui/icons-material/Map";
import { useState } from "react";
import { MapBox } from "../components/map-box";
import { isClassElement } from "typescript";

export const MyPage = () => {
  const [position, setPosition] = useState({
    lat: 37.558090961074825,
    lng: 126.99847210567884,
  });
  const [open, setOpen] = useState(false);

  const getPosition = (
    _t: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
  };

  const openMapDialog = () => {
    setOpen(true);
  };

  const closeMapDialog = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={5} padding={`50px`}>
      <Grid item>
        <NavFrame>
          <Header />
          {/* <TextButton text={"login"} 
        onClick={handleTextButton}  */}
          {/* /> */}
        </NavFrame>
      </Grid>

      <Grid container item textAlign={"center"} spacing={3}>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <MapBox
            position={position}
            open={open}
            getPosition={getPosition}
            openDialog={openMapDialog}
            closeDialog={closeMapDialog}
          />
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Box width={"733px"} height={"70px"} bgcolor={"#e5e5e5"}>
            {"지역 text"}
            <IconButton>
              <MapIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Box width={"733px"} height={"70px"} bgcolor={"#e5e5e5"}>
            {"지역 text"}
            <IconButton>
              <MapIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Grid item lg={12}>
        <Copyright />
      </Grid>
    </Grid>
  );
};
