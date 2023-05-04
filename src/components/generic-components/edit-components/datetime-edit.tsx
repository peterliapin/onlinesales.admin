import { ReactNode } from "react";
import { EditProps } from "@components/generic-components/edit-components/common";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const DatetimeEdit = ({
  key,
  label,
  example,
  required,
  value,
  onChangeValue,
  disabled,
  error,
}: EditProps<Date>): ReactNode => {
  return (
    <div title={example}>
      <DateTimePicker
        key={key}
        label={label}
        disabled={disabled}
        value={dayjs(value)}
        format="L HH:mm"
        sx={{ width: "100%" }}
        slotProps={{
          textField: {
            required: required,
            error: !!error,
            helperText: error,
          },
        }}
        onChange={(newValue) => {
          onChangeValue && onChangeValue(newValue ? newValue.toDate() : null);
        }}
      />
    </div>
  );
};
