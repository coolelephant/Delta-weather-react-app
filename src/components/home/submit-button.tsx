import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: { width: `340px`, height: `90px` },
});

interface ISubmitButtonProps {
  onClick: () => void;
}
export const SubmitButton = ({ onClick }: ISubmitButtonProps) => {
  const classes = useStyles();
  return (
    <Button onClick={onClick} variant={"contained"} className={classes.button}>
      {"비교하기"}
    </Button>
  );
};
