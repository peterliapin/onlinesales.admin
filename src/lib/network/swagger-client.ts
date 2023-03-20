/* eslint-disable */
/* tslint:disable */


import {Api, RequestParams} from "./swagger-client.generated";

export * from "./swagger-client.generated";

export class ApiExtended<SecurityDataType extends unknown> extends Api<SecurityDataType> {
  extendedApi = {
    commentsList: (
      query?: {
        "filter[where][contentId]": number,
        "filter[where][approved]": string,
      },
      params: RequestParams = {},
    ) => {
      return this.api.commentsList(query as any, params);
    }
  }
}

