import {
  GenericDataGridProps,
  GenericFormProps,
  GenericModule,
  getSchemaDto
} from "@components/generic-components";
import {
  CoreModule,
  getEditFormRoute,
  getViewFormRoute,
} from "@lib/router";
import {useNavigate, useParams} from "react-router-dom";

import swaggerJson from "@lib/network/swagger.json";
import {useRequestContext} from "@providers/request-provider";
import {
  UnsubscribeDto, UbsubscribeDetailsDto
} from "@lib/network/swagger-client";


export const UnsubscribesModule = () => {
  const {client} = useRequestContext();
  const navigate = useNavigate();

  const formProps: GenericFormProps<UbsubscribeDetailsDto, UnsubscribeDto, UnsubscribeDto> = {
    detailsSchema: getSchemaDto("UbsubscribeDetailsDto", swaggerJson.components.schemas),
    updateSchema: getSchemaDto("UnsubscribeDto", swaggerJson.components.schemas),
    createSchema: getSchemaDto("UnsubscribeDto", swaggerJson.components.schemas),
    editable: false,
    getItemFn: client.api.unsubscribesDetail,
    updateItemFn: client.api.unsubscribesPartialUpdate,
    createItemFn: client.api.unsubscribesCreate,
    getItemId: () => undefined
  };

  const tableProps: GenericDataGridProps<UbsubscribeDetailsDto> = {
    key: "unsubscribes-table",
    schema: getSchemaDto("UbsubscribeDetailsDto", swaggerJson.components.schemas),
    getItemsFn: client.api.unsubscribesList,
    detailsNavigate: (item) => {
      item.id && navigate(getViewFormRoute(item.id), {state: item});
    },
    editNavigate: (item) => {
      item.id && navigate(getEditFormRoute(item.id), {state: item});
    }
  };

  const module = GenericModule({
    moduleName: "Unsubscribes",
    modulePath: CoreModule.unsubscribes,
    tableProps: tableProps,
    viewFormProps: {
      ...formProps,
      mode: "details",
      editable: false,
      getItemId: () => {
        const params = useParams();
        return Number(params && params["*"] && params["*"].match(/^(\d+)\/view$/)?.[1]);
      }
    },
    editFormProps: {
      ...formProps,
      mode: "update",
      editable: true,
      getItemId: () => {
        const params = useParams();
        return Number(params && params["*"] && params["*"].match(/^(\d+)\/edit$/)?.[1]);
      }
    },
    createFormProps: {
      ...formProps,
      mode: "create",
      editable: true,
      onSaved: (item) => {
        item.id && navigate(getEditFormRoute(item.id), {state: item});
      }
    }
  });

  return (module);
};
