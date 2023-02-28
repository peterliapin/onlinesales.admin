import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import { forwardRef, SyntheticEvent, useEffect, useState } from "react";
import { CoreModule, getCoreModuleRoute } from "lib/router";
import { useNavigate } from "react-router-dom";
import { Backdrop } from "@mui/material";

interface SnackbarProps {
  message: string;
  severerity: AlertColor;
  isOpen: boolean;
  navigateTo: CoreModule;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbar = ({ message, severerity, isOpen, navigateTo }: SnackbarProps) => {
  const [open, setOpen] = useState(isOpen);

  const navigate = useNavigate();

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    if (severerity === "success") {
      navigate(getCoreModuleRoute(navigateTo));
    }
  };

  return (
    <Backdrop open={open}>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severerity} sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </Backdrop>
  );
};
