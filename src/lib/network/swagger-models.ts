import data from "lib/network/swagger.json";

const schemas = data.components.schemas;

const contact = schemas.ContactImportDto.properties;
const account = schemas.AccountImportDto.properties;
const order = schemas.OrderImportDto.properties;
const domain = schemas.DomainImportDto.properties;

const models = [
  { name: "contact", model: contact },
  { name: "account", model: account },
  { name: "order", model: order },
  { name: "domain", model: domain },
];

export const getModelByName = (modelName: string) => {
  const model = models.find((m) => m.name === modelName);
  if (model) {
    return model.model;
  } else {
    return null;
  }
};
