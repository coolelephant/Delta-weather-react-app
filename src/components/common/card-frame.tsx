import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { ReactNode } from "react";

const useStyles = makeStyles({
  root: {
    height: `600px`,
    borderRadius: `50px`,
    border: `1px solid red`,
    display: `flex`,
    justifyContent: `center`,
    // opacity: `0.6`,
  },
  card: {
    margin: `auto`,
    width: `400px`,
    height: `400px`,
    border: `1px solid black`,
    textAlign: `center`,
  },
});

interface ICardFrameProps {
  children: ReactNode;
  image: string;
}
export const CardFrame = ({ children, image }: ICardFrameProps) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      // style={{ backgroundImage: `url(${image})` }}
    >
      <Box className={classes.card}>
        <Stack spacing={3}>{children}</Stack>
      </Box>
    </Box>
  );
};
