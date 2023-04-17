import {ReactNode} from "react";
import {EditProps} from "@components/generic-components/edit-components/common";
import {TextField} from "@mui/material";

export const NumberEdit = ({
  key,
  label,
  example,
  value,
  onChangeValue,
  disabled,
  required,
  pattern
}: EditProps<number>): ReactNode => {
  return (
    <TextField
      key={key}
      type={"number"}
      label={label}
      title={example}
      disabled={disabled}
      value={value}
      required={required}
      inputProps={{
        pattern: pattern
      }}
      onChange={(e) => {
        onChangeValue && onChangeValue(Number(e.target.value || "0"));
      }}
      variant={"outlined"}
      fullWidth={true}
    />
  );
};
