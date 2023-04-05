import { z } from "zod";

const emailValidator = z.string().email();
const numberValidator = z.coerce.number();
const requiredValidator = z.string().min(1);

export const isValidEmail = (email: string) => {
  return emailValidator.safeParse(email).success;
};

export const isValidNumber = (value: any) => {
  return (
    requiredValidator.safeParse(value.toString()).success &&
    numberValidator.safeParse(value).success
  );
};

