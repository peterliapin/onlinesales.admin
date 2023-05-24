import { z } from "zod";

const emailValidator = z.string().email();
const numberValidator = z.coerce.number();
const requiredValidator = z.string().min(1);

export const isValidEmail = (email: string) => {
  return emailValidator.safeParse(email).success;
};

export const isValidNumber = (value: any) => {
  return (
    value &&
    requiredValidator.safeParse(value.toString()).success &&
    numberValidator.safeParse(value).success
  );
};

export const isNotEmpty = (value: string | undefined | null) => {
  return requiredValidator.safeParse(value).success;
};

export const isValidOrEmptyNumber = (value: any) => {
  return value === 0 || value === undefined || numberValidator.safeParse(value).success;
};
