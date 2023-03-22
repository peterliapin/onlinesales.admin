import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Download, Upload } from "@mui/icons-material";
import { ContactDetailsDto, ContactImportDto } from "lib/network/swagger-client";
import {
  ModuleContainer,
  ModuleHeaderActionContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "components/module";
import { CoreModule, getAddFormRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { useRequestContext } from "providers/request-provider";
import { ContactsTable } from "./contacts-table";
import { ExtraActionsContainer } from "./index.styled";
import {
  defaultFilterLimit,
  getBasicExportFilterQuery,
  getBasicFilterQuery,
  getWhereFilterQuery,
  totalCountHeaderName,
} from "lib/query";
import { BreadCrumbNavigation } from "components/breadcrumbs";
import { CsvImport } from "components/spreadsheet-import";
import { Result } from "@wavepoint/react-spreadsheet-import/types/types";
import {
  contactListBreadcrumbLinks,
  defaultFilterOrderColumn,
  defaultFilterOrderDirection,
} from "./constants";
import { CsvExport } from "components/export";
import { SearchBar } from "components/search-bar";

export const Contacts = () => {
  const { client } = useRequestContext();
  const [contacts, setContacts] = useState<ContactDetailsDto[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLimit, setFilterLimit] = useState(defaultFilterLimit);
  const [sortColumn, setSortColumn] = useState(defaultFilterOrderColumn);
  const [sortOrder, setSortOrder] = useState(defaultFilterOrderDirection);
  const [whereField, setWhereField] = useState("");
  const [whereFieldValue, setWhereFieldValue] = useState("");
  const [skipLimit, setSkipLimit] = useState(0);
  const [totalRowCount, setTotalRowCount] = useState(0);
  const [isImportWindowOpen, setIsImportWindowOpen] = useState(false);
  const [openExport, setOpenExport] = useState(false);

  const whereFilterQuery = getWhereFilterQuery(whereField, whereFieldValue);

  const basicFilterQuery = getBasicFilterQuery(filterLimit, sortColumn, sortOrder, skipLimit);

  const basicExportFilterQuery = getBasicExportFilterQuery(sortColumn, sortOrder);

  useEffect(() => {
    (async () => {
      const { data, headers } = await client.api.contactsList({
        query: `${searchTerm}&${basicFilterQuery}${whereFilterQuery}`,
      });
      setTotalResultsCount(headers.get(totalCountHeaderName));
      setContacts(data);
    })();
  }, [searchTerm, filterLimit, skipLimit, sortColumn, sortOrder, whereFieldValue]);

  useEffect(() => {
    if (totalRowCount === -1) {
      throw new Error("Server error: x-total-count header is not provided.");
    }
  }, [totalRowCount]);

  const setTotalResultsCount = (headerCount: string | null) => {
    if (headerCount) setTotalRowCount(parseInt(headerCount, 10));
    else setTotalRowCount(-1);
  };

  const getExportUrlAsync = async () => {
    const { url } = await client.api.contactsExportList({
      query: `${searchTerm}&${basicExportFilterQuery}${whereFilterQuery}`,
    });
    return url;
  };

  const onExportClick = () => {
    setOpenExport(true);
  };

  const closeExport = () => {
    setOpenExport(false);
  };

  const onImportWindowClose = () => {
    setIsImportWindowOpen(false);
  };

  const handleFileUpload = async (data: Result<string>) => {
    const importDtoCollection: ContactImportDto[] = data.validData.map((data) => {
      const contactImportDto: ContactImportDto = {
        ...data,
        email: data.email as string,
      };
      return contactImportDto;
    });
    await client.api.contactsImportCreate(importDtoCollection);
  };

  const openImportPage = () => {
    setIsImportWindowOpen(true);
  };

  const contactsTableProps = {
    contacts,
    setPageSize: setFilterLimit,
    pageSize: filterLimit,
    setSkipLimit,
    totalRowCount,
    setSortColumn,
    setSortOrder,
    setFilterField: setWhereField,
    setFilterFieldValue: setWhereFieldValue,
  };

  return (
    <ModuleContainer>
      <ModuleHeaderContainer>
        <ModuleHeaderTitleContainer>
          <Typography variant="h3">Contacts</Typography>
        </ModuleHeaderTitleContainer>
        <ModuleHeaderSubtitleContainer>
          <BreadCrumbNavigation
            links={contactListBreadcrumbLinks}
            current="Contacts"
          ></BreadCrumbNavigation>
        </ModuleHeaderSubtitleContainer>
        <ModuleHeaderActionContainer>
          <Button to={getAddFormRoute()} component={GhostLink} variant="contained">
            Add contact
          </Button>
        </ModuleHeaderActionContainer>
      </ModuleHeaderContainer>
      <ExtraActionsContainer>
        <Button startIcon={<Upload />} onClick={openImportPage}>
          Import
        </Button>
        <Button startIcon={<Download />} onClick={onExportClick}>
          Export
        </Button>
      </ExtraActionsContainer>
      <SearchBar
        setSearchTermOnChange={setSearchTerm}
        searchBoxLabel="Search Customers"
      ></SearchBar>
      <ContactsTable {...contactsTableProps} />
      {contacts && contacts.length > 0 && (
        <CsvImport
          isOpen={isImportWindowOpen}
          onClose={onImportWindowClose}
          onUpload={handleFileUpload}
          object={contacts[0]}
        ></CsvImport>
      )}
      {openExport && (
        <CsvExport
          getExportUrlAsync={getExportUrlAsync}
          closeExport={closeExport}
          endRoute={CoreModule.contacts}
        ></CsvExport>
      )}
    </ModuleContainer>
  );
};
