import {ReactNode} from "react";
import {EditProps} from "@components/generic-components/edit-components/common";
import {Autocomplete, TextField} from "@mui/material";
import {DictItem} from "@components/generic-components";

export const DictionaryEdit = ({
  key,
  label,
  example,
  required,
  value,
  onChangeValue,
  disabled,
  valueOptions,
  error
}: EditProps<DictItem>): ReactNode => {
  return (
    <Autocomplete
      key={key}
      title={example}
      freeSolo
      autoSelect
      disabled={disabled}
      options={valueOptions || []}
      getOptionLabel={(option: DictItem | string) => {
        if (typeof option === "string") {
          return option;
        }
        return option && option.displayText;
      }}
      value={value || null}
      onChange={(ev, val: any) => {
        if (val && val.value) {
          onChangeValue && onChangeValue(val);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          required={required}
          error={!!error}
          helperText={error}
          placeholder="Select option"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
};
