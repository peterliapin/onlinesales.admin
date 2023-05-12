import { ReactNode } from "react";
import { EditProps } from "@components/generic-components/edit-components/common";
import {
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

type JsonArray = {
  [key: string]: any;
};

export const ArrayEdit = ({
  key,
  label,
  example,
  required,
  value,
  onChangeValue,
  disabled,
  error,
}: EditProps<JsonArray>): ReactNode => {
  if (!value) return;
  const headers = Object.keys(value![0]);
  return (
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell key={header}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {value!.map((record: any) => (
          <TableRow key={record.domainName}>
            {headers.map((header) => (
              <TableCell key={header}>{record[header]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
