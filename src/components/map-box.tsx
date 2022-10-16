import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import MapIcon from "@mui/icons-material/Map";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { KakaoMap } from "./kakao-map";

interface IMapBoxProps {
  position: {
    lat: number;
    lng: number;
  };
  open: boolean;
  getPosition: (
    _t: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => void;
  openDialog: () => void;
  closeDialog: () => void;
}
export const MapBox = ({
  position,
  open,
  getPosition,
  openDialog,
  closeDialog,
}: IMapBoxProps) => {
  return (
    <>
      <Box>
        {position && (
          <p>{"위도: " + position.lat + " 경도: " + position.lng}</p>
        )}
        {/* <IconButton onClick={openDialog}>
          <MapIcon />
        </IconButton> */}
        <Box width={"733px"} height={"70px"} bgcolor={"#e5e5e5"}>
          {"지역 text"}
          <IconButton onClick={openDialog}>
            <MapIcon />
          </IconButton>
        </Box>
      </Box>

      <Dialog open={open}>
        <DialogTitle>{"select position"}</DialogTitle>
        <DialogContent>
          <KakaoMap position={position} onClick={getPosition} />
        </DialogContent>
        <DialogActions>
          <IconButton onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
