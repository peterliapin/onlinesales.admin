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
  /** @minLength 1 */
  name: string;
  state?: string | null;
  continentCode?: string | null;
  countryCode?: string | null;
  cityName?: string | null;
  siteUrl?: string | null;
  employeesRange?: string | null;
  /** @format double */
  revenue?: number | null;
  tags?: string[] | null;
  socialMedia?: Record<string, string>;
  source?: string | null;
  data?: string | null;
}

export interface AccountDetailsDto {
  /** @minLength 1 */
  name: string;
  state?: string | null;
  continentCode?: string | null;
  countryCode?: string | null;
  cityName?: string | null;
  siteUrl?: string | null;
  employeesRange?: string | null;
  /** @format double */
  revenue?: number | null;
  tags?: string[] | null;
  socialMedia?: Record<string, string>;
  source?: string | null;
  data?: string | null;
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
}

export interface AccountImportDto {
  /** @format int32 */
  id?: number | null;
  source?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
  name?: string | null;
  city?: string | null;
  stateCode?: string | null;
  countryCode?: string | null;
  siteUrl?: string | null;
  employeesRange?: string | null;
  /** @format double */
  revenue?: number | null;
  tags?: string[] | null;
  socialMedia?: Record<string, string>;
  data?: string | null;
}

export interface AccountUpdateDto {
  name?: string | null;
  city?: string | null;
  stateCode?: string | null;
  countryCode?: string | null;
  employeesRange?: string | null;
  /** @format double */
  revenue?: number | null;
  tags?: string[] | null;
  socialMedia?: Record<string, string>;
  source?: string | null;
  data?: string | null;
}

export interface CommentCreateDto {
  authorName?: string | null;
  /** @format email */
  authorEmail?: string | null;
  /** @minLength 1 */
  body: string;
  /** @format int32 */
  contentId: number;
  /** @format int32 */
  parentId?: number | null;
  source?: string | null;
}

export interface CommentDetailsDto {
  authorName?: string | null;
  /** @format email */
  authorEmail?: string | null;
  /** @minLength 1 */
  body: string;
  /** @format int32 */
  contentId: number;
  /** @format int32 */
  parentId?: number | null;
  source?: string | null;
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
}

export interface CommentImportDto {
  /** @format int32 */
  id?: number | null;
  source?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
  authorName?: string | null;
  /** @format email */
  authorEmail?: string | null;
  /** @minLength 1 */
  body: string;
  /** @format int32 */
  contentId?: number | null;
  contentSlug?: string | null;
  /** @format int32 */
  parentId?: number | null;
  key?: string | null;
  parentKey?: string | null;
}

export interface CommentUpdateDto {
  /** @minLength 1 */
  body: string;
}

export interface ContactCreateDto {
  lastName?: string | null;
  firstName?: string | null;
  continentCode?: Continent;
  countryCode?: Country;
  cityName?: string | null;
  address1?: string | null;
  address2?: string | null;
  state?: string | null;
  zip?: string | null;
  phone?: string | null;
  /** @format int32 */
  timezone?: number | null;
  language?: string | null;
  /** @format int32 */
  unsubscribeId?: number | null;
  source?: string | null;
  /**
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface ContactDetailsDto {
  lastName?: string | null;
  firstName?: string | null;
  continentCode?: Continent;
  countryCode?: Country;
  cityName?: string | null;
  address1?: string | null;
  address2?: string | null;
  state?: string | null;
  zip?: string | null;
  phone?: string | null;
  /** @format int32 */
  timezone?: number | null;
  language?: string | null;
  /** @format int32 */
  unsubscribeId?: number | null;
  source?: string | null;
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /** @format int32 */
  id?: number;
  avatarUrl?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format int32 */
  domainId?: number;
}

export interface ContactImportDto {
  /** @format int32 */
  id?: number | null;
  source?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
  /** @format email */
  email?: string | null;
  lastName?: string | null;
  firstName?: string | null;
  continentCode?: Continent;
  countryCode?: Country;
  cityName?: string | null;
  address1?: string | null;
  address2?: string | null;
  state?: string | null;
  zip?: string | null;
  phone?: string | null;
  /** @format int32 */
  timezone?: number | null;
  language?: string | null;
  /** @format int32 */
  unsubscribeId?: number | null;
  /** @format int32 */
  accountId?: number | null;
  accountName?: string | null;
  /** @format int32 */
  domainId?: number | null;
}

export interface ContactUpdateDto {
  lastName?: string | null;
  firstName?: string | null;
  continentCode?: Continent;
  countryCode?: Country;
  cityName?: string | null;
  address1?: string | null;
  address2?: string | null;
  state?: string | null;
  zip?: string | null;
  phone?: string | null;
  /** @format int32 */
  timezone?: number | null;
  language?: string | null;
  /** @format int32 */
  unsubscribeId?: number | null;
  source?: string | null;
  /** @format email */
  email?: string | null;
}

