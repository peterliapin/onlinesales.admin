import zod from "zod";

export const UserEditValidationScheme = zod.object({
  displayName: zod.string(),
  email: zod.string().email(),
  userName: zod.string(),
});