/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AccountCreateDto {
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name: string;
  /**
   * State
   * @example "string"
   */
  state?: string | null;
  continentCode?: Continent;
  countryCode?: Country;
  /**
   * City Name
   * @example "Colombo"
   */
  cityName?: string | null;
  /**
   * Site Url
   * @example "https://example.com"
   */
  siteUrl?: string | null;
  /**
   * Logo Url
   * @example "https://example.com/logo.png"
   */
  logoUrl?: string | null;
  /**
   * Employees Range
   * @example "50K-100K"
   */
  employeesRange?: string | null;
  /**
   * Revenue
   * @format double
   * @example 1
   */
  revenue?: number | null;
  /**
   * Tags
   * @example ["string1","string2"]
   */
  tags?: string[] | null;
  /**
   * Social Media
   * @example {"key1":"value1","key2":"value2"}
   */
  socialMedia?: Record<string, string>;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Data
   * @example "string"
   */
  data?: string | null;
}

export interface AccountDetailsDto {
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name: string;
  /**
   * State
   * @example "string"
   */
  state?: string | null;
  continentCode?: Continent;
  countryCode?: Country;
  /**
   * City Name
   * @example "Colombo"
   */
  cityName?: string | null;
  /**
   * Site Url
   * @example "https://example.com"
   */
  siteUrl?: string | null;
  /**
   * Logo Url
   * @example "https://example.com/logo.png"
   */
  logoUrl?: string | null;
  /**
   * Employees Range
   * @example "50K-100K"
   */
  employeesRange?: string | null;
  /**
   * Revenue
   * @format double
   * @example 1
   */
  revenue?: number | null;
  /**
   * Tags
   * @example ["string1","string2"]
   */
  tags?: string[] | null;
  /**
   * Social Media
   * @example {"key1":"value1","key2":"value2"}
   */
  socialMedia?: Record<string, string>;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Data
   * @example "string"
   */
  data?: string | null;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
}

export interface AccountImportDto {
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string | null;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
  /**
   * Created By Ip
   * @example "string"
   */
  createdByIp?: string | null;
  /**
   * Created By User Agent
   * @example "string"
   */
  createdByUserAgent?: string | null;
  /**
   * Updated By Ip
   * @example "string"
   */
  updatedByIp?: string | null;
  /**
   * Updated By User Agent
   * @example "string"
   */
  updatedByUserAgent?: string | null;
  /**
   * Name
   * @example "string"
   */
  name?: string;
  /**
   * City
   * @example "string"
   */
  city?: string | null;
  /**
   * State Code
   * @example "string"
   */
  stateCode?: string | null;
  countryCode?: Country;
  /**
   * Site Url
   * @example "string"
   */
  siteUrl?: string | null;
  /**
   * Logo Url
   * @example "string"
   */
  logoUrl?: string | null;
  /**
   * Employees Range
   * @example "string"
   */
  employeesRange?: string | null;
  /**
   * Revenue
   * @format double
   * @example 1
   */
  revenue?: number | null;
  /**
   * Tags
   * @example ["string1","string2"]
   */
  tags?: string[] | null;
  /**
   * Social Media
   * @example {"key1":"value1","key2":"value2"}
   */
  socialMedia?: Record<string, string>;
  /**
   * Data
   * @example "string"
   */
  data?: string | null;
}

export interface AccountUpdateDto {
  /**
   * Name
   * @example "string"
   */
  name?: string | null;
  /**
   * Site Url
   * @example "string"
   */
  siteUrl?: string | null;
  /**
   * Logo Url
   * @example "string"
   */
  logoUrl?: string | null;
  /**
   * City
   * @example "string"
   */
  city?: string | null;
  /**
   * State Code
   * @example "string"
   */
  stateCode?: string | null;
  countryCode?: Country;
  /**
   * Employees Range
   * @example "string"
   */
  employeesRange?: string | null;
  /**
   * Revenue
   * @format double
   * @example 1
   */
  revenue?: number | null;
  /**
   * Tags
   * @example ["string1","string2"]
   */
  tags?: string[] | null;
  /**
   * Social Media
   * @example {"key1":"value1","key2":"value2"}
   */
  socialMedia?: Record<string, string>;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Data
   * @example "string"
   */
  data?: string | null;
}

export interface CommentCreateDto {
  /**
   * Author Name
   * @example "string"
   */
  authorName?: string;
  /**
   * Author Email
   * @format email
   * @pattern ^([\w\.\-]+)@([\w\-]+)((\.(\w){1,63})+)$
   * @example "example@example.com"
   */
  authorEmail?: string;
  /**
   * Body
   * @minLength 1
   * @example "string"
   */
  body: string;
  /**
   * Content Id
   * @format int32
   * @example 1
   */
  contentId: number;
  /**
   * Parent Id
   * @format int32
   * @example 1
   */
  parentId?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
}

export interface CommentDetailsDto {
  /**
   * Author Name
   * @example "string"
   */
  authorName?: string;
  /**
   * Author Email
   * @format email
   * @pattern ^([\w\.\-]+)@([\w\-]+)((\.(\w){1,63})+)$
   * @example "example@example.com"
   */
  authorEmail?: string;
  /**
   * Body
   * @minLength 1
   * @example "string"
   */
  body: string;
  /**
   * Content Id
   * @format int32
   * @example 1
   */
  contentId: number;
  /**
   * Parent Id
   * @format int32
   * @example 1
   */
  parentId?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
}

export interface CommentImportDto {
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string | null;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
  /**
   * Created By Ip
   * @example "string"
   */
  createdByIp?: string | null;
  /**
   * Created By User Agent
   * @example "string"
   */
  createdByUserAgent?: string | null;
  /**
   * Updated By Ip
   * @example "string"
   */
  updatedByIp?: string | null;
  /**
   * Updated By User Agent
   * @example "string"
   */
  updatedByUserAgent?: string | null;
  /**
   * Author Name
   * @example "string"
   */
  authorName?: string;
  /**
   * Author Email
   * @format email
   * @pattern ^([\w\.\-]+)@([\w\-]+)((\.(\w){1,63})+)$
   * @example "example@example.com"
   */
  authorEmail?: string;
  /**
   * Body
   * @minLength 1
   * @example "string"
   */
  body: string;
  /**
   * Content Id
   * @format int32
   * @example 1
   */
  contentId?: number | null;
  /**
   * Content Slug
   * @example "string"
   */
  contentSlug?: string | null;
  /**
   * Parent Id
   * @format int32
   * @example 1
   */
  parentId?: number | null;
  /**
   * Key
   * @example "string"
   */
  key?: string | null;
  /**
   * Parent Key
   * @example "string"
   */
  parentKey?: string | null;
}

export interface CommentUpdateDto {
  /**
   * Body
   * @minLength 1
   * @example "string"
   */
  body: string;
}

export interface ContactCreateDto {
  /**
   * Last Name
   * @example "string"
   */
  lastName?: string | null;
  /**
   * First Name
   * @example "string"
   */
  firstName?: string | null;
  continentCode?: Continent;
  countryCode?: Country;
  /**
   * City Name
   * @example "string"
   */
  cityName?: string | null;
  /**
   * Address1
   * @example "string"
   */
  address1?: string | null;
  /**
   * Address2
   * @example "string"
   */
  address2?: string | null;
  /**
   * State
   * @example "string"
   */
  state?: string | null;
  /**
   * Zip
   * @example "string"
   */
  zip?: string | null;
  /**
   * Phone
   * @example "string"
   */
  phone?: string | null;
  /**
   * Timezone
   * @format int32
   * @example 1
   */
  timezone?: number | null;
  /**
   * Language
   * @example "string"
   */
  language?: string | null;
  /**
   * Unsubscribe Id
   * @format int32
   * @example 1
   */
  unsubscribeId?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Email
   * @format email
   * @minLength 1
   * @pattern ^([\w\.\-]+)@([\w\-]+)((\.(\w){1,63})+)$
   * @example "example@example.com"
   */
  email: string;
}

export interface ContactDetailsDto {
  /**
   * Last Name
   * @example "string"
   */
  lastName?: string | null;
  /**
   * First Name
   * @example "string"
   */
  firstName?: string | null;
  continentCode?: Continent;
  countryCode?: Country;
  /**
   * City Name
   * @example "string"
   */
  cityName?: string | null;
  /**
   * Address1
   * @example "string"
   */
  address1?: string | null;
  /**
   * Address2
   * @example "string"
   */
  address2?: string | null;
  /**
   * State
   * @example "string"
   */
  state?: string | null;
  /**
   * Zip
   * @example "string"
   */
  zip?: string | null;
  /**
   * Phone
   * @example "string"
   */
  phone?: string | null;
  /**
   * Timezone
   * @format int32
   * @example 1
   */
  timezone?: number | null;
  /**
   * Language
   * @example "string"
   */
  language?: string | null;
  /**
   * Unsubscribe Id
   * @format int32
   * @example 1
   */
  unsubscribeId?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Email
   * @format email
   * @minLength 1
   * @pattern ^([\w\.\-]+)@([\w\-]+)((\.(\w){1,63})+)$
   * @example "example@example.com"
   */
  email: string;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Avatar Url
   * @example "string"
   */
  avatarUrl?: string;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
  /**
   * Domain Id
   * @format int32
   * @example 1
   */
  domainId?: number;
}

