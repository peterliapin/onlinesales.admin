import {ReactNode} from "react";
import {EditProps} from "@components/generic-components/edit-components/common";
import {TextField} from "@mui/material";


export const TextEdit = ({
                           key,
                           label,
                           value,
                           onChange,
                           disabled
                         }: EditProps<string>): ReactNode => {
  return <TextField key={key}
                    type={"text"}
                    label={label}
                    disabled={disabled}
                    value={value}
                    onChange={(e) => {
                      onChange && onChange(e.target.value);
                    }}
                    variant={"outlined"}
                    fullWidth={true}/>
}
