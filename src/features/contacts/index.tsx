import { useEffect, useState } from "react";
import { Breadcrumbs, Button, Link, Typography } from "@mui/material";
import { Download, NavigateNext, Upload } from "@mui/icons-material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import {
  ModuleContainer,
  ModuleHeaderActionContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "components/module";
import { rootRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { useRequestContext } from "providers/request-provider";
import { ContactsTable } from "./contacts-table";
import { ExtraActionsContainer } from "./index.styled";

export const Contacts = () => {
  const { client } = useRequestContext();

  const [contacts, setContacts] = useState<ContactDetailsDto[]>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.api.contactsList();
        setContacts(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [client]);

  return (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <ModuleHeaderTitleContainer>
          <Typography variant="h3">Contacts</Typography>
        </ModuleHeaderTitleContainer>
        <ModuleHeaderSubtitleContainer>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
            <Link to={rootRoute} component={GhostLink} underline="hover">
              Dashboard
            </Link>
            <Typography variant="body1">Contacts</Typography>
          </Breadcrumbs>
        </ModuleHeaderSubtitleContainer>
        <ModuleHeaderActionContainer>
          <Button variant="contained">Add contact</Button>
        </ModuleHeaderActionContainer>
      </ModuleHeaderContainer>
      <ExtraActionsContainer>
        <Button startIcon={<Upload />}>Import</Button>
        <Button startIcon={<Download />}>Export</Button>
      </ExtraActionsContainer>
      <ContactsTable contacts={contacts} />
    </ModuleContainer>
  );
};