export interface ContactImportDto {
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string | null;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
  /**
   * Created By Ip
   * @example "string"
   */
  createdByIp?: string | null;
  /**
   * Created By User Agent
   * @example "string"
   */
  createdByUserAgent?: string | null;
  /**
   * Updated By Ip
   * @example "string"
   */
  updatedByIp?: string | null;
  /**
   * Updated By User Agent
   * @example "string"
   */
  updatedByUserAgent?: string | null;
  /**
   * Email
   * @format email
   * @pattern ^([\w\.\-]+)@([\w\-]+)((\.(\w){1,63})+)$
   * @example "example@example.com"
   */
  email?: string | null;
  /**
   * Last Name
   * @example "string"
   */
  lastName?: string | null;
  /**
   * First Name
   * @example "string"
   */
  firstName?: string | null;
  continentCode?: Continent;
  countryCode?: Country;
  /**
   * City Name
   * @example "string"
   */
  cityName?: string | null;
  /**
   * Address1
   * @example "string"
   */
  address1?: string | null;
  /**
   * Address2
   * @example "string"
   */
  address2?: string | null;
  /**
   * State
   * @example "string"
   */
  state?: string | null;
  /**
   * Zip
   * @example "string"
   */
  zip?: string | null;
  /**
   * Phone
   * @example "string"
   */
  phone?: string | null;
  /**
   * Timezone
   * @format int32
   * @example 1
   */
  timezone?: number | null;
  /**
   * Language
   * @example "string"
   */
  language?: string | null;
  /**
   * Unsubscribe Id
   * @format int32
   * @example 1
   */
  unsubscribeId?: number | null;
  /**
   * Account Id
   * @format int32
   * @example 1
   */
  accountId?: number | null;
  /**
   * Account Name
   * @example "string"
   */
  accountName?: string | null;
  /**
   * Domain Id
   * @format int32
   * @example 1
   */
  domainId?: number | null;
}

export interface ContactUpdateDto {
  /**
   * Last Name
   * @example "string"
   */
  lastName?: string | null;
  /**
   * First Name
   * @example "string"
   */
  firstName?: string | null;
  continentCode?: Continent;
  countryCode?: Country;
  /**
   * City Name
   * @example "string"
   */
  cityName?: string | null;
  /**
   * Address1
   * @example "string"
   */
  address1?: string | null;
  /**
   * Address2
   * @example "string"
   */
  address2?: string | null;
  /**
   * State
   * @example "string"
   */
  state?: string | null;
  /**
   * Zip
   * @example "string"
   */
  zip?: string | null;
  /**
   * Phone
   * @example "string"
   */
  phone?: string | null;
  /**
   * Timezone
   * @format int32
   * @example 1
   */
  timezone?: number | null;
  /**
   * Language
   * @example "string"
   */
  language?: string | null;
  /**
   * Unsubscribe Id
   * @format int32
   * @example 1
   */
  unsubscribeId?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Email
   * @format email
   * @pattern ^([\w\.\-]+)@([\w\-]+)((\.(\w){1,63})+)$
   * @example "example@example.com"
   */
  email?: string | null;
}

export interface ContentCreateDto {
  /**
   * Title
   * @minLength 1
   * @example "string"
   */
  title: string;
  /**
   * Description
   * @minLength 1
   * @example "string"
   */
  description: string;
  /**
   * Body
   * @minLength 1
   * @example "string"
   */
  body: string;
  /**
   * Cover Image Url
   * @example "string"
   */
  coverImageUrl?: string | null;
  /**
   * Cover Image Alt
   * @example "string"
   */
  coverImageAlt?: string | null;
  /**
   * Slug
   * @minLength 1
   * @example "string"
   */
  slug: string;
  /**
   * Type
   * @minLength 1
   * @example "string"
   */
  type: string;
  /**
   * Author
   * @minLength 1
   * @example "string"
   */
  author: string;
  /**
   * Language
   * @minLength 1
   * @example "string"
   */
  language: string;
  /**
   * Category
   * @example "string"
   */
  category?: string;
  /**
   * Tags
   * @example ["string1","string2"]
   */
  tags?: string[];
  /**
   * Allow Comments
   * @example true
   */
  allowComments?: boolean;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
}

export interface ContentDetailsDto {
  /**
   * Title
   * @minLength 1
   * @example "string"
   */
  title: string;
  /**
   * Description
   * @minLength 1
   * @example "string"
   */
  description: string;
  /**
   * Body
   * @minLength 1
   * @example "string"
   */
  body: string;
  /**
   * Cover Image Url
   * @example "string"
   */
  coverImageUrl?: string | null;
  /**
   * Cover Image Alt
   * @example "string"
   */
  coverImageAlt?: string | null;
  /**
   * Slug
   * @minLength 1
   * @example "string"
   */
  slug: string;
  /**
   * Type
   * @minLength 1
   * @example "string"
   */
  type: string;
  /**
   * Author
   * @minLength 1
   * @example "string"
   */
  author: string;
  /**
   * Language
   * @minLength 1
   * @example "string"
   */
  language: string;
  /**
   * Category
   * @example "string"
   */
  category?: string;
  /**
   * Tags
   * @example ["string1","string2"]
   */
  tags?: string[];
  /**
   * Allow Comments
   * @example true
   */
  allowComments?: boolean;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
}

export interface ContentImportDto {
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string | null;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
  /**
   * Created By Ip
   * @example "string"
   */
  createdByIp?: string | null;
  /**
   * Created By User Agent
   * @example "string"
   */
  createdByUserAgent?: string | null;
  /**
   * Updated By Ip
   * @example "string"
   */
  updatedByIp?: string | null;
  /**
   * Updated By User Agent
   * @example "string"
   */
  updatedByUserAgent?: string | null;
  /**
   * Title
   * @example "string"
   */
  title?: string | null;
  /**
   * Description
   * @example "string"
   */
  description?: string | null;
  /**
   * Body
   * @example "string"
   */
  body?: string | null;
  /**
   * Cover Image Url
   * @example "string"
   */
  coverImageUrl?: string | null;
  /**
   * Cover Image Alt
   * @example "string"
   */
  coverImageAlt?: string | null;
  /**
   * Slug
   * @example "string"
   */
  slug?: string | null;
  /**
   * Type
   * @example "string"
   */
  type?: string | null;
  /**
   * Author
   * @example "string"
   */
  author?: string | null;
  /**
   * Language
   * @example "string"
   */
  language?: string | null;
  /**
   * Category
   * @example "string"
   */
  category?: string | null;
  /**
   * Tags
   * @example "string"
   */
  tags?: string | null;
  /**
   * Allow Comments
   * @example true
   */
  allowComments?: boolean | null;
}

export interface ContentUpdateDto {
  /**
   * Title
   * @minLength 1
   * @example "string"
   */
  title?: string | null;
  /**
   * Description
   * @minLength 1
   * @example "string"
   */
  description?: string | null;
  /**
   * Body
   * @minLength 1
   * @example "string"
   */
  body?: string | null;
  /**
   * Cover Image Url
   * @example "string"
   */
  coverImageUrl?: string | null;
  /**
   * Cover Image Alt
   * @example "string"
   */
  coverImageAlt?: string | null;
  /**
   * Slug
   * @minLength 1
   * @example "string"
   */
  slug?: string | null;
  /**
   * Type
   * @minLength 1
   * @example "string"
   */
  type?: string | null;
  /**
   * Author
   * @example "string"
   */
  author?: string | null;
  /**
   * Language
   * @minLength 1
   * @example "string"
   */
  language?: string | null;
  /**
   * Category
   * @example "string"
   */
  category?: string | null;
  /**
   * Tags
   * @example ["string1","string2"]
   */
  tags?: string[] | null;
  /**
   * Allow Comments
   * @example true
   */
  allowComments?: boolean | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
}

/** Continent */
export enum Continent {
  ZZ = "ZZ",
  AF = "AF",
  AN = "AN",
  AS = "AS",
  EU = "EU",
  NA = "NA",
  OC = "OC",
  SA = "SA",
}

/** Country */
export enum Country {
  ZZ = "ZZ",
  AF = "AF",
  AL = "AL",
  AQ = "AQ",
  DZ = "DZ",
  AS = "AS",
  AD = "AD",
  AO = "AO",
  AG = "AG",
  AZ = "AZ",
  AR = "AR",
  AU = "AU",
  AT = "AT",
  BS = "BS",
  BH = "BH",
  BD = "BD",
  AM = "AM",
  BB = "BB",
  BE = "BE",
  BM = "BM",
  BT = "BT",
  BO = "BO",
  BA = "BA",
  BW = "BW",
  BV = "BV",
  BR = "BR",
  BZ = "BZ",
  IO = "IO",
  SB = "SB",
  VG = "VG",
  BN = "BN",
  BG = "BG",
  MM = "MM",
  BI = "BI",
  BY = "BY",
  KH = "KH",
  CM = "CM",
  CA = "CA",
  CV = "CV",
  KY = "KY",
  CF = "CF",
  LK = "LK",
  TD = "TD",
  CL = "CL",
  CN = "CN",
  TW = "TW",
  CX = "CX",
  CC = "CC",
  CO = "CO",
  KM = "KM",
  YT = "YT",
  CG = "CG",
  CD = "CD",
  CK = "CK",
  CR = "CR",
  HR = "HR",
  CU = "CU",
  CY = "CY",
  CZ = "CZ",
  BJ = "BJ",
  DK = "DK",
  DM = "DM",
  DO = "DO",
  EC = "EC",
  SV = "SV",
  GQ = "GQ",
  ET = "ET",
  ER = "ER",
  EE = "EE",
  FO = "FO",
  FK = "FK",
  GS = "GS",
  FJ = "FJ",
  FI = "FI",
  AX = "AX",
  FR = "FR",
  GF = "GF",
  PF = "PF",
  TF = "TF",
  DJ = "DJ",
  GA = "GA",
  GE = "GE",
  GM = "GM",
  PS = "PS",
  DE = "DE",
  GH = "GH",
  GI = "GI",
  KI = "KI",
  GR = "GR",
  GL = "GL",
  GD = "GD",
  GP = "GP",
  GU = "GU",
  GT = "GT",
  GN = "GN",
  GY = "GY",
  HT = "HT",
  HM = "HM",
  VA = "VA",
  HN = "HN",
  HK = "HK",
  HU = "HU",
  IS = "IS",
  IN = "IN",
  ID = "ID",
  IR = "IR",
  IQ = "IQ",
  IE = "IE",
  IL = "IL",
  IT = "IT",
  CI = "CI",
  JM = "JM",
  JP = "JP",
  KZ = "KZ",
  JO = "JO",
  KE = "KE",
  KP = "KP",
  KR = "KR",
  KW = "KW",
  KG = "KG",
  LA = "LA",
  LB = "LB",
  LS = "LS",
  LV = "LV",
  LR = "LR",
  LY = "LY",
  LI = "LI",
  LT = "LT",
  LU = "LU",
  MO = "MO",
  MG = "MG",
  MW = "MW",
  MY = "MY",
  MV = "MV",
  ML = "ML",
  MT = "MT",
  MQ = "MQ",
  MR = "MR",
  MU = "MU",
  MX = "MX",
  MC = "MC",
  MN = "MN",
  MD = "MD",
  ME = "ME",
  MS = "MS",
  MA = "MA",
  MZ = "MZ",
  OM = "OM",
  NA = "NA",
  NR = "NR",
  NP = "NP",
  NL = "NL",
  CW = "CW",
  AW = "AW",
  SX = "SX",
  BQ = "BQ",
  NC = "NC",
  VU = "VU",
  NZ = "NZ",
  NI = "NI",
  NE = "NE",
  NG = "NG",
  NU = "NU",
  NF = "NF",
  NO = "NO",
  MP = "MP",
  UM = "UM",
  FM = "FM",
  MH = "MH",
  PW = "PW",
  PK = "PK",
  PA = "PA",
  PG = "PG",
  PY = "PY",
  PE = "PE",
  PH = "PH",
  PN = "PN",
  PL = "PL",
  PT = "PT",
  GW = "GW",
  TL = "TL",
  PR = "PR",
  QA = "QA",
  RE = "RE",
  RO = "RO",
  RU = "RU",
  RW = "RW",
  BL = "BL",
  SH = "SH",
  KN = "KN",
  AI = "AI",
  LC = "LC",
  MF = "MF",
  PM = "PM",
  VC = "VC",
  SM = "SM",
  ST = "ST",
  SA = "SA",
  SN = "SN",
  RS = "RS",
  SC = "SC",
  SL = "SL",
  SG = "SG",
  SK = "SK",
  VN = "VN",
  SI = "SI",
  SO = "SO",
  ZA = "ZA",
  ZW = "ZW",
  ES = "ES",
  SS = "SS",
  SD = "SD",
  EH = "EH",
  SR = "SR",
  SJ = "SJ",
  SZ = "SZ",
  SE = "SE",
  CH = "CH",
  SY = "SY",
  TJ = "TJ",
  TH = "TH",
  TG = "TG",
  TK = "TK",
  TO = "TO",
  TT = "TT",
  AE = "AE",
  TN = "TN",
  TR = "TR",
  TM = "TM",
  TC = "TC",
  TV = "TV",
  UG = "UG",
  UA = "UA",
  MK = "MK",
  EG = "EG",
  GB = "GB",
  GG = "GG",
  JE = "JE",
  IM = "IM",
  TZ = "TZ",
  US = "US",
  VI = "VI",
  BF = "BF",
  UY = "UY",
  UZ = "UZ",
  VE = "VE",
  WF = "WF",
  WS = "WS",
  YE = "YE",
  ZM = "ZM",
}

