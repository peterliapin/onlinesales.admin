import { 
  Dialog, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  DialogActions, 
  Button,
  Fade
} from "@mui/material";
import { RestoreDataProps } from "./types";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
  ref: React.Ref<unknown>,
) {
  return <Fade ref={ref} {...props} />;
});

export const RestoreDataModal = ({isOpen, onClose}: RestoreDataProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => onClose(false)}
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle id="alert-dialog-title">
        {"Restore data from previous session?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        We have found that you have not submitted your latest edits. Do u want to restore them?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(false)}>No</Button>
        <Button onClick={() => onClose(true)}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};