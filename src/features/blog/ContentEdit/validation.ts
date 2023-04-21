import zod from "zod";
import { TypeDefaultValues } from "./types";
import { ImageData } from "@components/FileDropdown";

export const ContentEditAvailableLanguages = ["English", "Russian"] as const;

export const ContentEditAvailableTypes = ["Blog Post", "Release Note"] as const;

export const ContentEditMaximumImageSize = 3 * 1000 * 1000; // 3 megabytes

export const ContentEditDefaultValues: TypeDefaultValues[] = [
  {
    type: "Blog Post",
    defaultValues: {
      id: null,
      type: "Blog Post",
      title: "",
      description: "",
      body: "",
      coverImageUrl: "",
      coverImagePending: { fileName: "", url: "" },
      coverImageAlt: "",
      slug: "",
      author: "",
      language: "",
      allowComments: false,
      tags: [],
      category: "",
      createdAt: "",
      updatedAt: "",
      files: null,
    },
  },
  {
    type: "Release Note",
    defaultValues: {
      id: null,
      type: "Release Note",
      title: "",
      description: "",
      body: "",
      coverImageUrl: "",
      coverImagePending: { fileName: "", url: "" },
      coverImageAlt: "",
      slug: "",
      author: "",
      language: "",
      allowComments: false,
      tags: [],
      category: "",
      createdAt: "",
      updatedAt: "",
      files: null,
    },
  },
];

export const ContentEditValidationScheme = zod.object({
  type: zod.enum(ContentEditAvailableTypes),
  title: zod.string(),
  description: zod.string(),
  body: zod.string(),
  coverImageAlt: zod.string(),
  slug: zod.string(),
  author: zod.string(),
  language: zod.enum(ContentEditAvailableLanguages),
  allowComments: zod.boolean(),
  tags: zod.string().array().optional(),
  category: zod.string(),
});
