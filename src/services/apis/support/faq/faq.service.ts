import { AxiosResponse } from "axios";

import { AbstractAPI, INetworkResponse } from "@/services";

import {
  IGetFaqCategoryListRequestPayload,
  IGetFaqCategoryListResponsePayload,
} from "./interface";

export default class FaqCategoryService extends AbstractAPI {
  constructor() {
    super("v1/admin/faq_category");
  }

  public async getFaqCategoryList(
    params: IGetFaqCategoryListRequestPayload
  ): Promise<
    AxiosResponse<INetworkResponse<IGetFaqCategoryListResponsePayload>>
  > {
    return this.http.request({
      method: "GET",
      url: `${this.url}/`,
      params,
    });
  }
}