export interface DnsRecord {
  /**
   * Domain Name
   * @example "string"
   */
  domainName?: string;
  /**
   * Record Class
   * @example "string"
   */
  recordClass?: string;
  /**
   * Record Type
   * @example "string"
   */
  recordType?: string;
  /**
   * Time To Live
   * @format int32
   * @example 1
   */
  timeToLive?: number;
  /**
   * Value
   * @example "string"
   */
  value?: string;
}

export interface DomainCreateDto {
  /**
   * Name
   * @minLength 1
   * @example "example.com"
   */
  name: string;
  /**
   * Title
   * @example "string"
   */
  title?: string | null;
  /**
   * Description
   * @example "string"
   */
  description?: string | null;
  /**
   * Url
   * @example "https://example.com"
   */
  url?: string | null;
  /**
   * Favicon Url
   * @example "https://example.com/favicon.ico"
   */
  faviconUrl?: string | null;
  /**
   * Http Check
   * @example true
   */
  httpCheck?: boolean | null;
  /**
   * Free
   * @example true
   */
  free?: boolean | null;
  /**
   * Disposable
   * @example true
   */
  disposable?: boolean | null;
  /**
   * Catch All
   * @example true
   */
  catchAll?: boolean | null;
  /** Dns Records */
  dnsRecords?: DnsRecord[] | null;
  /**
   * Dns Check
   * @example true
   */
  dnsCheck?: boolean | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
}

export interface DomainDetailsDto {
  /**
   * Name
   * @minLength 1
   * @example "example.com"
   */
  name: string;
  /**
   * Title
   * @example "string"
   */
  title?: string | null;
  /**
   * Description
   * @example "string"
   */
  description?: string | null;
  /**
   * Url
   * @example "https://example.com"
   */
  url?: string | null;
  /**
   * Favicon Url
   * @example "https://example.com/favicon.ico"
   */
  faviconUrl?: string | null;
  /**
   * Http Check
   * @example true
   */
  httpCheck?: boolean | null;
  /**
   * Free
   * @example true
   */
  free?: boolean | null;
  /**
   * Disposable
   * @example true
   */
  disposable?: boolean | null;
  /**
   * Catch All
   * @example true
   */
  catchAll?: boolean | null;
  /** Dns Records */
  dnsRecords?: DnsRecord[] | null;
  /**
   * Dns Check
   * @example true
   */
  dnsCheck?: boolean | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
}

export interface DomainImportDto {
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string | null;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name: string;
  /**
   * Title
   * @example "string"
   */
  title?: string | null;
  /**
   * Description
   * @example "string"
   */
  description?: string | null;
  /**
   * Url
   * @example "https://example.com"
   */
  url?: string | null;
  /**
   * Favicon Url
   * @example "https://example.com/favicon.ico"
   */
  faviconUrl?: string | null;
  /**
   * Http Check
   * @example true
   */
  httpCheck?: boolean | null;
  /**
   * Free
   * @example true
   */
  free?: boolean | null;
  /**
   * Disposable
   * @example true
   */
  disposable?: boolean | null;
  /**
   * Catch All
   * @example true
   */
  catchAll?: boolean | null;
  /** Dns Records */
  dnsRecords?: DnsRecord[] | null;
  /**
   * Dns Check
   * @example true
   */
  dnsCheck?: boolean | null;
}

export interface DomainUpdateDto {
  /**
   * Title
   * @example "string"
   */
  title?: string | null;
  /**
   * Description
   * @example "string"
   */
  description?: string | null;
  /**
   * Url
   * @example "https://example.com"
   */
  url?: string | null;
  /**
   * Favicon Url
   * @example "https://example.com/favicon.ico"
   */
  faviconUrl?: string | null;
  /**
   * Http Check
   * @example true
   */
  httpCheck?: boolean | null;
  /**
   * Free
   * @example true
   */
  free?: boolean | null;
  /**
   * Disposable
   * @example true
   */
  disposable?: boolean | null;
  /**
   * Catch All
   * @example true
   */
  catchAll?: boolean | null;
  /** Dns Records */
  dnsRecords?: DnsRecord[] | null;
  /**
   * Dns Check
   * @example true
   */
  dnsCheck?: boolean | null;
}

export interface EmailGroupCreateDto {
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name: string;
}

export interface EmailGroupDetailsDto {
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name: string;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
}

export interface EmailGroupUpdateDto {
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name?: string | null;
}

export interface EmailTemplateCreateDto {
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name: string;
  /**
   * Subject
   * @minLength 1
   * @example "string"
   */
  subject: string;
  /**
   * Body Template
   * @minLength 1
   * @example "string"
   */
  bodyTemplate: string;
  /**
   * From Email
   * @format email
   * @minLength 1
   * @pattern ^([\w\.\-]+)@([\w\-]+)((\.(\w){1,63})+)$
   * @example "example@example.com"
   */
  fromEmail: string;
  /**
   * From Name
   * @minLength 1
   * @example "string"
   */
  fromName: string;
  /**
   * Language
   * @minLength 1
   * @example "string"
   */
  language: string;
  /**
   * Group Id
   * @format int32
   * @example 1
   */
  groupId: number;
}

export interface EmailTemplateDetailsDto {
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name: string;
  /**
   * Subject
   * @minLength 1
   * @example "string"
   */
  subject: string;
  /**
   * Body Template
   * @minLength 1
   * @example "string"
   */
  bodyTemplate: string;
  /**
   * From Email
   * @format email
   * @minLength 1
   * @pattern ^([\w\.\-]+)@([\w\-]+)((\.(\w){1,63})+)$
   * @example "example@example.com"
   */
  fromEmail: string;
  /**
   * From Name
   * @minLength 1
   * @example "string"
   */
  fromName: string;
  /**
   * Language
   * @minLength 1
   * @example "string"
   */
  language: string;
  /**
   * Group Id
   * @format int32
   * @example 1
   */
  groupId: number;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
}

export interface EmailTemplateUpdateDto {
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name?: string | null;
  /**
   * Subject
   * @minLength 1
   * @example "string"
   */
  subject?: string | null;
  /**
   * Body Template
   * @minLength 1
   * @example "string"
   */
  bodyTemplate?: string | null;
  /**
   * From Email
   * @format email
   * @pattern ^([\w\.\-]+)@([\w\-]+)((\.(\w){1,63})+)$
   * @example "example@example.com"
   */
  fromEmail?: string | null;
  /**
   * From Name
   * @minLength 1
   * @example "string"
   */
  fromName?: string | null;
  /**
   * Group Id
   * @format int32
   * @example 1
   */
  groupId?: number | null;
}

export interface ImportError {
  /**
   * Row
   * @format int32
   * @example 1
   */
  row?: number;
  /**
   * Message
   * @example "string"
   */
  message?: string;
}

export interface ImportResult {
  /**
   * Added
   * @format int32
   * @example 1
   */
  added?: number;
  /**
   * Updated
   * @format int32
   * @example 1
   */
  updated?: number;
  /**
   * Failed
   * @format int32
   * @example 1
   */
  failed?: number;
  /**
   * Skipped
   * @format int32
   * @example 1
   */
  skipped?: number;
  /** Errors */
  errors?: ImportError[] | null;
}

export interface LinkCreateDto {
  /**
   * Uid
   * @example "string"
   */
  uid?: string | null;
  /**
   * Destination
   * @minLength 1
   * @example "string"
   */
  destination: string;
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name: string;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
}

