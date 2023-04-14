import {
  HttpResponse,
  ProblemDetails,
  RequestParams
} from "@lib/network/swagger-client";
import {
  DtoSchema,
  camelCaseToTitleCase,
  BasicTypeForGeneric
} from "@components/generic-components/common";
import {ReactNode, useEffect, useState} from "react";
import {useModuleWrapperContext} from "@providers/module-wrapper-provider";
import {
  Button,
  Card,
  CardContent,
  Grid
} from "@mui/material";
import {useParams} from "react-router-dom";
import {
  NumberEdit,
  TextEdit,
  DatetimeEdit,
  EnumEdit
} from "@components/generic-components/edit-components";

export interface DtoField<TView> {
  "name": string;
  "label": string;
  "type"?: string;
  "format"?: string;
  "nullable"?: boolean;
  "description"?: string;
  "editable": boolean;
  "enum"?: string[];
}

export interface GenericFormProps<
  TView extends BasicTypeForGeneric,
  TCreate,
  TUpdate
> {
  editable: boolean;
  getItemFn: (id: number, params?: RequestParams) => Promise<HttpResponse<TView, void | ProblemDetails>>;
  updateItemFn: (id: number, data: TUpdate, params: RequestParams) => Promise<HttpResponse<TView, void | ProblemDetails>>;
  createItemFn: (data: TCreate, params: RequestParams) => Promise<HttpResponse<TView, void | ProblemDetails>>;
  detailsSchema: DtoSchema;
  updateSchema: DtoSchema;
  createSchema: DtoSchema;
  mode?: "create" | "update" | "details";
}

export function GenericForm<
  TView extends BasicTypeForGeneric,
  TCreate,
  TUpdate
>({
    editable,
    getItemFn,
    createItemFn,
    updateItemFn,
    detailsSchema,
    updateSchema,
    createSchema,
    mode
  }: GenericFormProps<TView, TCreate, TUpdate>): ReactNode {
  const {
    setBusy,
    isBusy,
    setSaving,
    isSaving,
  } = useModuleWrapperContext();
  const params = useParams();
  const itemId = Number(params && params["*"] && params["*"].match(/^\d+?/)?.[0]);


  const updateFields: DtoField<TUpdate>[] = updateSchema.properties
    ? Object.keys(updateSchema.properties)
      .map((key) => {
        return {
          name: key,
          label: camelCaseToTitleCase(key),
          // @ts-ignore
          type: updateSchema.properties[key].type,
          // @ts-ignore
          format: updateSchema.properties[key].format,
          // @ts-ignore
          nullable: updateSchema.properties[key].nullable,
          // @ts-ignore
          description: updateSchema.properties[key].description,
          // @ts-ignore
          enum: updateSchema.properties[key].enum,
          editable: true,
        };
      })
    : [];

  const createFields: DtoField<TUpdate>[] = createSchema.properties
    ? Object.keys(createSchema.properties)
      .map((key) => {
        return {
          name: key,
          label: camelCaseToTitleCase(key),
          // @ts-ignore
          type: createSchema.properties[key].type,
          // @ts-ignore
          format: createSchema.properties[key].format,
          // @ts-ignore
          nullable: createSchema.properties[key].nullable,
          // @ts-ignore
          description: createSchema.properties[key].description,
          // @ts-ignore
          enum: createSchema.properties[key].enum,
          editable: true
        };
      })
    : [];

  // @ts-ignore
  const detailsFields: DtoField<TUpdate>[] = detailsSchema.properties
    ? Object.keys(detailsSchema.properties)
      .map((key) => {
        return {
          name: key,
          label: camelCaseToTitleCase(key),
          // @ts-ignore
          type: detailsSchema.properties[key].type,
          // @ts-ignore
          format: detailsSchema.properties.format,
          // @ts-ignore
          nullable: detailsSchema.properties.nullable,
          // @ts-ignore
          description: detailsSchema.properties.description,
          // @ts-ignore
          enum: detailsSchema.properties[key].enum,
          // @ts-ignore
          editable: key in updateSchema.properties,
        };
      })
    : [];

  const [values, setValues] = useState<any>(() => {
    const initValues: any = {};
    detailsFields.forEach(field => {
      initValues[field.name] = "";
    })
    return initValues;
  });

  useEffect(() => {
    const abortController = new AbortController();
    if (itemId) {
      setBusy(async () => {
        try {
          const {data} = await getItemFn(itemId);
          setValues((values: any) => ({...values, ...data}));
        } catch (e) {
          console.log(e);
        }
      });
    }
    return () => {
      abortController.abort("cancelled");
    };
  }, [itemId, getItemFn]);

  const save = () => {
    setSaving(async () => {
      const saveData: any = {};

      (itemId
        ? updateFields
        : createFields).forEach(field => {
        if (values[field.name]) {
          saveData[field.name] = values[field.name];
        }
      });

      if (itemId) {
        const {data} = await updateItemFn(itemId, saveData, {});
        setValues((values: any) => ({...values, ...data}));
      } else {
        const {data} = await createItemFn(saveData, {});
        setValues((values: any) => ({...values, ...data}));
      }
    });
  }

  const fieldsSet = () => {
    switch (mode) {
      case "create":
        return createFields;
      case "update":
        return detailsFields;
      default:
        return detailsFields;
    }
  }

  const getEdit = (field: DtoField<TView>) => {
    const commonProps = {
      key: field.name,
      label: field.label,
      value: values[field.name],
      disabled: !editable || !field.editable,
      onChangeValue: (newValue: any) => {
        setValues((prevValues: any) => ({
          ...prevValues,
          [field.name]: newValue
        }));
      }
    }
    switch (field.type) {
      case "integer":
        return NumberEdit({
          ...commonProps
        });
      case "number":
        return NumberEdit({
          ...commonProps
        });
      case "string":
        if (field.format === "date-time") {
          return DatetimeEdit({
            ...commonProps,
            value: values[field.name] ? new Date(values[field.name]) : null,
            onChangeValue: (newValue: Date | null) => {
              setValues((prevValues: any) => ({
                ...prevValues,
                [field.name]: newValue ? newValue.toISOString() : null
              }));
            }
          })
        } else if (field.enum && field.enum.length > 0) {
          return EnumEdit({
            ...commonProps,
            valueOptions: field.enum
          });
        } else {
          return TextEdit({
            ...commonProps
          });
        }
      default:
        return TextEdit({
          ...commonProps
        });
    }
  };

  return <>
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          {
            fieldsSet().map(field => (
              <Grid key={field.name} item xs={6} sm={6}>
                {getEdit(field)}
              </Grid>
            ))
          }
          <Grid item xs={12} sm={12}>
            {editable &&
              <Button type="submit"
                      disabled={isBusy || isSaving}
                      variant="contained"
                      fullWidth
                      onClick={save}
                      size="large">
                Save
              </Button>}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </>;
}
