import {ReactNode, useEffect, useState} from "react";
import {
  HttpResponse,
  ProblemDetails,
  RequestParams
} from "@lib/network/swagger-client";
import {useModuleWrapperContext} from "@providers/module-wrapper-provider";
import {DataGrid, GridSortModel} from "@mui/x-data-grid";
import {GridColumns} from "@mui/x-data-grid/models/colDef/gridColDef";
import {totalCountHeaderName} from "@lib/query";
import {DtoSchema, camelCaseToTitleCase} from "@components/generic-crud/common";

interface GenericDataGridProps<T> {
  getItemsFn: (query?: { query?: string }, params?: RequestParams) => Promise<HttpResponse<T[], void | ProblemDetails>>;
  schema: DtoSchema;
}


export function GenericDataGrid<T>({
                                     getItemsFn,
                                     schema
                                   }: GenericDataGridProps<T>)
  : ReactNode {
  const {setBusy} = useModuleWrapperContext();

  const columns: GridColumns = [
    ...(Object.keys(schema.properties).map((key) => {
      return {
        field: key,
        type: schema.properties[key].type,
        width: 200,
        description: schema.properties[key]["description"],
        headerName: camelCaseToTitleCase(key)
      }
    }))
  ];

  const [items, setItems] = useState<T[] | undefined>();

  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortColumn, setSortColumn] = useState<string>(columns.length > 0 ? columns[0].field : "");
  const [sortDirection, setSortDirection] = useState<string>("asc");

  useEffect(() => {
    const abortController = new AbortController();

    if (getItemsFn) {
      setBusy(async () => {
        try {
          const query = {
            "filter[limit]": pageSize,
            "filter[order]": sortColumn ? `${sortColumn} ${sortDirection}` : undefined,
            "filter[skip]": pageSize * pageNumber
          };
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
  }, [getItemsFn, pageSize, pageNumber, sortColumn, sortDirection]);

  const handleSortChange = (sortModel: GridSortModel) => {
    if (sortModel.length > 0) {
      setSortColumn(sortModel[sortModel.length - 1].field);
      setSortDirection(sortModel[sortModel.length - 1].sort || "asc");
    } else setSortDirection("asc");
  };

  return <DataGrid columns={columns}
                   rows={items || []}
                   loading={!items}
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