export interface LinkDetailsDto {
  /**
   * Uid
   * @example "string"
   */
  uid?: string | null;
  /**
   * Destination
   * @minLength 1
   * @example "string"
   */
  destination: string;
  /**
   * Name
   * @minLength 1
   * @example "string"
   */
  name: string;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
}

export interface LinkUpdateDto {
  /**
   * Uid
   * @example "string"
   */
  uid?: string | null;
  /**
   * Destination
   * @example "string"
   */
  destination?: string | null;
  /**
   * Name
   * @example "string"
   */
  name?: string | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
}

export enum LogLevel {
  Trace = "Trace",
  Debug = "Debug",
  Information = "Information",
  Warning = "Warning",
  Error = "Error",
  Critical = "Critical",
  None = "None",
}

export interface LogRecord {
  /**
   * Date Time
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  dateTime?: string;
  logLevel?: LogLevel;
  /**
   * Message
   * @example "string"
   */
  message?: string;
}

export interface MediaDetailsDto {
  /**
   * Location
   * @example "string"
   */
  location?: string;
}

export interface OrderCreateDto {
  /**
   * Contact Id
   * @format int32
   * @example 1
   */
  contactId: number;
  /**
   * Ref No
   * @minLength 1
   * @example "string"
   */
  refNo: string;
  /**
   * Order Number
   * @example "string"
   */
  orderNumber?: string | null;
  /**
   * Affiliate Name
   * @example "string"
   */
  affiliateName?: string | null;
  /**
   * Exchange Rate
   * @format double
   * @example 1
   */
  exchangeRate: number;
  /**
   * Currency
   * @minLength 1
   * @example "string"
   */
  currency: string;
  /**
   * Test Order
   * @example true
   */
  testOrder?: boolean;
  /**
   * Data
   * @example "string"
   */
  data?: string | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
}

export interface OrderDetailsDto {
  /**
   * Contact Id
   * @format int32
   * @example 1
   */
  contactId: number;
  /**
   * Ref No
   * @minLength 1
   * @example "string"
   */
  refNo: string;
  /**
   * Order Number
   * @example "string"
   */
  orderNumber?: string | null;
  /**
   * Affiliate Name
   * @example "string"
   */
  affiliateName?: string | null;
  /**
   * Exchange Rate
   * @format double
   * @example 1
   */
  exchangeRate: number;
  /**
   * Currency
   * @minLength 1
   * @example "string"
   */
  currency: string;
  /**
   * Test Order
   * @example true
   */
  testOrder?: boolean;
  /**
   * Data
   * @example "string"
   */
  data?: string | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
  /**
   * Quantity
   * @format int32
   * @example 1
   */
  quantity?: number;
  /**
   * Total
   * @format double
   * @example 1
   */
  total?: number;
}

export interface OrderImportDto {
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string | null;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
  /**
   * Created By Ip
   * @example "string"
   */
  createdByIp?: string | null;
  /**
   * Created By User Agent
   * @example "string"
   */
  createdByUserAgent?: string | null;
  /**
   * Updated By Ip
   * @example "string"
   */
  updatedByIp?: string | null;
  /**
   * Updated By User Agent
   * @example "string"
   */
  updatedByUserAgent?: string | null;
  /**
   * Ref No
   * @example "string"
   */
  refNo?: string | null;
  /**
   * Order Number
   * @example "string"
   */
  orderNumber?: string | null;
  /**
   * Affiliate Name
   * @example "string"
   */
  affiliateName?: string | null;
  /**
   * Exchange Rate
   * @format double
   * @example 1
   */
  exchangeRate?: number | null;
  /**
   * Currency
   * @minLength 1
   * @example "string"
   */
  currency: string;
  /**
   * Contact Id
   * @format int32
   * @example 1
   */
  contactId?: number | null;
  /**
   * Contact Email
   * @example "string"
   */
  contactEmail?: string | null;
  /**
   * Test Order
   * @example true
   */
  testOrder?: boolean | null;
  /**
   * Data
   * @example "string"
   */
  data?: string | null;
}

export interface OrderItemCreateDto {
  /**
   * Order Id
   * @format int32
   * @example 1
   */
  orderId: number;
  /**
   * Product Name
   * @minLength 1
   * @example "string"
   */
  productName: string;
  /**
   * License Code
   * @minLength 1
   * @example "string"
   */
  licenseCode: string;
  /**
   * Unit Price
   * @format double
   * @example 1
   */
  unitPrice: number;
  /**
   * Currency
   * @minLength 1
   * @pattern ^(NAD|ZAR|XAF|JPY|GHS|ETB|USD||AED|BHD|DJF|DZD|EGP|MAD|ERN|ILS|IQD|JOD|KMF|KWD|LBP|LYD|MAD|MRU|OMR|ILS|QAR|SAR|SDG|SOS|SSP|SYP|XAF|TND|YER|CLP|INR|TZS|EUR|AZN|AZN|RUB|XAF|BYN|ZMW|TZS|BGN|XOF|BDT|INR|CNY|INR|EUR|INR|BAM|BAM|ERN|EUR|EUR|EUR|EUR|BDT|INR|RUB|PHP|UGX|USD|USD|USD|IQD|IRR|EUR|CZK|RUB|GBP|DKK|DKK|KES|EUR|EUR|CHF|EUR|EUR|CHF|EUR|XOF|INR|EUR|XAF|MVR|XOF|BTN|KES|GHS|XOF|EUR|EUR|||AED|XCD|XCD|ALL|ARS|USD|EUR|AUD|BBD|BDT|EUR|BGN|BIF|BMD|BND|BRL|BSD|BWP|BZD|CAD|AUD|CHF|NZD|CLP|XAF|CNY|COP|CVE|AUD|EUR|CZK|EUR|USD|DKK|XCD|EUR|ERN|EUR|FJD|FKP|USD|EUR|GBP|XCD|GBP|GHS|GIP|GMD|EUR|USD|GYD|HKD|HUF|IDR|EUR|ILS|GBP|INR|USD|GBP|JMD|JPY|KES|AUD|XCD|KRW|KYD|XCD|LRD|ZAR|EUR|EUR|MGA|USD|MMK|MOP|USD|XCD|EUR|MUR|MVR|MWK|MXN|MYR|NAD|AUD|NGN|EUR|NOK|AUD|NZD|NZD|PGK|PHP|PKR|PLN|NZD|USD|EUR|USD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|EUR|EUR|SLL|SSP|ANG|SZL|USD|THB|NZD|TOP|TRY|TTD|AUD|TWD|TZS|UAH|UGX|USD|USD|USD|XCD|USD|USD|VUV|WST|ZAR|ZMW|USD||||XCD|ARS|BBD|BMD|BOB|USD|BRL|BSD|BZD|CAD|CLP|COP|CRC|CUP|ANG|XCD|DOP|EUR|USD|EUR|XCD|XAF|GTQ|GYD|HNL|HTG|EUR|XCD|KYD|XCD|MXN|NIO|PAB|PEN|PHP|USD|PYG|USD|USD|TTD|USD|UYU|XCD|VES|USD|USD|EUR|EUR|XAF|AFN|IRR|XOF|XAF|GHS|GMD|GNF|XOF|LRD|MRU|XOF|NGN|SLL|XOF|XOF|XAF|GHS|GMD|GNF|XOF|LRD|MRU|XOF|NGN|SLL|XOF|EUR|PHP|DKK|DKK|EUR|XOF|BIF|XOF|EUR|CAD|CDF|XAF|XAF|CHF|XOF|XAF|DJF|DZD|EUR|XAF|EUR|GNF|EUR|XAF|HTG|KMF|EUR|MAD|EUR|EUR|MGA|XOF|EUR|MRU|MUR|XPF|XOF|XPF|EUR|EUR|RWF|SCR|XOF|SYP|XAF|XOF|TND|VUV|XPF|EUR|EUR|EUR|GBP|EUR|GHS|GBP|ERN|ETB|EUR|PYG|CHF|EUR|CHF|INR|KES|GBP|GHS|XOF|NGN|USD|ILS|INR|INR|BAM|EUR|EUR|HUF|AMD||IDR|NGN|CNY||ISK|CHF|EUR|EUR|EUR|CAD|JPY||XAF|TZS|IDR|GEL|DZD|NGN|KES|NGN|TZS|CVE|XOF|KES|KZT|XAF|DKK|KES|KHR|INR|KPW|KRW|INR|GNF|LRD|INR|INR|INR|TZS|XAF|EUR|TRY|GBP|KGS|TZS|EUR|UGX|USD|AOA|CDF|XAF|XAF|LAK|IQD|IRR|EUR|CDF|KES|KES|EUR|INR|KES|TZS|KES|MUR|MGA|MZN|XAF|NZD|MKD|INR|MNT|INR|INR|CAD|INR|BND|MYR|BND|IDR|MYR|SGD|EUR|XAF|MMK|RUB|IRR|NAD|NOK|NOK|USD|EUR|EUR|INR|NPR|AWG|EUR|USD|ANG|EUR|SRD|ANG|XAF|NOK|XAF|GNF|ZAR|ZAR|SSP|USD|MWK|UGX|EUR|ETB|KES|INR|GEL|RUB|PKR|PKR|INR|NGN|PLN|AFN|PKR|AOA|BRL|CHF|CVE|EUR|XAF|XOF|EUR|MOP|MZN|EUR|STN|USD|BOB|USD|PEN|BDT|MMK|CHF|BIF|MDL|RON|TZS|BYN|KGS|KZT|MDL|RUB|UAH|RWF|TZS|INR|RUB|KES|INR|INR|TZS|EUR|EUR|PKR|INR|EUR|NOK|SEK|MZN|XOF|XAF|MAD|MAD|LKR|EUR|EUR|USD|WST|EUR|USD|DJF|ETB|KES|SOS|ALL|MKD|EUR|BAM|EUR|RSD|EUR|BAM|EUR|RSD|EUR|SZL|ZAR|ZAR|ZAR|IDR|EUR|EUR|SEK|CDF|KES|TZS|UGX|IQD|SYP|INR|LKR|MYR|SGD|INR|KES|UGX|TJS|THB|ERN|ETB|ERN|TMT|BWP|ZAR|TOP|EUR|TRY|TWD|ZAR|RUB|XOF|MAD|CNY|UAH|INR|PKR|PKR|AFN|UZS|UZS|LRD|LRD|ZAR|VND|TZS|EUR|CHF|ETB|XOF|ZAR|UGX|XAF||XOF|NGN|CNY|HKD|MAD|CNY|HKD|JPY|MOP|SGD|CNY|HKD|MOP|TWD|ZAR)$
   * @example "USD"
   */
  currency: string;
  /**
   * Quantity
   * @format int32
   * @min 1
   * @max 2147483647
   * @example 1
   */
  quantity: number;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
}

