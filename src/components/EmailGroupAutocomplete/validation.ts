import zod from "zod";

export const EmailGroupEditValidationScheme = zod.object({
  name: zod.string(),
});
