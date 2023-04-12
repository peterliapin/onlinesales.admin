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
  Grid,
  TextField
} from "@mui/material";


export interface DtoField<TView> {
  "name": string;
  "label": string;
  "type": string;
  "format"?: string;
  "nullable"?: boolean;
  "description"?: string;
  "editable": boolean;
}

interface GenericFormProps<
  TView extends BasicTypeForGeneric,
  TCreate,
  TUpdate
> {
  itemId?: number;
  editable: boolean;
  getItemFn: (id: number, params?: RequestParams) => Promise<HttpResponse<TView, void | ProblemDetails>>;
  updateItemFn: (id: number, data: TUpdate, params: RequestParams) => Promise<HttpResponse<TView, void | ProblemDetails>>;
  createItemFn: (data: TCreate, params: RequestParams) => Promise<HttpResponse<TView, void | ProblemDetails>>;
  detailsSchema: DtoSchema;
  updateSchema: DtoSchema;
  createSchema: DtoSchema;
}

export function GenericForm<
  TView extends BasicTypeForGeneric,
  TCreate,
  TUpdate
>({
    editable,
    itemId,
    getItemFn,
    createItemFn,
    updateItemFn,
    detailsSchema,
    updateSchema,
    createSchema
  }: GenericFormProps<TView, TCreate, TUpdate>): ReactNode {
  const {
    setBusy,
    isBusy,
    setSaving,
    isSaving,
  } = useModuleWrapperContext();

  const detailsFields: DtoField<TUpdate>[] = Object.keys(detailsSchema.properties)
    .map((key) => {
      return {
        name: key,
        label: camelCaseToTitleCase(key),
        type: detailsSchema.properties[key].type,
        format: detailsSchema.properties[key].format,
        nullable: detailsSchema.properties[key].nullable,
        description: detailsSchema.properties[key].description,
        editable: key in updateSchema.properties
      };
    });

  const updateFields: DtoField<TUpdate>[] = Object.keys(updateSchema.properties)
    .map((key) => {
      return {
        name: key,
        label: camelCaseToTitleCase(key),
        type: detailsSchema.properties[key].type,
        format: detailsSchema.properties[key].format,
        nullable: detailsSchema.properties[key].nullable,
        description: detailsSchema.properties[key].description,
        editable: true
      };
    });

  const createFields: DtoField<TUpdate>[] = Object.keys(createSchema.properties)
    .map((key) => {
      return {
        name: key,
        label: camelCaseToTitleCase(key),
        type: detailsSchema.properties[key].type,
        format: detailsSchema.properties[key].format,
        nullable: detailsSchema.properties[key].nullable,
        description: detailsSchema.properties[key].description,
        editable: true
      };
    });

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

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    if (!editable) {
      return;
    }
    const {name, value} = event.target;
    setValues((prevValues: any) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return <>
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          {detailsFields.map(field => (
            <Grid key={field.name} item xs={6} sm={6}>
              <TextField name={field.name}
                         type={field.type || "text"}
                         label={field.label}
                         disabled={!editable || !field.editable}
                         value={values[field.name]}
                         onChange={handleChange}
                         variant={"outlined"}
                         fullWidth={true}/>
            </Grid>
          ))}
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