export interface OrderItemDetailsDto {
  /**
   * Order Id
   * @format int32
   * @example 1
   */
  orderId: number;
  /**
   * Product Name
   * @minLength 1
   * @example "string"
   */
  productName: string;
  /**
   * License Code
   * @minLength 1
   * @example "string"
   */
  licenseCode: string;
  /**
   * Unit Price
   * @format double
   * @example 1
   */
  unitPrice: number;
  /**
   * Currency
   * @minLength 1
   * @pattern ^(NAD|ZAR|XAF|JPY|GHS|ETB|USD||AED|BHD|DJF|DZD|EGP|MAD|ERN|ILS|IQD|JOD|KMF|KWD|LBP|LYD|MAD|MRU|OMR|ILS|QAR|SAR|SDG|SOS|SSP|SYP|XAF|TND|YER|CLP|INR|TZS|EUR|AZN|AZN|RUB|XAF|BYN|ZMW|TZS|BGN|XOF|BDT|INR|CNY|INR|EUR|INR|BAM|BAM|ERN|EUR|EUR|EUR|EUR|BDT|INR|RUB|PHP|UGX|USD|USD|USD|IQD|IRR|EUR|CZK|RUB|GBP|DKK|DKK|KES|EUR|EUR|CHF|EUR|EUR|CHF|EUR|XOF|INR|EUR|XAF|MVR|XOF|BTN|KES|GHS|XOF|EUR|EUR|||AED|XCD|XCD|ALL|ARS|USD|EUR|AUD|BBD|BDT|EUR|BGN|BIF|BMD|BND|BRL|BSD|BWP|BZD|CAD|AUD|CHF|NZD|CLP|XAF|CNY|COP|CVE|AUD|EUR|CZK|EUR|USD|DKK|XCD|EUR|ERN|EUR|FJD|FKP|USD|EUR|GBP|XCD|GBP|GHS|GIP|GMD|EUR|USD|GYD|HKD|HUF|IDR|EUR|ILS|GBP|INR|USD|GBP|JMD|JPY|KES|AUD|XCD|KRW|KYD|XCD|LRD|ZAR|EUR|EUR|MGA|USD|MMK|MOP|USD|XCD|EUR|MUR|MVR|MWK|MXN|MYR|NAD|AUD|NGN|EUR|NOK|AUD|NZD|NZD|PGK|PHP|PKR|PLN|NZD|USD|EUR|USD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|EUR|EUR|SLL|SSP|ANG|SZL|USD|THB|NZD|TOP|TRY|TTD|AUD|TWD|TZS|UAH|UGX|USD|USD|USD|XCD|USD|USD|VUV|WST|ZAR|ZMW|USD||||XCD|ARS|BBD|BMD|BOB|USD|BRL|BSD|BZD|CAD|CLP|COP|CRC|CUP|ANG|XCD|DOP|EUR|USD|EUR|XCD|XAF|GTQ|GYD|HNL|HTG|EUR|XCD|KYD|XCD|MXN|NIO|PAB|PEN|PHP|USD|PYG|USD|USD|TTD|USD|UYU|XCD|VES|USD|USD|EUR|EUR|XAF|AFN|IRR|XOF|XAF|GHS|GMD|GNF|XOF|LRD|MRU|XOF|NGN|SLL|XOF|XOF|XAF|GHS|GMD|GNF|XOF|LRD|MRU|XOF|NGN|SLL|XOF|EUR|PHP|DKK|DKK|EUR|XOF|BIF|XOF|EUR|CAD|CDF|XAF|XAF|CHF|XOF|XAF|DJF|DZD|EUR|XAF|EUR|GNF|EUR|XAF|HTG|KMF|EUR|MAD|EUR|EUR|MGA|XOF|EUR|MRU|MUR|XPF|XOF|XPF|EUR|EUR|RWF|SCR|XOF|SYP|XAF|XOF|TND|VUV|XPF|EUR|EUR|EUR|GBP|EUR|GHS|GBP|ERN|ETB|EUR|PYG|CHF|EUR|CHF|INR|KES|GBP|GHS|XOF|NGN|USD|ILS|INR|INR|BAM|EUR|EUR|HUF|AMD||IDR|NGN|CNY||ISK|CHF|EUR|EUR|EUR|CAD|JPY||XAF|TZS|IDR|GEL|DZD|NGN|KES|NGN|TZS|CVE|XOF|KES|KZT|XAF|DKK|KES|KHR|INR|KPW|KRW|INR|GNF|LRD|INR|INR|INR|TZS|XAF|EUR|TRY|GBP|KGS|TZS|EUR|UGX|USD|AOA|CDF|XAF|XAF|LAK|IQD|IRR|EUR|CDF|KES|KES|EUR|INR|KES|TZS|KES|MUR|MGA|MZN|XAF|NZD|MKD|INR|MNT|INR|INR|CAD|INR|BND|MYR|BND|IDR|MYR|SGD|EUR|XAF|MMK|RUB|IRR|NAD|NOK|NOK|USD|EUR|EUR|INR|NPR|AWG|EUR|USD|ANG|EUR|SRD|ANG|XAF|NOK|XAF|GNF|ZAR|ZAR|SSP|USD|MWK|UGX|EUR|ETB|KES|INR|GEL|RUB|PKR|PKR|INR|NGN|PLN|AFN|PKR|AOA|BRL|CHF|CVE|EUR|XAF|XOF|EUR|MOP|MZN|EUR|STN|USD|BOB|USD|PEN|BDT|MMK|CHF|BIF|MDL|RON|TZS|BYN|KGS|KZT|MDL|RUB|UAH|RWF|TZS|INR|RUB|KES|INR|INR|TZS|EUR|EUR|PKR|INR|EUR|NOK|SEK|MZN|XOF|XAF|MAD|MAD|LKR|EUR|EUR|USD|WST|EUR|USD|DJF|ETB|KES|SOS|ALL|MKD|EUR|BAM|EUR|RSD|EUR|BAM|EUR|RSD|EUR|SZL|ZAR|ZAR|ZAR|IDR|EUR|EUR|SEK|CDF|KES|TZS|UGX|IQD|SYP|INR|LKR|MYR|SGD|INR|KES|UGX|TJS|THB|ERN|ETB|ERN|TMT|BWP|ZAR|TOP|EUR|TRY|TWD|ZAR|RUB|XOF|MAD|CNY|UAH|INR|PKR|PKR|AFN|UZS|UZS|LRD|LRD|ZAR|VND|TZS|EUR|CHF|ETB|XOF|ZAR|UGX|XAF||XOF|NGN|CNY|HKD|MAD|CNY|HKD|JPY|MOP|SGD|CNY|HKD|MOP|TWD|ZAR)$
   * @example "USD"
   */
  currency: string;
  /**
   * Quantity
   * @format int32
   * @min 1
   * @max 2147483647
   * @example 1
   */
  quantity: number;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
  /**
   * Currency Total
   * @format double
   * @example 1
   */
  currencyTotal?: number;
  /**
   * Total
   * @format double
   * @example 1
   */
  total?: number;
}

