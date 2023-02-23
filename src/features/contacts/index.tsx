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
import { CoreModule, getAddModuleRoute, rootRoute } from "lib/router";
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
  const [filterOrderColumn, setFilterOrderColumn] = useState("");
  const [filterOrderDirection, setFilterOrderDirection] = useState("");
  const [whereField, setWhereField] = useState("");
  const [whereFieldValue, setWhereFieldValue] = useState("");
  const [skipLimit, setSkipLimit] = useState(0);
  //need to read this from API response header
  const [totalRowCount, setTotalRowCount] = useState(47); 

  const contactsTableProps = {
    contacts,
    setPageSize: setFilterLimit,
    pageSize: filterLimit,
    setSkipLimit,
    totalRowCount,
    setSortColumn: setFilterOrderColumn,
    setSortOrder: setFilterOrderDirection,
    setFileterField: setWhereField,
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

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.api.contactsList({
          query: `${searchTerm}&${basicFilterQuery}${whereFilterQuery}`,
        });
        setContacts(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [
    searchTerm,
    filterLimit,
    skipLimit,
    filterOrderColumn,
    filterOrderDirection,
    whereFieldValue,
  ]);

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
          <Button
            to={getAddModuleRoute(CoreModule.contacts)}
            component={GhostLink}
            variant="contained"
          >
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
