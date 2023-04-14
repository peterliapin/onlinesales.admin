import { ContactCardHeader, ContactRowGrid } from "@features/contacts/index.styled";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { Fragment } from "react";

type dataViewProps = {
  header: string;
  rows: { label: string; value: any }[];
};

export const DataView = ({ header, rows }: dataViewProps) => {
  return (
    <Grid xs={12} sm={6} item>
      <Card>
        <CardContent>
          <ContactCardHeader title={header}></ContactCardHeader>
          <Divider variant="fullWidth" />
          {rows.map(({ label, value }, index) => (
            <Fragment key={index}>
              <ContactRowGrid container>
                <Grid item xs={2}>
                  <Typography fontWeight="bold">{label}</Typography>
                </Grid>
                <Grid item xs={10}>
                  {value}
                </Grid>
              </ContactRowGrid>
              <Divider variant="fullWidth" />
            </Fragment>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};