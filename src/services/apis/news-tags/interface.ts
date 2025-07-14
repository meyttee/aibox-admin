import { IPaginationMeta } from "@/services";

export interface INewsTags {
  id: string;
  name: string;
}

export interface IGetNewsTagsRequest {
  page_size: number;
}

export interface IGetNewsTags extends IPaginationMeta {
  results: INewsTags[];
}
