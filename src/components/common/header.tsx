import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MainImg from "../../assets/main.png";

// const useStyles = makeStyles({
//   btn: {
//     width: `100px`,
//     height: `100px`,
//   },
// });

export const Header = () => {
  // const classes = useStyles();
  return (
    <>
      <img src={MainImg} width={`100px`} height={`100px`} />
      <Typography sx={{ flexGrow: 1 }}> </Typography>
    </>
  );
};
