import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { CardHeaderStyled, DeleteButtonContainer } from "./index.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCoreModuleNavigation, useNotificationsService } from "@hooks";
import { HttpResponse, ProblemDetails } from "@lib/network/swagger-client";
import { useErrorDetailsModal } from "@providers/error-details-modal-provider";
import { execDeleteWithToast } from "utils/general-helper";

type DataDeleteProps = {
  header: string;
  description: string;
  itemId: number;
  entity: string;
  successNavigationRoute: string;
  handleDeleteAsync: (id: number) => Promise<HttpResponse<void, void | ProblemDetails>>;
};

type DataDeleteConfProps = {
  entity: string;
  setIsConfirmed: (isConfirmed: boolean) => void;
  openConfirmation: boolean;
  setOpenConfirmation: (open: boolean) => void;
};

export const DataDeleteConfirmation = ({
  entity,
  setIsConfirmed,
  openConfirmation,
  setOpenConfirmation,
}: DataDeleteConfProps) => {
  const handleConfirmationClose = () => {
    setOpenConfirmation(false);
  };

  const handleConfirmation = async () => {
    setOpenConfirmation(false);
    setIsConfirmed(true);
  };

  return (
    <>
      <Dialog open={openConfirmation} onClose={handleConfirmationClose}>
        <DialogTitle>{`Deleting ${entity}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>{`Are you sure you want to delete this ${entity}?`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationClose} autoFocus variant="outlined">
            No
          </Button>
          <Button onClick={handleConfirmation} autoFocus variant="outlined" color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const DataDelete = ({
  header,
  description,
  itemId,
  entity,
  successNavigationRoute,
  handleDeleteAsync,
}: DataDeleteProps) => {
  const { notificationsService } = useNotificationsService();
  const { Show: showErrorModal } = useErrorDetailsModal()!;
  const handleNavigation = useCoreModuleNavigation();

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (isConfirmed) {
      (async () => {
        await execDeleteWithToast(deleteRecord, notificationsService, entity, showErrorModal);
      })();
    }
  }, [isConfirmed]);

  const handleDelete = () => {
    setOpenConfirmation(true);
  };

  const deleteRecord = async () => {
    try {
      setIsDeleting(true);
      await handleDeleteAsync(itemId);
      handleNavigation(successNavigationRoute);
    } catch (error) {
      setIsDeleting(false);
      throw error;
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <CardHeaderStyled title={header}></CardHeaderStyled>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <DeleteButtonContainer>
            <Button
              disabled={isDeleting}
              startIcon={<DeleteIcon />}
              type="submit"
              variant="contained"
              color="error"
              onClick={handleDelete}
            >
              {`Delete ${entity}`}
            </Button>
          </DeleteButtonContainer>
        </CardActions>
      </Card>
      <DataDeleteConfirmation
        entity={entity}
        openConfirmation={openConfirmation}
        setIsConfirmed={setIsConfirmed}
        setOpenConfirmation={setOpenConfirmation}
      ></DataDeleteConfirmation>
    </>
  );
};
