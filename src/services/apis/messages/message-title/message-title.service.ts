import { AxiosResponse } from "axios";

import { AbstractAPI, INetworkResponse } from "@/services";

import { ITitleData } from "./interface";

export default class MessageTitleService extends AbstractAPI {
  constructor() {
    super("v1/admin/mass_notification/message/title");
  }

  public async getMessageTitle(): Promise<
    AxiosResponse<INetworkResponse<ITitleData>>
  > {
    return this.http.request<INetworkResponse<ITitleData>>({
      method: "GET",
      url: `${this.url}/`,
    });
  }
}