export interface ContentCreateDto {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  description: string;
  /** @minLength 1 */
  body: string;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
  /** @minLength 1 */
  slug: string;
  /** @minLength 1 */
  type: string;
  /** @minLength 1 */
  author: string;
  /** @minLength 1 */
  language: string;
  categories?: string[] | null;
  tags?: string[] | null;
  allowComments?: boolean;
  source?: string | null;
}

export interface ContentDetailsDto {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  description: string;
  /** @minLength 1 */
  body: string;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
  /** @minLength 1 */
  slug: string;
  /** @minLength 1 */
  type: string;
  /** @minLength 1 */
  author: string;
  /** @minLength 1 */
  language: string;
  categories?: string[] | null;
  tags?: string[] | null;
  allowComments?: boolean;
  source?: string | null;
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
}

export interface ContentImportDto {
  /** @format int32 */
  id?: number | null;
  source?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
  title?: string | null;
  description?: string | null;
  body?: string | null;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
  slug?: string | null;
  type?: string | null;
  author?: string | null;
  language?: string | null;
  categories?: string | null;
  tags?: string | null;
  allowComments?: boolean | null;
}

export interface ContentUpdateDto {
  title?: string | null;
  description?: string | null;
  body?: string | null;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
  slug?: string | null;
  type?: string | null;
  author?: string | null;
  language?: string | null;
  categories?: string[] | null;
  tags?: string[] | null;
  allowComments?: boolean | null;
  source?: string | null;
}

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
  domainName?: string | null;
  recordClass?: string | null;
  recordType?: string | null;
  /** @format int32 */
  timeToLive?: number;
  value?: string | null;
}

export interface DomainCreateDto {
  /** @minLength 1 */
  name: string;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  httpCheck?: boolean | null;
  free?: boolean | null;
  disposable?: boolean | null;
  catchAll?: boolean | null;
  dnsRecords?: DnsRecord[] | null;
  dnsCheck?: boolean | null;
  source?: string | null;
}

export interface DomainDetailsDto {
  /** @minLength 1 */
  name: string;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  httpCheck?: boolean | null;
  free?: boolean | null;
  disposable?: boolean | null;
  catchAll?: boolean | null;
  dnsRecords?: DnsRecord[] | null;
  dnsCheck?: boolean | null;
  source?: string | null;
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
}

export interface DomainImportDto {
  /** @format int32 */
  id?: number | null;
  source?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @minLength 1 */
  name: string;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  httpCheck?: boolean | null;
  free?: boolean | null;
  disposable?: boolean | null;
  catchAll?: boolean | null;
  dnsRecords?: DnsRecord[] | null;
  dnsCheck?: boolean | null;
}

export interface DomainUpdateDto {
  name?: string | null;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  httpCheck?: boolean | null;
  free?: boolean | null;
  disposable?: boolean | null;
  catchAll?: boolean | null;
  dnsRecords?: DnsRecord[] | null;
  dnsCheck?: boolean | null;
}

export interface EmailGroupCreateDto {
  /** @minLength 1 */
  name: string;
}

export interface EmailGroupDetailsDto {
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
}

export interface EmailGroupUpdateDto {
  name?: string | null;
}

export interface EmailTemplateCreateDto {
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  subject: string;
  /** @minLength 1 */
  bodyTemplate: string;
  /**
   * @format email
   * @minLength 1
   */
  fromEmail: string;
  /** @minLength 1 */
  fromName: string;
  /** @minLength 1 */
  language: string;
  /** @format int32 */
  groupId: number;
}

export interface EmailTemplateDetailsDto {
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  subject: string;
  /** @minLength 1 */
  bodyTemplate: string;
  /**
   * @format email
   * @minLength 1
   */
  fromEmail: string;
  /** @minLength 1 */
  fromName: string;
  /** @minLength 1 */
  language: string;
  /** @format int32 */
  groupId: number;
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
}

export interface EmailTemplateUpdateDto {
  name?: string | null;
  subject?: string | null;
  bodyTemplate?: string | null;
  /** @format email */
  fromEmail?: string | null;
  fromName?: string | null;
  /** @format int32 */
  groupId?: number | null;
}

export interface ImportError {
  /** @format int32 */
  row?: number;
  message?: string | null;
}

export interface ImportResult {
  /** @format int32 */
  added?: number;
  /** @format int32 */
  updated?: number;
  /** @format int32 */
  failed?: number;
  /** @format int32 */
  skipped?: number;
  errors?: ImportError[] | null;
}

export interface LinkCreateDto {
  uid?: string | null;
  /** @minLength 1 */
  destination: string;
  /** @minLength 1 */
  name: string;
  source?: string | null;
}

export interface LinkDetailsDto {
  uid?: string | null;
  /** @minLength 1 */
  destination: string;
  /** @minLength 1 */
  name: string;
  source?: string | null;
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
}

