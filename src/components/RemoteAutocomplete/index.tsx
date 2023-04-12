import { Autocomplete, TextField, CircularProgress } from "@mui/material";
import { RemoteAutoCompleteProps, RemoteValues } from "./types";
import React, { useState, useEffect } from "react";
import { useRequestContext } from "@providers/request-provider";
import { HttpResponse, ProblemDetails } from "@lib/network/swagger-client";
import { useNotificationsService } from "@hooks";

export function RemoteAutocomplete({
  label, 
  placeholder, 
  freeSolo, 
  multiple, 
  value,
  onChange, 
  limit,
  type,
  error,
  helperText,
}: RemoteAutoCompleteProps) {
  const { client } = useRequestContext();
  const { notificationsService } = useNotificationsService();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const requestData = async () => {
    let response: HttpResponse<string[], void | ProblemDetails> | undefined = undefined;
    try{
      switch(type){
      case RemoteValues.TAGS:
        response = await client.api.contentTagsList();
        break;
      case RemoteValues.CATEGORIES:
        response = await client.api.contentCategoriesList();
      }
    }
    catch(e){
      const error = e as ProblemDetails;
      notificationsService.error(`Failed to get options: ${error.detail}`);
    }
    finally{
      setOptions(response && response.data || []);
      setIsLoading(false);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if (isOpen && !isLoaded && !isLoading){
      setIsLoading(true);
      requestData();
    }
  }, [isOpen]);

  return (
    <Autocomplete
      open={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
      options={options}
      loading={isLoading}
      freeSolo={freeSolo}
      multiple={multiple ? multiple : false}
      limitTags={limit ? limit : -1}
      autoSelect
      value={value}
      onChange={onChange}
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

  );
};
