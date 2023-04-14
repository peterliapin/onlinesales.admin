import { DtoSchema, DtoSchemaSource } from "@components/generic-components/common";

const convertSchemaToDtoSchema = (
  schema: DtoSchemaSource,
  allSchemas: { [x: string]: DtoSchemaSource }
): DtoSchema => {
  const dtoSchema: DtoSchema = {
    type: schema.type,
    enum: schema.enum,
    properties: {},
  };
  if (schema.required && schema.required.length) {
    dtoSchema.required = schema.required;
  }
  if (schema.properties && dtoSchema.properties) {
    for (const [key, value] of Object.entries(schema.properties)) {
      if (value.$ref) {
        const refName = value.$ref.replace("#/components/schemas/", "");
        const refSchema = allSchemas[refName];
        const refDtoSchema = convertSchemaToDtoSchema(refSchema, allSchemas);
        if (refDtoSchema.type === "string") {
          dtoSchema.properties[key] = {
            type: "string",
            enum: refDtoSchema.enum,
            title: value.title,
          };
        }
      } else {
        dtoSchema.properties[key] = {
          type: value.type || "unknown",
        };

        if (value.format) {
          dtoSchema.properties[key].format = value.format;
        }

        if (value.nullable) {
          dtoSchema.properties[key].nullable = value.nullable;
        }

        if (value.title) {
          dtoSchema.properties[key].title = value.title;
        }

        if (value.description) {
          dtoSchema.properties[key].description = value.description;
        }
      }
    }
  }
  return dtoSchema;
};

export const getSchemaDto = (
  name: string,
  allSchemas: { [x: string]: DtoSchemaSource }
): DtoSchema => {
  if (name in allSchemas) {
    const schema = allSchemas[name];
    const result = convertSchemaToDtoSchema(schema, allSchemas);
    console.log([name, schema]);
    return result;
  }
  throw `${name} schema not found.`;
};
