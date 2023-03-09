import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { GhostLink } from "components/ghost-link";
import { ImportFile } from "components/import-file";
import {
  ModuleContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "components/module";
import { ContactImportDto } from "lib/network/swagger-client";
import { CoreModule, getCoreModuleRoute, rootRoute } from "lib/router";
import { useRequestContext } from "providers/request-provider";

export const ContactImport = () => {
  const { client } = useRequestContext();

  const header = "Contact import";

  const handleFileUpload = async (fileData: ContactImportDto[]) => {
    await client.api.contactsImportCreate(fileData);
  };

  return (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <ModuleHeaderTitleContainer>
          <Typography variant="h3">{header}</Typography>
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
            <Typography variant="body1">{header}</Typography>
          </Breadcrumbs>
        </ModuleHeaderSubtitleContainer>
      </ModuleHeaderContainer>
      <ImportFile handleFileUpload={handleFileUpload} />
    </ModuleContainer>
  );
};
