import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const SavingBar = () => {
  return (
    <Grid container spacing={3} sm="auto" xs="auto">
      <Grid item>
        <CircularProgress size={14} />
      </Grid>
      <Grid item>
        <Typography>Saving...</Typography>
      </Grid>
    </Grid>
  );
};
