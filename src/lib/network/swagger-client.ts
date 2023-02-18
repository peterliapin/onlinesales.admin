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

export interface AccountDetailsDto {
  /** @minLength 1 */
  name: string;
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
  source?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
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
}

export interface CommentCreateDto {
  authorName?: string | null;
  /** @format email */
  authorEmail?: string | null;
  /** @minLength 1 */
  content: string;
  /** @format int32 */
  postId: number;
  /** @format int32 */
  parentId?: number | null;
}

export interface CommentDetailsDto {
  authorName?: string | null;
  /** @format email */
  authorEmail?: string | null;
  /** @minLength 1 */
  content: string;
  /** @format int32 */
  postId: number;
  /** @format int32 */
  parentId?: number | null;
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
  authorName?: string | null;
  /** @format email */
  authorEmail?: string | null;
  /** @minLength 1 */
  content: string;
  /** @format int32 */
  postId?: number | null;
  postSlug?: string | null;
  /** @format int32 */
  parentId?: number | null;
  /** @minLength 1 */
  key: string;
  parentKey?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
}

export interface CommentUpdateDto {
  /** @minLength 1 */
  content: string;
}

export interface ContactCreateDto {
  lastName?: string | null;
  firstName?: string | null;
  companyName?: string | null;
  address1?: string | null;
  address2?: string | null;
  state?: string | null;
  zip?: string | null;
  location?: string | null;
  phone?: string | null;
  /** @format int32 */
  timezone?: number | null;
  language?: string | null;
  /**
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface ContactDetailsDto {
  lastName?: string | null;
  firstName?: string | null;
  companyName?: string | null;
  address1?: string | null;
  address2?: string | null;
  state?: string | null;
  zip?: string | null;
  location?: string | null;
  phone?: string | null;
  /** @format int32 */
  timezone?: number | null;
  language?: string | null;
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
}

export interface ContactImportDto {
  lastName?: string | null;
  firstName?: string | null;
  companyName?: string | null;
  address1?: string | null;
  address2?: string | null;
  state?: string | null;
  zip?: string | null;
  location?: string | null;
  phone?: string | null;
  /** @format int32 */
  timezone?: number | null;
  language?: string | null;
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /** @format int32 */
  id?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
  source?: string | null;
  /** @format int32 */
  accountId?: number | null;
  accountName?: string | null;
}

