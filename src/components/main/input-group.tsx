import { MenuItem, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ChangeEvent, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface IInputGroup {
  locate: string;
  locateList: string[];
  handleLocate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDate: (date: string) => void;
}
export const InputGroup = ({
  locate,
  locateList,
  handleLocate,
  handleDate,
}: IInputGroup) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <>
      <TextField select value={locate} onChange={handleLocate} fullWidth>
        {locateList.map((value) => {
          return <MenuItem value={value}>{value}</MenuItem>;
        })}
      </TextField>
      {/* <TextField type={"date"} value={date} onChange={handleDate} fullWidth /> */}

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            handleDate(newValue?.format("YYYY.MM.DD HH:mm:ss")!);
          }}
        />
      </LocalizationProvider>
    </>
  );
};
