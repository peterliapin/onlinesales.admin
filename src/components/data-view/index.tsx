import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { ViewListItemText, ViewRowGrid } from "./index.styled";

type dataViewProps = {
  header: string;
  rows: { label: string; value: any }[] | undefined;
};

export const DataView = ({ header, rows }: dataViewProps) => {
  return (
    <Card>
      <CardContent>
        <Grid xs={12} sm={12} item>
          <Typography gutterBottom variant="h6" component="div">
            {header}
          </Typography>
        </Grid>
        {rows &&
          rows.map(({ label, value }, index) => (
            <Fragment key={index}>
              <ViewRowGrid container marginBottom={2}>
                <ViewListItemText primary={label} secondary={value} />
              </ViewRowGrid>
            </Fragment>
          ))}
      </CardContent>
    </Card>
  );
};

export const DataViewNoLabel = ({ header, rows }: dataViewProps) => {
  return (
    <Card>
      <CardContent>
        <Grid xs={12} sm={12} item>
          <Typography gutterBottom variant="h6" component="div">
            {header}
          </Typography>
        </Grid>
        {rows &&
          rows.map(({ label, value }, index) => (
            <Fragment key={index}>
              <Typography variant="body2">{value}</Typography>
            </Fragment>
          ))}
      </CardContent>
    </Card>
  );
};
