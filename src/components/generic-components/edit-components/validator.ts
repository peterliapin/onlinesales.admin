import * as z from "zod";
import {DtoField} from "@components/generic-components";


export const getValidator = (fields: DtoField[]) => {
  const shape: any = {};

  for (const field of fields) {
    let shapeItem;

    switch (field.type) {
    case "string":
      shapeItem = z.string();

      if (typeof field.minLength !== "undefined") {
        shapeItem = shapeItem.min(field.minLength);
      }

      if (typeof field.maxLength !== "undefined") {
        shapeItem = shapeItem.max(field.maxLength);
      }

      if (field.pattern) {
        shapeItem = shapeItem.regex(RegExp(field.pattern));
      }

      shape[field.name] = field.required
        ? shapeItem
        : shapeItem.optional();
      break;

    case "number":
      shapeItem= z.number();

      shape[field.name] = shapeItem;

      shape[field.name] = field.required
        ? shapeItem
        : shapeItem.optional();
      break;

    case "integer":
      shapeItem = z.number().int();

      shape[field.name] = field.required
        ? shapeItem
        : shapeItem.optional();
      break;

    default:
      break;
    }
  }

  return z.object(shape);
};
