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
import { getAddFormRoute, rootRoute } from "lib/router";
import { GhostLink } from "components/ghost-link";
import { useRequestContext } from "providers/request-provider";
import { ContactsTable } from "./contacts-table";
import { ExtraActionsContainer } from "./index.styled";
import { SearchBar } from "./search-bar";

type FilterParams = {
  [key: string]: number | string | boolean;
};

export const Contacts = () => {
  const { client } = useRequestContext();

  const [contacts, setContacts] = useState<ContactDetailsDto[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLimit, setFilterLimit] = useState(10);
  const [filterOrderColumn, setFilterOrderColumn] = useState("firstName");
  const [filterOrderDirection, setFilterOrderDirection] = useState("desc");
  const [whereField, setWhereField] = useState("");
  const [whereFieldValue, setWhereFieldValue] = useState("");
  const [skipLimit, setSkipLimit] = useState(0);
  const [totalRowCount, setTotalRowCount] = useState(0);

  const contactsTableProps = {
    contacts,
    setPageSize: setFilterLimit,
    pageSize: filterLimit,
    setSkipLimit,
    totalRowCount,
    setSortColumn: setFilterOrderColumn,
    setSortOrder: setFilterOrderDirection,
    setFilterField: setWhereField,
    setFilterFieldValue: setWhereFieldValue,
  };

  const basicFilters: FilterParams = {
    "filter[limit]": filterLimit,
    "filter[order]": `${filterOrderColumn} ${filterOrderDirection}`,
    "filter[skip]": skipLimit,
  };

  const whereFilterQuery: string = whereFieldValue
    ? `&filter[where][${whereField}]=${whereFieldValue}`
    : "";

  const basicFilterQuery = Object.keys(basicFilters)
    .filter((key) => `${basicFilters[key].toString().trim()}` != "")
    .map((key) => `${key}=${basicFilters[key]}`)
    .join("&");

  const setTotalResultsCount = (headerCount: string | null) => {
    if (headerCount) setTotalRowCount(parseInt(headerCount, 10));
    else setTotalRowCount(-1);
  };

  useEffect(() => {
    (async () => {
      const { data, headers } = await client.api.contactsList({
        query: `${searchTerm}&${basicFilterQuery}${whereFilterQuery}`,
      });
      setTotalResultsCount(headers.get("x-total-count"));
      setContacts(data);
    })();
  }, [
    searchTerm,
    filterLimit,
    skipLimit,
    filterOrderColumn,
    filterOrderDirection,
    whereFieldValue,
  ]);

  if (totalRowCount === -1) {
    throw new Error("Server error: x-total-count header is not provided.");
  } else
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
          <Button startIcon={<Upload />}>Import</Button>
          <Button startIcon={<Download />}>Export</Button>
        </ExtraActionsContainer>
        <SearchBar setSearchTermOnChange={setSearchTerm}></SearchBar>
        <ContactsTable {...contactsTableProps} />
      </ModuleContainer>
    );
};