export interface OrderItemImportDto {
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string | null;
  /**
   * Updated At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  updatedAt?: string | null;
  /**
   * Created By Ip
   * @example "string"
   */
  createdByIp?: string | null;
  /**
   * Created By User Agent
   * @example "string"
   */
  createdByUserAgent?: string | null;
  /**
   * Updated By Ip
   * @example "string"
   */
  updatedByIp?: string | null;
  /**
   * Updated By User Agent
   * @example "string"
   */
  updatedByUserAgent?: string | null;
  /**
   * Order Id
   * @format int32
   * @example 1
   */
  orderId?: number | null;
  /**
   * Order Ref No
   * @example "string"
   */
  orderRefNo?: string | null;
  /**
   * Product Name
   * @example "string"
   */
  productName?: string | null;
  /**
   * License Code
   * @example "string"
   */
  licenseCode?: string | null;
  /**
   * Unit Price
   * @format double
   * @example 1
   */
  unitPrice?: number | null;
  /**
   * Currency
   * @pattern ^(NAD|ZAR|XAF|JPY|GHS|ETB|USD||AED|BHD|DJF|DZD|EGP|MAD|ERN|ILS|IQD|JOD|KMF|KWD|LBP|LYD|MAD|MRU|OMR|ILS|QAR|SAR|SDG|SOS|SSP|SYP|XAF|TND|YER|CLP|INR|TZS|EUR|AZN|AZN|RUB|XAF|BYN|ZMW|TZS|BGN|XOF|BDT|INR|CNY|INR|EUR|INR|BAM|BAM|ERN|EUR|EUR|EUR|EUR|BDT|INR|RUB|PHP|UGX|USD|USD|USD|IQD|IRR|EUR|CZK|RUB|GBP|DKK|DKK|KES|EUR|EUR|CHF|EUR|EUR|CHF|EUR|XOF|INR|EUR|XAF|MVR|XOF|BTN|KES|GHS|XOF|EUR|EUR|||AED|XCD|XCD|ALL|ARS|USD|EUR|AUD|BBD|BDT|EUR|BGN|BIF|BMD|BND|BRL|BSD|BWP|BZD|CAD|AUD|CHF|NZD|CLP|XAF|CNY|COP|CVE|AUD|EUR|CZK|EUR|USD|DKK|XCD|EUR|ERN|EUR|FJD|FKP|USD|EUR|GBP|XCD|GBP|GHS|GIP|GMD|EUR|USD|GYD|HKD|HUF|IDR|EUR|ILS|GBP|INR|USD|GBP|JMD|JPY|KES|AUD|XCD|KRW|KYD|XCD|LRD|ZAR|EUR|EUR|MGA|USD|MMK|MOP|USD|XCD|EUR|MUR|MVR|MWK|MXN|MYR|NAD|AUD|NGN|EUR|NOK|AUD|NZD|NZD|PGK|PHP|PKR|PLN|NZD|USD|EUR|USD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|EUR|EUR|SLL|SSP|ANG|SZL|USD|THB|NZD|TOP|TRY|TTD|AUD|TWD|TZS|UAH|UGX|USD|USD|USD|XCD|USD|USD|VUV|WST|ZAR|ZMW|USD||||XCD|ARS|BBD|BMD|BOB|USD|BRL|BSD|BZD|CAD|CLP|COP|CRC|CUP|ANG|XCD|DOP|EUR|USD|EUR|XCD|XAF|GTQ|GYD|HNL|HTG|EUR|XCD|KYD|XCD|MXN|NIO|PAB|PEN|PHP|USD|PYG|USD|USD|TTD|USD|UYU|XCD|VES|USD|USD|EUR|EUR|XAF|AFN|IRR|XOF|XAF|GHS|GMD|GNF|XOF|LRD|MRU|XOF|NGN|SLL|XOF|XOF|XAF|GHS|GMD|GNF|XOF|LRD|MRU|XOF|NGN|SLL|XOF|EUR|PHP|DKK|DKK|EUR|XOF|BIF|XOF|EUR|CAD|CDF|XAF|XAF|CHF|XOF|XAF|DJF|DZD|EUR|XAF|EUR|GNF|EUR|XAF|HTG|KMF|EUR|MAD|EUR|EUR|MGA|XOF|EUR|MRU|MUR|XPF|XOF|XPF|EUR|EUR|RWF|SCR|XOF|SYP|XAF|XOF|TND|VUV|XPF|EUR|EUR|EUR|GBP|EUR|GHS|GBP|ERN|ETB|EUR|PYG|CHF|EUR|CHF|INR|KES|GBP|GHS|XOF|NGN|USD|ILS|INR|INR|BAM|EUR|EUR|HUF|AMD||IDR|NGN|CNY||ISK|CHF|EUR|EUR|EUR|CAD|JPY||XAF|TZS|IDR|GEL|DZD|NGN|KES|NGN|TZS|CVE|XOF|KES|KZT|XAF|DKK|KES|KHR|INR|KPW|KRW|INR|GNF|LRD|INR|INR|INR|TZS|XAF|EUR|TRY|GBP|KGS|TZS|EUR|UGX|USD|AOA|CDF|XAF|XAF|LAK|IQD|IRR|EUR|CDF|KES|KES|EUR|INR|KES|TZS|KES|MUR|MGA|MZN|XAF|NZD|MKD|INR|MNT|INR|INR|CAD|INR|BND|MYR|BND|IDR|MYR|SGD|EUR|XAF|MMK|RUB|IRR|NAD|NOK|NOK|USD|EUR|EUR|INR|NPR|AWG|EUR|USD|ANG|EUR|SRD|ANG|XAF|NOK|XAF|GNF|ZAR|ZAR|SSP|USD|MWK|UGX|EUR|ETB|KES|INR|GEL|RUB|PKR|PKR|INR|NGN|PLN|AFN|PKR|AOA|BRL|CHF|CVE|EUR|XAF|XOF|EUR|MOP|MZN|EUR|STN|USD|BOB|USD|PEN|BDT|MMK|CHF|BIF|MDL|RON|TZS|BYN|KGS|KZT|MDL|RUB|UAH|RWF|TZS|INR|RUB|KES|INR|INR|TZS|EUR|EUR|PKR|INR|EUR|NOK|SEK|MZN|XOF|XAF|MAD|MAD|LKR|EUR|EUR|USD|WST|EUR|USD|DJF|ETB|KES|SOS|ALL|MKD|EUR|BAM|EUR|RSD|EUR|BAM|EUR|RSD|EUR|SZL|ZAR|ZAR|ZAR|IDR|EUR|EUR|SEK|CDF|KES|TZS|UGX|IQD|SYP|INR|LKR|MYR|SGD|INR|KES|UGX|TJS|THB|ERN|ETB|ERN|TMT|BWP|ZAR|TOP|EUR|TRY|TWD|ZAR|RUB|XOF|MAD|CNY|UAH|INR|PKR|PKR|AFN|UZS|UZS|LRD|LRD|ZAR|VND|TZS|EUR|CHF|ETB|XOF|ZAR|UGX|XAF||XOF|NGN|CNY|HKD|MAD|CNY|HKD|JPY|MOP|SGD|CNY|HKD|MOP|TWD|ZAR)$
   * @example "USD"
   */
  currency?: string | null;
  /**
   * Quantity
   * @format int32
   * @example 1
   */
  quantity?: number | null;
}

export interface OrderItemUpdateDto {
  /**
   * Product Name
   * @minLength 1
   * @example "string"
   */
  productName?: string | null;
  /**
   * License Code
   * @minLength 1
   * @example "string"
   */
  licenseCode?: string | null;
  /**
   * Unit Price
   * @format double
   * @example 1
   */
  unitPrice?: number | null;
  /**
   * Quantity
   * @format int32
   * @min 1
   * @max 2147483647
   * @example 1
   */
  quantity?: number | null;
  /**
   * Data
   * @example "string"
   */
  data?: string | null;
}

export interface OrderUpdateDto {
  /**
   * Ref No
   * @minLength 1
   * @example "string"
   */
  refNo: string;
  /**
   * Affiliate Name
   * @example "string"
   */
  affiliateName?: string | null;
  /**
   * Data
   * @example "string"
   */
  data?: string | null;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}

export interface TaskDetailsDto {
  /**
   * Name
   * @example "string"
   */
  name?: string;
  /**
   * Cron Schedule
   * @example "string"
   */
  cronSchedule?: string;
  /**
   * Retry Count
   * @format int32
   * @example 1
   */
  retryCount?: number;
  /**
   * Retry Interval
   * @format int32
   * @example 1
   */
  retryInterval?: number;
  /**
   * Is Running
   * @example true
   */
  isRunning?: boolean;
}

export interface TaskExecutionDto {
  /**
   * Name
   * @example "string"
   */
  name?: string;
  /**
   * Completed
   * @example true
   */
  completed?: boolean;
}

export interface UnsubscribeDetailsDto {
  /**
   * Contact Id
   * @format int32
   * @example 1
   */
  contactId?: number;
  /**
   * Reason
   * @example "string"
   */
  reason?: string;
  /**
   * Source
   * @example "string"
   */
  source?: string;
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string;
}

export interface UnsubscribeDto {
  /**
   * Contact Id
   * @format int32
   * @example 1
   */
  contactId?: number;
  /**
   * Reason
   * @example "string"
   */
  reason?: string;
  /**
   * Source
   * @example "string"
   */
  source?: string;
}

export interface UnsubscribeImportDto {
  /**
   * Id
   * @format int32
   * @example 1
   */
  id?: number | null;
  /**
   * Source
   * @example "string"
   */
  source?: string | null;
  /**
   * Reason
   * @example "string"
   */
  reason?: string;
  /**
   * Contact Id
   * @format int32
   * @example 1
   */
  contactId?: number;
  /**
   * Contact Email
   * @example "string"
   */
  contactEmail?: string;
  /**
   * Created At
   * @format date-time
   * @pattern ^(\d{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])T(2[0-4]|1[0-9]|0[1-9]):(2[0-4]|1[0-9]|0[1-9]):([1-5]?0[0-9]).(\d{7})Z$
   * @example "2023-04-18T12:00:00.0000000Z"
   */
  createdAt?: string | null;
}