export interface LinkUpdateDto {
  uid?: string | null;
  destination?: string | null;
  name?: string | null;
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
  /** @format date-time */
  dateTime?: string;
  logLevel?: LogLevel;
  message?: string | null;
}

export interface MediaDetailsDto {
  location?: string | null;
}

export interface MessageEventDto {
  email?: string | null;
  processed?: string | null;
  sendGridMessageId?: string | null;
  event?: string | null;
  type?: string | null;
  reason?: string | null;
  originatingIp?: string | null;
}

export interface OrderCreateDto {
  /** @format int32 */
  contactId: number;
  /** @minLength 1 */
  refNo: string;
  orderNumber?: string | null;
  affiliateName?: string | null;
  /** @format double */
  exchangeRate: number;
  /** @minLength 1 */
  currency: string;
  testOrder?: boolean;
  data?: string | null;
  source?: string | null;
}

export interface OrderDetailsDto {
  /** @format int32 */
  contactId: number;
  /** @minLength 1 */
  refNo: string;
  orderNumber?: string | null;
  affiliateName?: string | null;
  /** @format double */
  exchangeRate: number;
  /** @minLength 1 */
  currency: string;
  testOrder?: boolean;
  data?: string | null;
  source?: string | null;
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format int32 */
  quantity?: number;
  /** @format double */
  total?: number;
}

export interface OrderImportDto {
  /** @format int32 */
  id?: number | null;
  source?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
  refNo?: string | null;
  orderNumber?: string | null;
  affiliateName?: string | null;
  /** @format double */
  exchangeRate?: number | null;
  /** @minLength 1 */
  currency: string;
  /** @format int32 */
  contactId?: number | null;
  contactEmail?: string | null;
  testOrder?: boolean | null;
  data?: string | null;
}

export interface OrderItemCreateDto {
  /** @format int32 */
  orderId: number;
  /** @minLength 1 */
  productName: string;
  /** @minLength 1 */
  licenseCode: string;
  /** @format double */
  unitPrice: number;
  /** @minLength 1 */
  currency: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  quantity: number;
  source?: string | null;
}

export interface OrderItemDetailsDto {
  /** @format int32 */
  orderId: number;
  /** @minLength 1 */
  productName: string;
  /** @minLength 1 */
  licenseCode: string;
  /** @format double */
  unitPrice: number;
  /** @minLength 1 */
  currency: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  quantity: number;
  source?: string | null;
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format double */
  currencyTotal?: number;
  /** @format double */
  total?: number;
}

export interface OrderItemImportDto {
  /** @format int32 */
  id?: number | null;
  source?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
  /** @format int32 */
  orderId?: number | null;
  orderRefNo?: string | null;
  productName?: string | null;
  licenseCode?: string | null;
  /** @format double */
  unitPrice?: number | null;
  currency?: string | null;
  /** @format int32 */
  quantity?: number | null;
}

export interface OrderItemUpdateDto {
  productName?: string | null;
  licenseCode?: string | null;
  /** @format double */
  unitPrice?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  quantity?: number | null;
  data?: string | null;
}

export interface OrderUpdateDto {
  /** @minLength 1 */
  refNo: string;
  affiliateName?: string | null;
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

export interface SmsDetailsDto {
  /** @minLength 1 */
  recipient: string;
  /** @minLength 1 */
  message: string;
}

export interface TaskDetailsDto {
  name?: string | null;
  cronSchedule?: string | null;
  /** @format int32 */
  retryCount?: number;
  /** @format int32 */
  retryInterval?: number;
  isRunning?: boolean;
}

export interface TaskExecutionDto {
  name?: string | null;
  completed?: boolean;
}

export interface Unsubscribe {
  /** @format int32 */
  id?: number;
  source?: string | null;
  /** @format date-time */
  createdAt: string;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  reason?: string | null;
  /** @format int32 */
  contactId?: number | null;
}

export interface User {
  name?: string | null;
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
 * @version 1.2.1.0
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
     * @tags Messages
     * @name MessagesSmsCreate
     * @request POST:/api/messages/sms
     * @secure
     */
    messagesSmsCreate: (data: SmsDetailsDto, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/messages/sms`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
     * @tags Sendgrid
     * @name SendgridImportCreate
     * @request POST:/api/sendgrid/import
     * @secure
     */
    sendgridImportCreate: (data: MessageEventDto[], params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/sendgrid/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sendgrid
     * @name SendgridWebhookCreate
     * @request POST:/api/sendgrid/webhook
     * @secure
     */
    sendgridWebhookCreate: (params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/sendgrid/webhook`,
        method: "POST",
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
     * @name UnsubscribesList
     * @request GET:/api/unsubscribes
     * @secure
     */
    unsubscribesList: (params: RequestParams = {}) =>
      this.request<Unsubscribe[], void | ProblemDetails>({
        path: `/api/unsubscribes`,
        method: "GET",
        secure: true,
        format: "json",
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
