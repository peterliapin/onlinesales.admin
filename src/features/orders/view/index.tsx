import { Grid } from "@mui/material";
import { DataView } from "components/data-view";

export const OrderViewBase = () => {
  const contactViewData = [
    { label: "Customer", value: "Test customer" },
    { label: "Id", value: "ID123" },
  ];

  return (
    <Grid container spacing={3}>
      <DataView header="Order details" rows={contactViewData}></DataView>
    </Grid>
  );
};
