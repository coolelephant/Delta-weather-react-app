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

interface IPostionProps {
  lat: number;
  lng: number;
}
export const KMap = () => {
  const [position, setPosition] = useState<IPostionProps>();
  const [open, setOpen] = useState(false);

  const openMapDialog = () => {
    setOpen(true);
  };

  const closeMapDialog = () => {
    setOpen(false);
  };
  return (
    <>
      <Box>
        {position && (
          <p>{"위도: " + position.lat + " 경도: " + position.lng}</p>
        )}
        <IconButton onClick={openMapDialog}>
          <MapIcon />
        </IconButton>
      </Box>

      <Dialog open={open}>
        <DialogTitle>{"select position"}</DialogTitle>
        <DialogContent>
          <Map
            center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
            style={{ width: "500px", height: "500px" }}
            onClick={(_t, mouseEvent) =>
              setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              })
            }
          >
            {position && <MapMarker position={position} />}
          </Map>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={closeMapDialog}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
