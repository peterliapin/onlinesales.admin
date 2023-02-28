import { useState } from "react";
import { TextField, Box, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  setSearchTermOnChange: (searchTerm: string) => void;
}

export const SearchBar = ({ setSearchTermOnChange }: Props) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        setSearchTermOnChange(event.target.value);
      }, 800)
    );
  };

  return (
    <Box>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Search customers"
        onChange={handleChange}
      ></TextField>
    </Box>
  );
};
