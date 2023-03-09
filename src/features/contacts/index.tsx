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
import { getAddFormRoute, getImportFormRoute, rootRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { useRequestContext } from "providers/request-provider";
import { ContactsTable } from "./contacts-table";
import { ExtraActionsContainer } from "./index.styled";
import { SearchBar } from "./search-bar";
import {
  defaultFilterLimit,
  getBasicFilterQuery,
  getWhereFilterQuery,
  totalCountHeaderName,
} from "lib/query";
import { downloadFile } from "components/download";

export const Contacts = () => {
  const defaultFilterOrderColumn = "firstName";
  const defaultFilterOrderDirection = "desc";

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
  const [downloadCsv, setDownloadCsv] = useState(false);

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

  const whereFilterQuery = getWhereFilterQuery(whereField, whereFieldValue);

  const basicFilterQuery = getBasicFilterQuery(
    filterLimit,
    sortColumn,
    sortOrder,
    skipLimit,
    downloadCsv
  );

  const setTotalResultsCount = (headerCount: string | null) => {
    if (headerCount) setTotalRowCount(parseInt(headerCount, 10));
    else setTotalRowCount(-1);
  };

  const handleExport = () => {
    setSkipLimit(0);
    setDownloadCsv(true);
  };

  useEffect(() => {
    (async () => {
      const { data, headers, url } = await client.api.contactsList({
        query: `${searchTerm}&${basicFilterQuery}${whereFilterQuery}`,
        downloadCsv: downloadCsv,
      });
      setTotalResultsCount(headers.get(totalCountHeaderName));
      if (!downloadCsv) {
        setContacts(data);
      } else {
        downloadFile(url);
        setDownloadCsv(false);
      }
    })();
  }, [searchTerm, filterLimit, skipLimit, sortColumn, sortOrder, whereFieldValue, downloadCsv]);

  useEffect(() => {
    if (totalRowCount === -1) {
      throw new Error("Server error: x-total-count header is not provided.");
    }
  }, [totalRowCount]);

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
          <Button to={getAddFormRoute()} component={GhostLink} variant="contained">
            Add contact
          </Button>
        </ModuleHeaderActionContainer>
      </ModuleHeaderContainer>
      <ExtraActionsContainer>
        <Button startIcon={<Upload />} to={getImportFormRoute()} component={GhostLink}>
          Import
        </Button>
        <Button startIcon={<Download />} onClick={handleExport}>
          Export
        </Button>
      </ExtraActionsContainer>
      <SearchBar setSearchTermOnChange={setSearchTerm}></SearchBar>
      <ContactsTable {...contactsTableProps} />
    </ModuleContainer>
  );
};
