import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Box } from "@mui/system";

const useStyles = makeStyles({
  root: {
    height: `600px`,
    borderRadius: `50px`,
    border: `1px solid red`,
    display: `flex`,
    justifyContent: `center`,
  },
  card: {
    margin: `auto`,
    width: `400px`,
    height: `400px`,
    border: `1px solid black`,
    textAlign: `center`,
  },
});

export const CardFrame = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.card}>
        <Typography gutterBottom variant={"h5"} component={"div"}>
          {"위치"}
        </Typography>
        <Typography variant={"body2"}>{"시간"}</Typography>
      </Box>
    </Box>
  );
};
