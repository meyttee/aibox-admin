import { AxiosResponse } from "axios";

import { AbstractAPI, INetworkResponse } from "@/services";

import { IGetNewsTags, IGetNewsTagsRequest } from "./interface";

export default class NewsTagsService extends AbstractAPI {
  constructor() {
    super("v1/admin/news_tags");
  }

  public async getNewsTags(
    params: IGetNewsTagsRequest
  ): Promise<AxiosResponse<INetworkResponse<IGetNewsTags>>> {
    return this.http.request({
      method: "GET",
      url: `${this.url}/`,
      params,
    });
  }
}
