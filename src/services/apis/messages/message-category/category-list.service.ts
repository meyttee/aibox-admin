import { AxiosResponse } from "axios";

import { AbstractAPI, INetworkResponse } from "@/services";

import { ICategoryData } from "./interface";

export default class CategoryService extends AbstractAPI {
  constructor() {
    super("v1/admin/mass_notification/message/category");
  }

  public async getCategories(): Promise<
    AxiosResponse<INetworkResponse<ICategoryData>>
  > {
    return this.http.request<INetworkResponse<ICategoryData>>({
      method: "GET",
      url: `${this.url}/`,
    });
  }
}