export interface ContactUpdateDto {
  lastName?: string | null;
  firstName?: string | null;
  companyName?: string | null;
  address1?: string | null;
  address2?: string | null;
  state?: string | null;
  zip?: string | null;
  location?: string | null;
  phone?: string | null;
  /** @format int32 */
  timezone?: number | null;
  language?: string | null;
  /** @format email */
  email?: string | null;
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
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
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

export interface LinkCreateDto {
  uid?: string | null;
  /** @minLength 1 */
  destination: string;
  /** @minLength 1 */
  name: string;
}

export interface LinkDetailsDto {
  uid?: string | null;
  /** @minLength 1 */
  destination: string;
  /** @minLength 1 */
  name: string;
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
  /** @format int32 */
  id?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
  contactEmail?: string | null;
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
  /** @format int32 */
  id?: number | null;
  /** @minLength 1 */
  orderRefNo: string;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
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

export interface PostCreateDto {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  description: string;
  /** @minLength 1 */
  content: string;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
  /** @minLength 1 */
  slug: string;
  /** @minLength 1 */
  template: string;
  /** @minLength 1 */
  author: string;
  /** @minLength 1 */
  language: string;
  categories?: string | null;
  tags?: string | null;
  allowComments?: boolean;
}

export interface PostDetailsDto {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  description: string;
  /** @minLength 1 */
  content: string;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
  /** @minLength 1 */
  slug: string;
  /** @minLength 1 */
  template: string;
  /** @minLength 1 */
  author: string;
  /** @minLength 1 */
  language: string;
  categories?: string | null;
  tags?: string | null;
  allowComments?: boolean;
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string | null;
}

export interface PostImportDto {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  description: string;
  /** @minLength 1 */
  content: string;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
  /** @minLength 1 */
  slug: string;
  /** @minLength 1 */
  template: string;
  /** @minLength 1 */
  author: string;
  /** @minLength 1 */
  language: string;
  categories?: string | null;
  tags?: string | null;
  allowComments?: boolean;
  /** @format int32 */
  id?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  createdByIp?: string | null;
  createdByUserAgent?: string | null;
  updatedByIp?: string | null;
  updatedByUserAgent?: string | null;
}

export interface PostUpdateDto {
  title?: string | null;
  description?: string | null;
  content?: string | null;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
  slug?: string | null;
  template?: string | null;
  author?: string | null;
  language?: string | null;
  categories?: string | null;
  tags?: string | null;
  allowComments?: boolean | null;
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
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
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
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string" ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
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

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
        body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
      }
    ).then(async (response) => {
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
 * @version 1.1.0.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Account
     * @name AccountImportCreate
     * @request POST:/api/account/import
     * @secure
     */
    accountImportCreate: (data: AccountImportDto[], params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/account/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountDetail
     * @request GET:/api/account/{id}
     * @secure
     */
    accountDetail: (id: number, params: RequestParams = {}) =>
      this.request<AccountDetailsDto, ProblemDetails>({
        path: `/api/account/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountPartialUpdate
     * @request PATCH:/api/account/{id}
     * @secure
     */
    accountPartialUpdate: (id: number, data: AccountUpdateDto, params: RequestParams = {}) =>
      this.request<AccountDetailsDto, ProblemDetails>({
        path: `/api/account/${id}`,
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
     * @tags Account
     * @name AccountDelete
     * @request DELETE:/api/account/{id}
     * @secure
     */
    accountDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/account/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountCreate
     * @request POST:/api/account
     * @secure
     */
    accountCreate: (data: AccountCreateDto, params: RequestParams = {}) =>
      this.request<AccountDetailsDto, ProblemDetails>({
        path: `/api/account`,
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
     * @tags Account
     * @name AccountList
     * @request GET:/api/account
     * @secure
     */
    accountList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AccountDetailsDto[], ProblemDetails>({
        path: `/api/account`,
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
     * @name CommentsList
     * @request GET:/api/comments
     * @secure
     */
    commentsList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {}
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
      this.request<void, void | ProblemDetails>({
        path: `/api/comments/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
      params: RequestParams = {}
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
      this.request<void, void | ProblemDetails>({
        path: `/api/contacts/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
      this.request<void, void | ProblemDetails>({
        path: `/api/domains/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
      params: RequestParams = {}
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
     * @tags Email
     * @name EmailVerifyDetail
     * @request GET:/api/email/verify/{email}
     * @secure
     */
    emailVerifyDetail: (email: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
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
      params: RequestParams = {}
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
    emailTemplatesPartialUpdate: (
      id: number,
      data: EmailTemplateUpdateDto,
      params: RequestParams = {}
    ) =>
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
      params: RequestParams = {}
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
     * @tags Images
     * @name ImagesCreate
     * @request POST:/api/images
     * @secure
     */
    imagesCreate: (
      data: {
        /** @format binary */
        Image: File;
        ScopeUid: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/images`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Images
     * @name ImagesDetail
     * @request GET:/api/images/{scopeUid}/{fileName}
     * @secure
     */
    imagesDetail: (scopeUid: string, fileName: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/images/${scopeUid}/${fileName}`,
        method: "GET",
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
      params: RequestParams = {}
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
      params: RequestParams = {}
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
      this.request<void, void | ProblemDetails>({
        path: `/api/order-items/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
      this.request<void, void | ProblemDetails>({
        path: `/api/orders/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
      params: RequestParams = {}
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
     * @tags Posts
     * @name PostsList
     * @request GET:/api/posts
     * @secure
     */
    postsList: (
      query?: {
        query?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PostDetailsDto[], void | ProblemDetails>({
        path: `/api/posts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name PostsCreate
     * @request POST:/api/posts
     * @secure
     */
    postsCreate: (data: PostCreateDto, params: RequestParams = {}) =>
      this.request<PostDetailsDto, void | ProblemDetails>({
        path: `/api/posts`,
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
     * @tags Posts
     * @name PostsDetail
     * @request GET:/api/posts/{id}
     * @secure
     */
    postsDetail: (id: number, params: RequestParams = {}) =>
      this.request<PostDetailsDto, void | ProblemDetails>({
        path: `/api/posts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name PostsPartialUpdate
     * @request PATCH:/api/posts/{id}
     * @secure
     */
    postsPartialUpdate: (id: number, data: PostUpdateDto, params: RequestParams = {}) =>
      this.request<PostDetailsDto, void | ProblemDetails>({
        path: `/api/posts/${id}`,
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
     * @tags Posts
     * @name PostsDelete
     * @request DELETE:/api/posts/{id}
     * @secure
     */
    postsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/posts/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name PostsImportCreate
     * @request POST:/api/posts/import
     * @secure
     */
    postsImportCreate: (data: PostImportDto[], params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/api/posts/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
