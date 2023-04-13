import {ReactNode} from "react";
import {EditProps} from "@components/generic-components/edit-components/common";
import {Autocomplete, TextField} from "@mui/material";


export const EnumEdit = ({
                           key,
                           label,
                           value,
                           onChangeValue,
                           disabled,
                           valueOptions
                         }: EditProps<string>): ReactNode => {
  return <Autocomplete freeSolo
                       autoSelect
                       disabled={disabled}
                       value={value}
                       onChange={(ev, val) => {
                         onChangeValue && onChangeValue(val);
                       }}
                       options={valueOptions || []}
                       renderInput={(params) => (
                         <TextField
                           {...params}
                           label={label}
                           placeholder="Select option"
                           variant="outlined"
                           fullWidth
                         />
                       )}/>;
}
