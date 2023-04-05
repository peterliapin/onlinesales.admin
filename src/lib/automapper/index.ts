import { createMap, forMember, mapFrom, createMapper } from "@automapper/core";
import { pojos, PojosMetadataMap } from "@automapper/pojos";
import {
  ContentDetailsDto,
  ContentUpdateDto,
  ContentCreateDto,
} from "@lib/network/swagger-client";
import { ContentDetails } from "@features/blog/ContentEdit/types";

export const Automapper = createMapper({
  strategyInitializer: pojos(),
});

PojosMetadataMap.create<ContentDetailsDto>("ContentDetailsDto", {
  title: String,
  description: String,
  body: String,
  coverImageUrl: String,
  coverImageAlt: String,
  slug: String,
  type: String,
  author: String,
  language: String,
  categories: String,
  tags: String,
  allowComments: Boolean,
  id: Number,
  createdAt: String,
  updatedAt: String,
});

PojosMetadataMap.create<ContentDetails>("ContentDetails", {
  tags: [String],
  categories: [String],
  id: Number,
  allowComments: Boolean,
  createdAt: String,
  updatedAt: String,
  description: String,
  body: String,
  coverImageUrl: String,
  coverImageAlt: String,
  slug: String,
  type: String,
  author: String,
  language: String,
  title: String,
});

PojosMetadataMap.create<ContentUpdateDto>("ContentUpdateDto", {
  title: String,
  description: String,
  body: String,
  coverImageUrl: String,
  coverImageAlt: String,
  slug: String,
  type: String,
  author: String,
  language: String,
  categories: String,
  tags: String,
  allowComments: Boolean,
});
PojosMetadataMap.create<ContentCreateDto>("ContentCreateDto", {
  title: String,
  description: String,
  body: String,
  coverImageUrl: String,
  coverImageAlt: String,
  slug: String,
  type: String,
  author: String,
  language: String,
  categories: String,
  tags: String,
  allowComments: Boolean,
});

createMap<ContentDetailsDto, ContentDetails>(
  Automapper,
  "ContentDetailsDto",
  "ContentDetails",
  forMember(
    (d) => d.tags,
    mapFrom((s) => s.tags && s.tags.split(";") || [])
  ),
  forMember(
    (d) => d.language,
    mapFrom((s) => {
      switch (s.language){
      case "ru":
        return "Russian";
      case "en":
        return "English";
      default:
        return "Unknown";
      }
    }),
  ),
  forMember(
    (d) => d.type,
    mapFrom((s) => {
      switch (s.type){
      case "post":
        return "Blog Post";
      case "release-note":
        return "Release Note";
      default:
        return "Unknown";
      }
    }),
  ),
  forMember(
    (d) => d.categories,
    mapFrom((s) => s.categories && s.categories.split(";") || [])
  )
);
createMap<ContentDetails, ContentUpdateDto>(
  Automapper,
  "ContentDetails",
  "ContentUpdateDto",
  forMember(
    (d) => d.tags,
    mapFrom((s) => s.tags.join(";"))
  ),
  forMember(
    (d) => d.language,
    mapFrom((s) => {
      switch (s.language){
      case "Russian":
        return "ru";
      case "English":
        return "en";
      default:
        return "Unknown";
      }
    }),
  ),
  forMember(
    (d) => d.type,
    mapFrom((s) => {
      switch (s.type){
      case "Blog Post":
        return "post";
      case "Release Note":
        return "release-note";
      default:
        return "Unknown";
      }
    }),
  ),
  forMember(
    (d) => d.categories,
    mapFrom((s) => s.categories.join(";"))
  )
);
createMap<ContentDetails, ContentCreateDto>(
  Automapper,
  "ContentDetails",
  "ContentCreateDto",
  forMember(
    (d) => d.tags,
    mapFrom((s) => s.tags.join(";"))
  ),
  forMember(
    (d) => d.language,
    mapFrom((s) => {
      switch (s.language){
      case "Russian":
        return "ru";
      case "English":
        return "en";
      default:
        return "Unknown";
      }
    }),
  ),
  forMember(
    (d) => d.type,
    mapFrom((s) => {
      switch (s.type){
      case "Blog Post":
        return "post";
      case "Release Note":
        return "release-note";
      default:
        return "Unknown";
      }
    }),
  ),
  forMember(
    (d) => d.categories,
    mapFrom((s) => s.categories.join(";"))
  )
);
