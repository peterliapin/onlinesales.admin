import {HttpResponse, ProblemDetails, RequestParams} from "@lib/network/swagger-client";
import {
  DtoSchema,
  camelCaseToTitleCase,
  BasicTypeForGeneric,
} from "@components/generic-components/common";
import {useEffect, useState} from "react";
import {useModuleWrapperContext} from "@providers/module-wrapper-provider";
import {Button, Card, CardContent, Grid} from "@mui/material";
import {
  NumberEdit,
  TextEdit,
  DatetimeEdit,
  EnumEdit,
  DynamicValues,
  ValidationResult,
} from "@components/generic-components/edit-components";
import {useNotificationsService} from "@hooks";
import {validate} from "@components/generic-components/edit-components/validator";
import {z} from "zod";

export interface DtoField {
  editable: boolean;
  required: boolean | undefined;
  hide: boolean;
  name: string;
  label: string;
  type: "integer" | "number" | "string" | string;
  format?: "int32" | "int64" | "float" | "double" | "date-time" | "email" | "password" | string;
  nullable?: boolean;
  description?: string;
  enum?: string[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  example?: any;
}


export interface GenericFormProps<TView extends BasicTypeForGeneric, TCreate, TUpdate> {
  editable: boolean;
  getItemFn: (
    id: number,
    params?: RequestParams
  ) => Promise<HttpResponse<TView, void | ProblemDetails>>;
  updateItemFn: (
    id: number,
    data: TUpdate,
    params: RequestParams
  ) => Promise<HttpResponse<TView, void | ProblemDetails>>;
  createItemFn: (
    data: TCreate,
    params: RequestParams
  ) => Promise<HttpResponse<TView, void | ProblemDetails>>;
  detailsSchema: DtoSchema;
  updateSchema: DtoSchema;
  createSchema: DtoSchema;
  mode?: "create" | "update" | "details";
  getItemId: () => number | undefined;
  onSaved?: (item: TView) => void;
}

export function GenericForm<TView extends BasicTypeForGeneric, TCreate, TUpdate>({
  editable,
  getItemFn,
  createItemFn,
  updateItemFn,
  detailsSchema,
  updateSchema,
  createSchema,
  mode,
  getItemId,
  onSaved
}: GenericFormProps<TView, TCreate, TUpdate>) {
  const {setBusy, isBusy, setSaving, isSaving} = useModuleWrapperContext();
  const {notificationsService} = useNotificationsService();
  const [validationResult, setValidationResult] = useState<ValidationResult>();

  const itemId = getItemId();

  const updateFields: DtoField[] = Object.keys(updateSchema.properties)
    .map((key) => {
      return {
        name: key,
        label: updateSchema.properties[key].title || camelCaseToTitleCase(key),
        type: updateSchema.properties[key].type,
        format: updateSchema.properties[key].format,
        nullable: updateSchema.properties[key].nullable,
        description: updateSchema.properties[key].description,
        enum: updateSchema.properties[key].enum,
        example: updateSchema.properties[key].example,
        pattern: updateSchema.properties[key].pattern,
        minLength: updateSchema.properties[key].minLength,
        maxLength: updateSchema.properties[key].maxLength,
        required: updateSchema.required && updateSchema.required.indexOf(key) > -1,
        editable: true,
        hide: updateSchema.properties[key].hide
      };
    });

  const createFields: DtoField[] = Object.keys(createSchema.properties)
    .map((key) => {
      return {
        name: key,
        label: createSchema.properties[key].title || camelCaseToTitleCase(key),
        type: createSchema.properties[key].type,
        format: createSchema.properties[key].format,
        nullable: createSchema.properties[key].nullable,
        description: createSchema.properties[key].description,
        enum: createSchema.properties[key].enum,
        example: createSchema.properties[key].example,
        pattern: createSchema.properties[key].pattern,
        minLength: createSchema.properties[key].minLength,
        maxLength: createSchema.properties[key].maxLength,
        required: createSchema.required && createSchema.required.indexOf(key) > -1,
        editable: true,
        hide: createSchema.properties[key].hide
      };
    });

  const detailsFields: DtoField[] = Object.keys(detailsSchema.properties)
    .map((key) => {
      return {
        name: key,
        label: detailsSchema.properties[key].title || camelCaseToTitleCase(key),
        type: detailsSchema.properties[key].type,
        format: detailsSchema.properties[key].format,
        nullable: detailsSchema.properties[key].nullable,
        description: detailsSchema.properties[key].description,
        enum: detailsSchema.properties[key].enum,
        example: detailsSchema.properties[key].example,
        pattern: detailsSchema.properties[key].pattern,
        minLength: detailsSchema.properties[key].minLength,
        maxLength: detailsSchema.properties[key].maxLength,
        required: detailsSchema.required && detailsSchema.required.indexOf(key) > -1,
        editable: key in updateSchema.properties,
        hide: detailsSchema.properties[key].hide
      };
    });

  const [values, setValues] = useState<DynamicValues>(() => {
    const initValues: DynamicValues = {};
    detailsFields.forEach((field) => {
      initValues[field.name] = "";
    });
    return initValues;
  });

  useEffect(() => {
    const abortController = new AbortController();
    if (itemId) {
      setBusy(async () => {
        try {
          const {data} = await getItemFn(itemId);
          setValues((values) => ({...values, ...data}));
        } catch (e) {
          console.log(e);
        }
      });
    } else {
      const initValues: DynamicValues = {};
      detailsFields.forEach((field) => {
        initValues[field.name] = "";
      });
      setValues({...initValues});
    }
    return () => {
      abortController.abort("cancelled");
    };
  }, [itemId, getItemFn]);

  useEffect(() => {
    if (mode === "update") {
      setValidationResult(validate(updateFields, values));
    } else if (mode === "create") {
      setValidationResult(validate(createFields, values));
    }
  }, [values]);

  const save = () => {
    setSaving(async () => {
      const saveData: any = {};
      (itemId ? updateFields : createFields).forEach((field) => {
        if (values[field.name]) {
          saveData[field.name] = values[field.name];
        }
      });

      try {
        if (itemId) {
          if (!validationResult || !validationResult.errors) {
            const {data} = await updateItemFn(itemId, saveData, {});
            setValues((values) => ({...values, ...data}));
            onSaved && onSaved(data);
          }
        } else {
          if (!validationResult || !validationResult.errors) {
            const {data} = await createItemFn(saveData, {});
            setValues((values) => ({...values, ...data}));
            onSaved && onSaved(data);
          }
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          const issues = [];
          for (const issue of error.errors) {
            const propertyName = detailsSchema.properties[issue.path[0]].title
              || camelCaseToTitleCase(issue.path[0].toString());
            issues.push(`${propertyName}: ${issue.message}`);
          }
          notificationsService
            .errorWithContent(<div>{issues.map((issue, index) => <div
              key={index}>{issue}</div>)}</div>);
        } else {
          throw error;
        }
      }
    });
  };

  const fieldsSet = () => {
    switch (mode) {
    case "create":
      return createFields;
    case "update":
      return detailsFields;
    default:
      return detailsFields;
    }
  };

  const getEdit = (field: DtoField) => {
    const commonProps = {
      error: (validationResult && validationResult.errors && validationResult.errors[field.name]),
      required: field.required,
      pattern: field.pattern,
      key: field.name,
      label: field.label,
      example: field.example && `Value examples: ${field.example}`,
      value: values[field.name],
      disabled: !editable || !field.editable,
      onChangeValue: (newValue: any) => {
        setValues((prevValues) => ({
          ...prevValues,
          [field.name]: newValue,
        }));
      },
    };
    switch (field.type) {
    case "integer":
      return NumberEdit({
        ...commonProps,
      });
    case "number":
      return NumberEdit({
        ...commonProps,
      });
    case "string":
      if (field.format === "date-time") {
        return DatetimeEdit({
          ...commonProps,
          value: values[field.name] ? new Date(values[field.name]) : null,
          onChangeValue: (newValue: Date | null) => {
            setValues((prevValues) => ({
              ...prevValues,
              [field.name]: newValue ? newValue.toISOString() : null,
            }));
          },
        });
      } else if (field.enum && field.enum.length > 0) {
        return EnumEdit({
          ...commonProps,
          valueOptions: field.enum,
        });
      } else {
        return TextEdit({
          ...commonProps,
          minLength: field.minLength,
          maxLength: field.maxLength,
        });
      }
    default:
      return TextEdit({
        ...commonProps,
        minLength: field.minLength,
        maxLength: field.maxLength,
      });
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            {fieldsSet()
              .filter((field) => !field.hide)
              .map((field) => (
                <Grid key={field.name} item xs={6} sm={6}>
                  {getEdit(field)}
                </Grid>
              ))}
            <Grid item xs={12} sm={12}>
              {
                editable && (
                  <Button
                    type="submit"
                    disabled={isBusy || isSaving}
                    variant="contained"
                    fullWidth
                    onClick={save}
                    size="large">
                    Save
                  </Button>
                )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
