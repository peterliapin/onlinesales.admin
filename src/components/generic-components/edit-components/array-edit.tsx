import { ReactNode, useState } from "react";
import { EditProps } from "@components/generic-components/edit-components/common";
import {
  Dialog,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { camelCaseToTitleCase } from "../common";

type JsonArray = {
  [key: string]: any;
};

const isJsonArray = (item: any): item is JsonArray => {
  return typeof item === "object" && item !== null;
};

export const ArrayEdit = ({
  key,
  label,
  example,
  required,
  value,
  error,
}: EditProps<any>): ReactNode => {
  const [open, setOpen] = useState(false);

  if (!value)
    return (
      <TextField key={key} label={label} value={"N/A"} disabled={true} size={"small"} fullWidth />
    );

  if (!isJsonArray(value)) {
    const arrayString = value.join(",");
    return (
      <TextField
        key={key}
        title={example}
        type={"text"}
        label={label}
        disabled={true}
        required={required}
        error={!!error}
        helperText={error}
        value={arrayString}
        variant={"outlined"}
        fullWidth={true}
        size={"small"}
      />
    );
  }

  const headers = Object.keys(value![0]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TextField
        sx={{ input: { cursor: "pointer" } }}
        key={key}
        title={example}
        type={"text"}
        label={label}
        disabled={true}
        required={required}
        error={!!error}
        helperText={error}
        value={"Click here to view"}
        onClick={handleOpen}
        variant={"outlined"}
        fullWidth={true}
        size={"small"}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{label}</DialogTitle>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header}>{camelCaseToTitleCase(header)}</TableCell>
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
      </Dialog>
    </>
  );
};
