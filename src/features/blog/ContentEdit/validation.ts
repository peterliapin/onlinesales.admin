import zod from "zod";
import { TypeDefaultValues } from "./types";

export const ContentEditAvailableLanguages = ["English", "Russian"] as const;

export const ContentEditAvailableTypes = ["Blog Post", "Release Notes", "Other"] as const;

/// TODO: Runtime
export const ContentEditAvailableTags = ["Tag 1", "Tag 2", "Tag 3"] as const;

/// TODO: Runtime
export const ContentEditAvailableCategories = ["Cat 1", "Cat 2", "Cat 3"] as const;

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
      coverImageFile: null,
      coverImageAlt: "",
      slug: "",
      author: "",
      language: "",
      allowComments: false,
      tags: [],
      categories: [],
      createdAt: "",
      updatedAt: "",
      files: null,
      frontmatter: [],
    },
  },
  {
    type: "Release Notes",
    defaultValues: {
      id: null,
      type: "Release Notes",
      title: "",
      description: "",
      body: "",
      coverImageUrl: "",
      coverImageFile: null,
      coverImageAlt: "",
      slug: "",
      author: "",
      language: "",
      allowComments: false,
      tags: [],
      categories: [],
      createdAt: "",
      updatedAt: "",
      files: null,
      frontmatter: [],
    },
  },
  {
    type: "Other",
    defaultValues: {
      id: null,
      type: "Other",
      title: "",
      description: "",
      body: "",
      coverImageUrl: "",
      coverImageFile: null,
      coverImageAlt: "",
      slug: "",
      author: "",
      language: "",
      allowComments: false,
      tags: [],
      categories: [],
      createdAt: "",
      updatedAt: "",
      files: null,
      frontmatter: [],
    },
  },
];

export const ContentEditValidationScheme = zod.object({
  type: zod.enum(ContentEditAvailableTypes),
  title: zod.string(),
  description: zod.string(),
  body: zod.string(),
  coverImageFile: zod.instanceof(File),
  coverImageAlt: zod.string(),
  slug: zod.string(),
  author: zod.string(),
  language: zod.enum(ContentEditAvailableLanguages),
  allowComments: zod.boolean(),
  tags: zod.string().array(),
  categories: zod.string().array(),
});
