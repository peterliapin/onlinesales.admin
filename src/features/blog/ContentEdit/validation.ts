import zod from "zod";

export interface ContentDetails {
  id: string | null;
  type: string;
  title: string;
  description: string;
  body: string;
  coverImageUrl: string;
  coverImageAlt: string;
  slug: string;
  author: string;
  language: string;
  allowComments: boolean;
  tags: string[];
  categories: string[];
  createdAt: string | null;
  updatedAt: string | null;
}

export interface TypeDefaultValues {
  type: string;
  defaultValues: ContentDetails;
}

export const ContentEditAvailableLanguages = ["English", "Russian"] as const;

export const ContentEditAvailableTypes = ["Product", "Case", "Other"] as const;

export const ContentEditDefaultValues: TypeDefaultValues[] = [
  {
    type: "Product",
    defaultValues: {
      id: null,
      type: "Product",
      title: "",
      description: "",
      body: "",
      coverImageUrl: "",
      coverImageAlt: "",
      slug: "",
      author: "",
      language: "",
      allowComments: false,
      tags: [],
      categories: [],
      createdAt: "",
      updatedAt: "",
    },
  },
  {
    type: "Case",
    defaultValues: {
      id: null,
      type: "Case",
      title: "",
      description: "",
      body: "",
      coverImageUrl: "",
      coverImageAlt: "",
      slug: "",
      author: "",
      language: "",
      allowComments: false,
      tags: [],
      categories: [],
      createdAt: "",
      updatedAt: "",
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
      coverImageAlt: "",
      slug: "",
      author: "",
      language: "",
      allowComments: false,
      tags: [],
      categories: [],
      createdAt: "",
      updatedAt: "",
    },
  },
];

/// TODO: Runtime
export const ContentEditAvailableTags = ["Tag 1", "Tag 2", "Tag 3"] as const;

/// TODO: Runtime
export const ContentEditAvailableCategories = ["Cat 1", "Cat 2", "Cat 3"] as const;

export const ContentEditValidationScheme = zod.object({
  type: zod.enum(ContentEditAvailableTypes),
  title: zod.string(),
  description: zod.string(),
  body: zod.string(),
  coverImageUrl: zod.string().url(),
  coverImageAlt: zod.string(),
  slug: zod.string(),
  author: zod.string(),
  language: zod.enum(ContentEditAvailableLanguages),
  allowComments: zod.boolean(),
  tags: zod.string().array(),
  categories: zod.string().array(),
});
