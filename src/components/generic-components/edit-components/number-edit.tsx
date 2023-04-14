import { ReactNode } from "react";
import { EditProps } from "@components/generic-components/edit-components/common";
import { TextField } from "@mui/material";

export const NumberEdit = ({
  key,
  label,
  value,
  onChangeValue,
  disabled,
}: EditProps<number>): ReactNode => {
  return (
    <TextField
      key={key}
      type={"number"}
      label={label}
      disabled={disabled}
      value={value}
      onChange={(e) => {
        onChangeValue && onChangeValue(Number(e.target.value || "0"));
      }}
      variant={"outlined"}
      fullWidth={true}
    />
  );
};
