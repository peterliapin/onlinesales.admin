import { Typography } from "@mui/material";
import { BreadCrumbNavigation } from "components/breadcrumbs";
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

  const links = [
    { linkText: "Dashboard", toRoute: rootRoute },
    { linkText: "Contacts", toRoute: getCoreModuleRoute(CoreModule.contacts) },
  ];

  return (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <ModuleHeaderTitleContainer>
          <Typography variant="h3">{header}</Typography>
        </ModuleHeaderTitleContainer>
        <ModuleHeaderSubtitleContainer>
          <BreadCrumbNavigation links={links} current={header}></BreadCrumbNavigation>
        </ModuleHeaderSubtitleContainer>
      </ModuleHeaderContainer>
      <ImportFile handleFileUpload={handleFileUpload} />
    </ModuleContainer>
  );
};
