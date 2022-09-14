import { Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <Grid container>
        <Grid item xs={12}>
          {"Copyright "}
          <Link color="inherit" href="https://mui.com/">
            {"Delta Weather"}
          </Link>
        </Grid>
        <Grid item xs={12}>
          {"2022."}
        </Grid>
      </Grid>
    </Typography>
  );
};
