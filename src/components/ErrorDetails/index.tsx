import { 
  Box, 
  Button, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  Fade, 
  Typography
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

export type onCloseFunc = () => void;

interface ErrorDetailsModalProps {
  isOpen: boolean;
  errorDetails: React.ReactNode | string | string[]
  onClose: onCloseFunc;
}

const constructErrorBody = (error: string | string[]) => {
  return (
    <Box>
      {
        typeof error === "string" ?
          error :
            (error as string[]).map((val, idx) => (
              <Box key={idx} component="span" sx={{ display: "block" }}>
                {val}
              </Box>
            ))
      }
    </Box>
  );
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} />;
});

export const ErrorDetailsModal = ({
  isOpen,
  onClose,
  errorDetails
} : ErrorDetailsModalProps) => {
  let errorBody;
  if (typeof errorDetails === "string" || Array.isArray(errorDetails)){
    errorBody = constructErrorBody(errorDetails);
  }else{
    errorBody = errorDetails;
  }
  return(
    <Dialog
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <DialogTitle>
        <Typography>
          Error Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        {errorBody}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>
          Report
        </Button>
        <Button onClick={() => onClose()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};