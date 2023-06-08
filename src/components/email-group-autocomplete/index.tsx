import { Autocomplete, TextField, CircularProgress, Paper, Button } from "@mui/material";
import { EmailGroupAutoCompleteProps, EmailGroupOption } from "./types";
import React, { useState, useEffect } from "react";
import { useRequestContext } from "@providers/request-provider";
import { ProblemDetails } from "@lib/network/swagger-client";
import { useNotificationsService } from "@hooks";
import { CreateNewEmailGroup } from "./create-new";

export function EmailGroupAutocomplete({
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
}: EmailGroupAutoCompleteProps) {
  const { client } = useRequestContext();
  const { notificationsService } = useNotificationsService();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isGroupCreatorOpen, setGroupCreatorOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<EmailGroupOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [valueState, setValue] = useState<EmailGroupOption>({
    id: -1,
    label: "Loading",
  });

  const requestData = async () => {
    let data: EmailGroupOption[] = [];
    try {
      const response = await client.api.emailGroupsList();
      data = response.data.map((value) => {
        return {
          id: value.id as number,
          label: value.name,
        };
      });
    } catch (e) {
      const error = e as ProblemDetails;
      notificationsService.error(`Failed to get options: ${error.detail}`);
    } finally {
      setOptions(data);
      setIsLoading(false);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      const matchedOption = options.filter((v) => v.id === value)[0];
      setValue({
        id: value,
        label: (matchedOption && matchedOption.label) || "Not selected",
      });
    } else {
      requestData();
    }
  }, [isLoaded]);

  useEffect(() => {
    setValue({
      id: value,
      label: isLoaded
        ? options.filter((v) => v.id === value)[0]?.label || "Not selected"
        : "Loading...",
    });
  }, [value]);

  useEffect(() => {
    requestData();
  }, []);

  return (
    <>
      <CreateNewEmailGroup
        isOpen={isGroupCreatorOpen}
        onClose={() => setGroupCreatorOpen(false)}
        onChange={(value) => {
          setValue(value);
          setIsLoaded(false);
        }}
      />
      <Autocomplete
        open={isOpen}
        onOpen={() => {
          setIsOpen(true);
        }}
        onClose={() => {
          setIsOpen(false);
        }}
        autoSelect
        options={options}
        getOptionLabel={(option) => option.label}
        loading={isLoading}
        value={valueState}
        onChange={(_, value) => onChange((value && value.id) || -1)}
        PaperComponent={({ children }) => {
          return (
            <>
              <Paper>
                <Button onMouseDown={() => setGroupCreatorOpen(true)}>Create new group</Button>
                {children}
              </Paper>
            </>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </>
  );
}
