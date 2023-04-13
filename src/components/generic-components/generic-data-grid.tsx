import {ChangeEventHandler, EventHandler, ReactNode, useEffect, useState} from "react";
import {
  HttpResponse,
  ProblemDetails,
  RequestParams
} from "@lib/network/swagger-client";
import {useModuleWrapperContext} from "@providers/module-wrapper-provider";
import {DataGrid, GridColDef, GridSortModel} from "@mui/x-data-grid";
import {totalCountHeaderName} from "@lib/query";
import {
  DtoSchema,
  camelCaseToTitleCase,
  BasicTypeForGeneric
} from "@components/generic-components/common";
import {ActionButtonContainer} from "@components/data-table/index.styled";
import {IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface GenericDataGridProps<T extends BasicTypeForGeneric> {
  getItemsFn: (query?: { query?: string }, params?: RequestParams) => Promise<HttpResponse<T[], void | ProblemDetails>>;
  schema: DtoSchema;
  detailsNavigate?: (item: T) => void;
  editNavigate?: (item: T) => void;
  searchText?: string;
}

export function GenericDataGrid<T extends BasicTypeForGeneric>({
                                                                 getItemsFn,
                                                                 schema,
                                                                 detailsNavigate,
                                                                 editNavigate,
                                                                 searchText
                                                               }: GenericDataGridProps<T>)
  : ReactNode {
  const {setBusy} = useModuleWrapperContext();

  const actionsColumn: GridColDef = {
    field: "_actions",
    headerName: "Actions",
    width: 120,
    align: "center",
    headerAlign: "center",
    filterable: false,
    sortable: false,
    disableColumnMenu: true,
    renderCell: ({row}: any) => {
      return (
        <ActionButtonContainer>
          {editNavigate && <IconButton onClick={() => editNavigate(row)}>
            <EditIcon fontSize="small"/>
          </IconButton>}
          {detailsNavigate && <IconButton onClick={() => detailsNavigate(row)}>
            <ArrowForwardIcon fontSize="small"/>
          </IconButton>}
        </ActionButtonContainer>
      );
    },
  };

  const columns: GridColDef[] = [actionsColumn]
    .concat([
      ...(Object.keys(schema.properties)
        .map((key) => {
          const column: GridColDef = {
            field: key,
            type: schema.properties[key].type,
            width: 200,
            description: schema.properties[key]["description"],
            headerName: camelCaseToTitleCase(key)
          };
          return column;
        }))
    ]);

  const [items, setItems] = useState<T[] | undefined>();

  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortColumn, setSortColumn] = useState<string>("id");
  const [sortDirection, setSortDirection] = useState<string>("asc");

  useEffect(() => {
    const abortController = new AbortController();

    if (getItemsFn) {
      setBusy(async () => {
        try {
          const query: any = {
            "filter[limit]": pageSize,
            "filter[order]": sortColumn ? `${sortColumn} ${sortDirection}` : undefined,
            "filter[skip]": pageSize * pageNumber
          };

          if (searchText) {
            query["query"] = searchText;
          }

          const {data, headers} = await getItemsFn(query as any, {
            signal: abortController.signal
          });
          setTotalItemsCount(() => parseInt(headers.get(totalCountHeaderName) || "0"));
          setItems(() => data);
        } catch (e) {
          console.log(e);
        }
      });
    }

    return () => {
      abortController.abort("canceled")
    };
  }, [getItemsFn, pageSize, pageNumber, sortColumn, sortDirection, searchText]);

  const handleSortChange = (sortModel: GridSortModel) => {
    if (sortModel.length > 0) {
      setSortColumn(sortModel[sortModel.length - 1].field);
      setSortDirection(sortModel[sortModel.length - 1].sort || "asc");
    } else setSortDirection("asc");
  };

  return <DataGrid columns={columns || []}
                   rows={items || []}
                   loading={false}
                   checkboxSelection={false}
                   autoHeight={false}
                   rowCount={totalItemsCount}
                   rowsPerPageOptions={[2, 10, 25, 50, 100]}
                   pagination
                   page={pageNumber}
                   pageSize={pageSize}
                   paginationMode="server"
                   onPageChange={(newPage) => setPageNumber(newPage)}
                   onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                   sortingMode="server"
                   onSortModelChange={(newSortModel) => handleSortChange(newSortModel)}
                   filterMode="server"
                   initialState={{}}/>;
}
