import { Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
interface ILocationProps {
  locate: string;
  date: string;
}
export const LocationInfo = ({ locate, date }: ILocationProps) => {
  return (
    <>
      <Typography lineHeight={2} gutterBottom variant={"h4"} component={"div"}>
        {locate}
        <br />
      </Typography>
      {date}
    </>
  );
};
