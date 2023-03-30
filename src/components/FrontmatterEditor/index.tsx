import { KVEditor, KVItemType } from "@tag0/kveditor";
import { Modal } from "@mui/material";
import { useState } from "react";
import { BoxStyled } from "./index.styled";
import { Fade, Grid, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { grey as greyColor } from "@mui/material/colors";

type onChangeFunc = (items: []) => void;
type handleModalCloseFunc = (items: []) => void;

export interface FrontmatterEditorInitialValue {
    key: string;
    value: string;
};

interface FrontmatterEditorProps {
    onChange: onChangeFunc;
    initialValues: FrontmatterEditorInitialValue[];
};

interface FrontmatterEditorModalProps {
    isOpen: boolean;
    handleClose: handleModalCloseFunc;
    initialValues: FrontmatterEditorInitialValue[];
};


const defaults: KVItemType[] = [
  {
    key: "SeoTitle",
    value: "",
    options: {
      fixed: true,
    }
  },
  {
    key: "SeoDescription",
    value: "",
    options: {
      fixed: true,
    }
  },
]; 

export const FrontmatterEditor = ({onChange, initialValues}: FrontmatterEditorProps) => {
  let startValues = initialValues.map((item) => {
    const newItem: KVItemType = {
      key: item.key,
      value: item.value,
    };
    return newItem;
  });
  if (startValues.filter(
    (item) => defaults.filter(
      (item2) => item.key === item2.key).length > 0
  ).length === 0){
    startValues = startValues.concat(defaults);
  }
  return (
    <>
      <KVEditor
        defaults={startValues}
        onChange={onChange}
        options={{stretchLabels: true}}
      />
    </>
  );
};


const FrontmatterEditorModal = ({
  isOpen, 
  handleClose, 
  initialValues}: FrontmatterEditorModalProps) => {
  const [editorItems, setEditorItems] = useState<[]>([]);
  const onClose = () => {
    handleClose(editorItems);
  };
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Fade in={isOpen}>
        <BoxStyled bgcolor={greyColor[500]}>
          <Grid 
            container
            direction="column"
            alignItems="flex-end"
            xs={12}
          >
            <Grid item xs={1}>
              <IconButton onClick={onClose}>
                <Close/>
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <FrontmatterEditor
                onChange={(items) => {setEditorItems(items);}}
                initialValues={initialValues}
              />
            </Grid>
          </Grid>
        </BoxStyled>
      </Fade>
    </Modal>
  );
};

export default FrontmatterEditorModal;