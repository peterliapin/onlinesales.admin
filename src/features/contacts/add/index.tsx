import { useState } from "react";
import { Breadcrumbs, Link, Typography, AlertColor } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { ContactCreateDto, ContactDetailsDto } from "lib/network/swagger-client";
import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "components/module";
import { rootRoute, CoreModule, getCoreModuleRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { useRequestContext } from "providers/request-provider";
import { ContactForm } from "../form";
import { CustomizedSnackbar } from "components/snackbar";

export const ContactAdd = () => {
  const { client } = useRequestContext();

  const [contact, setContact] = useState<ContactDetailsDto>({ email: "" });

  const [snackBarParams, setParams] = useState({
    message: "",
    isOpen: false,
    severerity: "success" as AlertColor,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((currentContact) => ({ ...currentContact, [name]: value }));
  };

  const handleSave = () => {
    const createDto: ContactCreateDto = {
      ...contact,
    };

    (async () => {
      try {
        await client.api.contactsCreate(createDto);
        setParams({ message: "Saved Successfully", isOpen: true, severerity: "success" });
      } catch (e) {
        console.log(e);
        setParams({ message: "Server error occurred. ", isOpen: true, severerity: "error" });
      }
    })();
  };

  return (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <ModuleHeaderTitleContainer>
          <Typography variant="h3">Contact Add</Typography>
        </ModuleHeaderTitleContainer>
        <ModuleHeaderSubtitleContainer>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
            <Link to={rootRoute} component={GhostLink} underline="hover">
              Dashboard
            </Link>
            <Link
              to={getCoreModuleRoute(CoreModule.contacts)}
              component={GhostLink}
              underline="hover"
            >
              Contacts
            </Link>
            <Typography variant="body1">Contact Add</Typography>
          </Breadcrumbs>
        </ModuleHeaderSubtitleContainer>
      </ModuleHeaderContainer>
      <ContactForm
        contact={contact}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
      />
      <CustomizedSnackbar
        isOpen={snackBarParams.isOpen}
        severerity={snackBarParams.severerity}
        message={snackBarParams.message}
        navigateTo={CoreModule.contacts}
      ></CustomizedSnackbar>
    </ModuleContainer>
  );
};
