import { AppBar, Toolbar, Typography } from "@mui/material";
import { ReactNode } from "react";

interface INavFrameProps {
  children: ReactNode;
}

export const NavFrame = ({ children }: INavFrameProps) => {
  return (
    <>
      <AppBar color="transparent">
        <Toolbar>{children}</Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
