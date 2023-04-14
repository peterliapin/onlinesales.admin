import { ReactNode } from "react";
import { EditProps } from "@components/generic-components/edit-components/common";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const DatetimeEdit = ({
  key,
  label,
  value,
  onChangeValue,
  disabled,
}: EditProps<Date>): ReactNode => {
  return (
    <DateTimePicker
      key={key}
      label={label}
      disabled={disabled}
      value={dayjs(value)}
      format="L HH:mm"
      sx={{ width: "100%" }}
      onChange={(newValue) => {
        onChangeValue && onChangeValue(newValue ? newValue.toDate() : null);
      }}
    />
  );
};