export interface User {
  /**
   * Name
   * @example "string"
   */
  name?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title OnlineSales API
 * @version 1.2.2.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  microsoftIdentity = {
    /**
     * No description
     *
     * @tags Account
     * @name AccountSignInDetail
     * @request GET:/microsoft-identity/account/sign-in/{scheme}
     * @secure
     */
    accountSignInDetail: (
      scheme: string,
      query?: {
        redirectUri?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/microsoft-identity/account/sign-in/${scheme}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountChallengeDetail
     * @request GET:/microsoft-identity/account/challenge/{scheme}
     * @secure
     */
    accountChallengeDetail: (
      scheme: string,
      query?: {
        redirectUri?: string;
        scope?: string;
        loginHint?: string;
        domainHint?: string;
        claims?: string;
        policy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/microsoft-identity/account/challenge/${scheme}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountSignOutDetail
     * @request GET:/microsoft-identity/account/sign-out/{scheme}
     * @secure
     */
    accountSignOutDetail: (scheme: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/microsoft-identity/account/sign-out/${scheme}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountResetPasswordDetail
     * @request GET:/microsoft-identity/account/reset-password/{scheme}
     * @secure
     */
    accountResetPasswordDetail: (scheme: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/microsoft-identity/account/reset-password/${scheme}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountEditProfileDetail
     * @request GET:/microsoft-identity/account/edit-profile/{scheme}
     * @secure
     */
    accountEditProfileDetail: (scheme: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/microsoft-identity/account/edit-profile/${scheme}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  api = {
    /**
     * No description
     *
     * @tags Accounts
     * @name AccountsImportCreate
     * @request POST:/api/accounts/import
     * @secure
     */
    accountsImportCreate: (data: AccountImportDto[], params: RequestParams = {}) =>
      this.request<ImportResult, void | ProblemDetails>({
        path: `/api/accounts/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name AccountsDetail
     * @request GET:/api/accounts/{id}
     * @secure
     */
    accountsDetail: (id: number, params: RequestParams = {}) =>
      this.request<AccountDetailsDto, void | ProblemDetails>({
        path: `/api/accounts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name AccountsPartialUpdate
     * @request PATCH:/api/accounts/{id}
     * @secure
     */
    accountsPartialUpdate: (id: number, data: AccountUpdateDto, params: RequestParams = {}) =>
      this.request<AccountDetailsDto, void | ProblemDetails>({
        path: `/api/accounts/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name AccountsDelete
     * @request DELETE:/api/accounts/{id}
     * @secure
     */
    accountsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/accounts/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name AccountsCreate
     * @request POST:/api/accounts
     * @secure
     */
    accountsCreate: (data: AccountCreateDto, params: RequestParams = {}) =>
      this.request<AccountDetailsDto, void | ProblemDetails>({
        path: `/api/accounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name AccountsList
     * @request GET:/api/accounts
     * @secure
     */
    accountsList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AccountDetailsDto[], void | ProblemDetails>({
        path: `/api/accounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name AccountsExportList
     * @request GET:/api/accounts/export
     * @secure
     */
    accountsExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/accounts/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthLoginList
     * @request GET:/api/auth/login
     * @secure
     */
    authLoginList: (
      query?: {
        redirectUrl?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/auth/login`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthLogoutList
     * @request GET:/api/auth/logout
     * @secure
     */
    authLogoutList: (
      query?: {
        redirectUrl?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/auth/logout`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthProfileList
     * @request GET:/api/auth/profile
     * @secure
     */
    authProfileList: (params: RequestParams = {}) =>
      this.request<User, void | ProblemDetails>({
        path: `/api/auth/profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsList
     * @request GET:/api/comments
     * @secure
     */
    commentsList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CommentDetailsDto[], void | ProblemDetails>({
        path: `/api/comments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsCreate
     * @request POST:/api/comments
     * @secure
     */
    commentsCreate: (data: CommentCreateDto, params: RequestParams = {}) =>
      this.request<CommentDetailsDto, void | ProblemDetails>({
        path: `/api/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsDetail
     * @request GET:/api/comments/{id}
     * @secure
     */
    commentsDetail: (id: number, params: RequestParams = {}) =>
      this.request<CommentDetailsDto, void | ProblemDetails>({
        path: `/api/comments/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsPartialUpdate
     * @request PATCH:/api/comments/{id}
     * @secure
     */
    commentsPartialUpdate: (id: number, data: CommentUpdateDto, params: RequestParams = {}) =>
      this.request<CommentDetailsDto, void | ProblemDetails>({
        path: `/api/comments/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsDelete
     * @request DELETE:/api/comments/{id}
     * @secure
     */
    commentsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/comments/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsImportCreate
     * @request POST:/api/comments/import
     * @secure
     */
    commentsImportCreate: (data: CommentImportDto[], params: RequestParams = {}) =>
      this.request<ImportResult, void | ProblemDetails>({
        path: `/api/comments/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsExportList
     * @request GET:/api/comments/export
     * @secure
     */
    commentsExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/comments/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name ContactsDetail
     * @request GET:/api/contacts/{id}
     * @secure
     */
    contactsDetail: (id: number, params: RequestParams = {}) =>
      this.request<ContactDetailsDto, void | ProblemDetails>({
        path: `/api/contacts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name ContactsPartialUpdate
     * @request PATCH:/api/contacts/{id}
     * @secure
     */
    contactsPartialUpdate: (id: number, data: ContactUpdateDto, params: RequestParams = {}) =>
      this.request<ContactDetailsDto, void | ProblemDetails>({
        path: `/api/contacts/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name ContactsDelete
     * @request DELETE:/api/contacts/{id}
     * @secure
     */
    contactsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/contacts/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name ContactsList
     * @request GET:/api/contacts
     * @secure
     */
    contactsList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContactDetailsDto[], void | ProblemDetails>({
        path: `/api/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name ContactsCreate
     * @request POST:/api/contacts
     * @secure
     */
    contactsCreate: (data: ContactCreateDto, params: RequestParams = {}) =>
      this.request<ContactDetailsDto, void | ProblemDetails>({
        path: `/api/contacts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name ContactsImportCreate
     * @request POST:/api/contacts/import
     * @secure
     */
    contactsImportCreate: (data: ContactImportDto[], params: RequestParams = {}) =>
      this.request<ImportResult, void | ProblemDetails>({
        path: `/api/contacts/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name ContactsExportList
     * @request GET:/api/contacts/export
     * @secure
     */
    contactsExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/contacts/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentList
     * @request GET:/api/content
     * @secure
     */
    contentList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContentDetailsDto[], void | ProblemDetails>({
        path: `/api/content`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentCreate
     * @request POST:/api/content
     * @secure
     */
    contentCreate: (data: ContentCreateDto, params: RequestParams = {}) =>
      this.request<ContentDetailsDto, void | ProblemDetails>({
        path: `/api/content`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentDetail
     * @request GET:/api/content/{id}
     * @secure
     */
    contentDetail: (id: number, params: RequestParams = {}) =>
      this.request<ContentDetailsDto, void | ProblemDetails>({
        path: `/api/content/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentPartialUpdate
     * @request PATCH:/api/content/{id}
     * @secure
     */
    contentPartialUpdate: (id: number, data: ContentUpdateDto, params: RequestParams = {}) =>
      this.request<ContentDetailsDto, void | ProblemDetails>({
        path: `/api/content/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentDelete
     * @request DELETE:/api/content/{id}
     * @secure
     */
    contentDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/content/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentTagsList
     * @request GET:/api/content/tags
     * @secure
     */
    contentTagsList: (params: RequestParams = {}) =>
      this.request<string[], void | ProblemDetails>({
        path: `/api/content/tags`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentCategoriesList
     * @request GET:/api/content/categories
     * @secure
     */
    contentCategoriesList: (params: RequestParams = {}) =>
      this.request<string[], void | ProblemDetails>({
        path: `/api/content/categories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentImportCreate
     * @request POST:/api/content/import
     * @secure
     */
    contentImportCreate: (data: ContentImportDto[], params: RequestParams = {}) =>
      this.request<ImportResult, void | ProblemDetails>({
        path: `/api/content/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentExportList
     * @request GET:/api/content/export
     * @secure
     */
    contentExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/content/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Continents
     * @name ContinentsList
     * @request GET:/api/continents
     * @secure
     */
    continentsList: (params: RequestParams = {}) =>
      this.request<Record<string, string>, ProblemDetails>({
        path: `/api/continents`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Countries
     * @name CountriesList
     * @request GET:/api/countries
     * @secure
     */
    countriesList: (params: RequestParams = {}) =>
      this.request<Record<string, string>, ProblemDetails>({
        path: `/api/countries`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name DomainsVerifyDetail
     * @request GET:/api/domains/verify/{name}
     * @secure
     */
    domainsVerifyDetail: (name: string, params: RequestParams = {}) =>
      this.request<DomainDetailsDto, void | ProblemDetails>({
        path: `/api/domains/verify/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name DomainsImportCreate
     * @request POST:/api/domains/import
     * @secure
     */
    domainsImportCreate: (data: DomainImportDto[], params: RequestParams = {}) =>
      this.request<ImportResult, void | ProblemDetails>({
        path: `/api/domains/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name DomainsDetail
     * @request GET:/api/domains/{id}
     * @secure
     */
    domainsDetail: (id: number, params: RequestParams = {}) =>
      this.request<DomainDetailsDto, void | ProblemDetails>({
        path: `/api/domains/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name DomainsPartialUpdate
     * @request PATCH:/api/domains/{id}
     * @secure
     */
    domainsPartialUpdate: (id: number, data: DomainUpdateDto, params: RequestParams = {}) =>
      this.request<DomainDetailsDto, void | ProblemDetails>({
        path: `/api/domains/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name DomainsDelete
     * @request DELETE:/api/domains/{id}
     * @secure
     */
    domainsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/domains/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name DomainsCreate
     * @request POST:/api/domains
     * @secure
     */
    domainsCreate: (data: DomainCreateDto, params: RequestParams = {}) =>
      this.request<DomainDetailsDto, void | ProblemDetails>({
        path: `/api/domains`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name DomainsList
     * @request GET:/api/domains
     * @secure
     */
    domainsList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DomainDetailsDto[], void | ProblemDetails>({
        path: `/api/domains`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name DomainsExportList
     * @request GET:/api/domains/export
     * @secure
     */
    domainsExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/domains/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name EmailVerifyDetail
     * @request GET:/api/email/verify/{email}
     * @secure
     */
    emailVerifyDetail: (email: string, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/email/verify/${email}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailGroups
     * @name EmailGroupsDetail
     * @request GET:/api/email-groups/{id}
     * @secure
     */
    emailGroupsDetail: (id: number, params: RequestParams = {}) =>
      this.request<EmailGroupDetailsDto, void | ProblemDetails>({
        path: `/api/email-groups/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailGroups
     * @name EmailGroupsPartialUpdate
     * @request PATCH:/api/email-groups/{id}
     * @secure
     */
    emailGroupsPartialUpdate: (id: number, data: EmailGroupUpdateDto, params: RequestParams = {}) =>
      this.request<EmailGroupDetailsDto, void | ProblemDetails>({
        path: `/api/email-groups/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailGroups
     * @name EmailGroupsDelete
     * @request DELETE:/api/email-groups/{id}
     * @secure
     */
    emailGroupsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/email-groups/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailGroups
     * @name EmailGroupsCreate
     * @request POST:/api/email-groups
     * @secure
     */
    emailGroupsCreate: (data: EmailGroupCreateDto, params: RequestParams = {}) =>
      this.request<EmailGroupDetailsDto, void | ProblemDetails>({
        path: `/api/email-groups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailGroups
     * @name EmailGroupsList
     * @request GET:/api/email-groups
     * @secure
     */
    emailGroupsList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EmailGroupDetailsDto[], void | ProblemDetails>({
        path: `/api/email-groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailGroups
     * @name EmailGroupsExportList
     * @request GET:/api/email-groups/export
     * @secure
     */
    emailGroupsExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/email-groups/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailTemplates
     * @name EmailTemplatesDetail
     * @request GET:/api/email-templates/{id}
     * @secure
     */
    emailTemplatesDetail: (id: number, params: RequestParams = {}) =>
      this.request<EmailTemplateDetailsDto, void | ProblemDetails>({
        path: `/api/email-templates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailTemplates
     * @name EmailTemplatesPartialUpdate
     * @request PATCH:/api/email-templates/{id}
     * @secure
     */
    emailTemplatesPartialUpdate: (id: number, data: EmailTemplateUpdateDto, params: RequestParams = {}) =>
      this.request<EmailTemplateDetailsDto, void | ProblemDetails>({
        path: `/api/email-templates/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailTemplates
     * @name EmailTemplatesDelete
     * @request DELETE:/api/email-templates/{id}
     * @secure
     */
    emailTemplatesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/email-templates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailTemplates
     * @name EmailTemplatesCreate
     * @request POST:/api/email-templates
     * @secure
     */
    emailTemplatesCreate: (data: EmailTemplateCreateDto, params: RequestParams = {}) =>
      this.request<EmailTemplateDetailsDto, void | ProblemDetails>({
        path: `/api/email-templates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailTemplates
     * @name EmailTemplatesList
     * @request GET:/api/email-templates
     * @secure
     */
    emailTemplatesList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EmailTemplateDetailsDto[], void | ProblemDetails>({
        path: `/api/email-templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailTemplates
     * @name EmailTemplatesExportList
     * @request GET:/api/email-templates/export
     * @secure
     */
    emailTemplatesExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/email-templates/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Links
     * @name LinksCreate
     * @request POST:/api/links
     * @secure
     */
    linksCreate: (data: LinkCreateDto, params: RequestParams = {}) =>
      this.request<LinkDetailsDto, void | ProblemDetails>({
        path: `/api/links`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Links
     * @name LinksList
     * @request GET:/api/links
     * @secure
     */
    linksList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LinkDetailsDto[], void | ProblemDetails>({
        path: `/api/links`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Links
     * @name LinksDetail
     * @request GET:/api/links/{id}
     * @secure
     */
    linksDetail: (id: number, params: RequestParams = {}) =>
      this.request<LinkDetailsDto, void | ProblemDetails>({
        path: `/api/links/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Links
     * @name LinksPartialUpdate
     * @request PATCH:/api/links/{id}
     * @secure
     */
    linksPartialUpdate: (id: number, data: LinkUpdateDto, params: RequestParams = {}) =>
      this.request<LinkDetailsDto, void | ProblemDetails>({
        path: `/api/links/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Links
     * @name LinksDelete
     * @request DELETE:/api/links/{id}
     * @secure
     */
    linksDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/links/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Links
     * @name LinksExportList
     * @request GET:/api/links/export
     * @secure
     */
    linksExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/links/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Locks
     * @name LocksDetail
     * @request GET:/api/locks/{key}
     * @secure
     */
    locksDetail: (key: string, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/locks/${key}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Locks
     * @name LocksReleaseDetail
     * @request GET:/api/locks/{key}/release
     * @secure
     */
    locksReleaseDetail: (key: string, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/locks/${key}/release`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name LogsList
     * @request GET:/api/logs
     * @secure
     */
    logsList: (params: RequestParams = {}) =>
      this.request<LogRecord[], void | ProblemDetails>({
        path: `/api/logs`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name MediaCreate
     * @request POST:/api/media
     * @secure
     */
    mediaCreate: (
      data: {
        /** @format binary */
        Image: File;
        ScopeUid: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MediaDetailsDto, void | ProblemDetails>({
        path: `/api/media`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name MediaDetail
     * @request GET:/api/media/{scopeUid}/{fileName}
     * @secure
     */
    mediaDetail: (scopeUid: string, fileName: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/media/${scopeUid}/${fileName}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrderItems
     * @name OrderItemsCreate
     * @request POST:/api/order-items
     * @secure
     */
    orderItemsCreate: (data: OrderItemCreateDto, params: RequestParams = {}) =>
      this.request<OrderItemDetailsDto, void | ProblemDetails>({
        path: `/api/order-items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrderItems
     * @name OrderItemsList
     * @request GET:/api/order-items
     * @secure
     */
    orderItemsList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderItemDetailsDto[], void | ProblemDetails>({
        path: `/api/order-items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrderItems
     * @name OrderItemsPartialUpdate
     * @request PATCH:/api/order-items/{id}
     * @secure
     */
    orderItemsPartialUpdate: (id: number, data: OrderItemUpdateDto, params: RequestParams = {}) =>
      this.request<OrderItemDetailsDto, void | ProblemDetails>({
        path: `/api/order-items/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrderItems
     * @name OrderItemsDelete
     * @request DELETE:/api/order-items/{id}
     * @secure
     */
    orderItemsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/order-items/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrderItems
     * @name OrderItemsDetail
     * @request GET:/api/order-items/{id}
     * @secure
     */
    orderItemsDetail: (id: number, params: RequestParams = {}) =>
      this.request<OrderItemDetailsDto, void | ProblemDetails>({
        path: `/api/order-items/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrderItems
     * @name OrderItemsImportCreate
     * @request POST:/api/order-items/import
     * @secure
     */
    orderItemsImportCreate: (data: OrderItemImportDto[], params: RequestParams = {}) =>
      this.request<ImportResult, void | ProblemDetails>({
        path: `/api/order-items/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrderItems
     * @name OrderItemsExportList
     * @request GET:/api/order-items/export
     * @secure
     */
    orderItemsExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/order-items/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersImportCreate
     * @request POST:/api/orders/import
     * @secure
     */
    ordersImportCreate: (data: OrderImportDto[], params: RequestParams = {}) =>
      this.request<ImportResult, void | ProblemDetails>({
        path: `/api/orders/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersDetail
     * @request GET:/api/orders/{id}
     * @secure
     */
    ordersDetail: (id: number, params: RequestParams = {}) =>
      this.request<OrderDetailsDto, void | ProblemDetails>({
        path: `/api/orders/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersPartialUpdate
     * @request PATCH:/api/orders/{id}
     * @secure
     */
    ordersPartialUpdate: (id: number, data: OrderUpdateDto, params: RequestParams = {}) =>
      this.request<OrderDetailsDto, void | ProblemDetails>({
        path: `/api/orders/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersDelete
     * @request DELETE:/api/orders/{id}
     * @secure
     */
    ordersDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/orders/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersCreate
     * @request POST:/api/orders
     * @secure
     */
    ordersCreate: (data: OrderCreateDto, params: RequestParams = {}) =>
      this.request<OrderDetailsDto, void | ProblemDetails>({
        path: `/api/orders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersList
     * @request GET:/api/orders
     * @secure
     */
    ordersList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderDetailsDto[], void | ProblemDetails>({
        path: `/api/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersExportList
     * @request GET:/api/orders/export
     * @secure
     */
    ordersExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/orders/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Statistics
     * @name StatisticsCreate
     * @request POST:/api/statistics
     * @secure
     */
    statisticsCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/statistics`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasksList
     * @request GET:/api/tasks
     * @secure
     */
    tasksList: (params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/tasks`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasksDetail
     * @request GET:/api/tasks/{name}
     * @secure
     */
    tasksDetail: (name: string, params: RequestParams = {}) =>
      this.request<TaskDetailsDto, void | ProblemDetails>({
        path: `/api/tasks/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasksStartDetail
     * @request GET:/api/tasks/start/{name}
     * @secure
     */
    tasksStartDetail: (name: string, params: RequestParams = {}) =>
      this.request<TaskDetailsDto, void | ProblemDetails>({
        path: `/api/tasks/start/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasksStopDetail
     * @request GET:/api/tasks/stop/{name}
     * @secure
     */
    tasksStopDetail: (name: string, params: RequestParams = {}) =>
      this.request<TaskDetailsDto, void | ProblemDetails>({
        path: `/api/tasks/stop/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasksExecuteDetail
     * @request GET:/api/tasks/execute/{name}
     * @secure
     */
    tasksExecuteDetail: (name: string, params: RequestParams = {}) =>
      this.request<TaskExecutionDto, void | ProblemDetails>({
        path: `/api/tasks/execute/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unsubscribes
     * @name UnsubscribesImportCreate
     * @request POST:/api/unsubscribes/import
     * @secure
     */
    unsubscribesImportCreate: (data: UnsubscribeImportDto[], params: RequestParams = {}) =>
      this.request<ImportResult, void | ProblemDetails>({
        path: `/api/unsubscribes/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unsubscribes
     * @name UnsubscribesDetail
     * @request GET:/api/unsubscribes/{id}
     * @secure
     */
    unsubscribesDetail: (id: number, params: RequestParams = {}) =>
      this.request<UnsubscribeDetailsDto, void | ProblemDetails>({
        path: `/api/unsubscribes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unsubscribes
     * @name UnsubscribesPartialUpdate
     * @request PATCH:/api/unsubscribes/{id}
     * @secure
     */
    unsubscribesPartialUpdate: (id: number, data: UnsubscribeDto, params: RequestParams = {}) =>
      this.request<UnsubscribeDetailsDto, void | ProblemDetails>({
        path: `/api/unsubscribes/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unsubscribes
     * @name UnsubscribesDelete
     * @request DELETE:/api/unsubscribes/{id}
     * @secure
     */
    unsubscribesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/unsubscribes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unsubscribes
     * @name UnsubscribesCreate
     * @request POST:/api/unsubscribes
     * @secure
     */
    unsubscribesCreate: (data: UnsubscribeDto, params: RequestParams = {}) =>
      this.request<UnsubscribeDetailsDto, void | ProblemDetails>({
        path: `/api/unsubscribes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unsubscribes
     * @name UnsubscribesList
     * @request GET:/api/unsubscribes
     * @secure
     */
    unsubscribesList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UnsubscribeDetailsDto[], void | ProblemDetails>({
        path: `/api/unsubscribes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Unsubscribes
     * @name UnsubscribesExportList
     * @request GET:/api/unsubscribes/export
     * @secure
     */
    unsubscribesExportList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | ProblemDetails>({
        path: `/api/unsubscribes/export`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Version
     * @name VersionList
     * @request GET:/api/version
     * @secure
     */
    versionList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/version`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  go = {
    /**
     * No description
     *
     * @tags Links
     * @name GetGo
     * @request GET:/go/{uid}
     * @secure
     */
    getGo: (uid: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/go/${uid}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
