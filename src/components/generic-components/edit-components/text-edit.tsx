import { ReactNode } from "react";
import { EditProps } from "@components/generic-components/edit-components/common";
import { TextField } from "@mui/material";

export const TextEdit = ({
  key,
  label,
  value,
  onChangeValue,
  disabled,
}: EditProps<string>): ReactNode => {
  return (
    <TextField
      key={key}
      type={"text"}
      label={label}
      disabled={disabled}
      value={value}
      onChange={(e) => {
        onChangeValue && onChangeValue(e.target.value);
      }}
      variant={"outlined"}
      fullWidth={true}
    />
  );
};
