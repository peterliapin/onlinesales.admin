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
  CommentCreateDto,
  CommentDetailsDto,
  CommentUpdateDto,
} from "@lib/network/swagger-client";


export const CommentsModule = () => {
  const {client} = useRequestContext();
  const navigate = useNavigate();

  const formProps: GenericFormProps<CommentDetailsDto, CommentCreateDto, CommentUpdateDto> = {
    detailsSchema: getSchemaDto("CommentDetailsDto", swaggerJson.components.schemas),
    updateSchema: getSchemaDto("CommentUpdateDto", swaggerJson.components.schemas),
    createSchema: getSchemaDto("CommentCreateDto", swaggerJson.components.schemas),
    editable: false,
    getItemFn: client.api.commentsDetail,
    updateItemFn: client.api.commentsPartialUpdate,
    createItemFn: client.api.commentsCreate,
    getItemId: () => undefined
  };

  const tableProps: GenericDataGridProps<CommentDetailsDto> = {
    key: "comments-table",
    initiallyShownColumns: ["authorName", "authorEmail", "source"],
    schema: getSchemaDto("CommentDetailsDto", swaggerJson.components.schemas),
    getItemsFn: client.api.commentsList,
    detailsNavigate: (item) => {
      item.id && navigate(getViewFormRoute(item.id), {state: item});
    },
    editNavigate: (item) => {
      item.id && navigate(getEditFormRoute(item.id), {state: item});
    }
  };

  const module = GenericModule({
    moduleName: "Comments",
    modulePath: CoreModule.comments,
    addButtonContent: "Add comment",
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
