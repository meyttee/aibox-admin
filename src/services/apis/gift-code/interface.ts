import { IPaginationMeta } from "@/services";

export interface GiftCode {
  id: string;
  code: string;
  expired_time: string;
  amount: number;
  count_user: number;
  allowed_count_use: number;
  remain_count_use: number;
}

export interface GetGiftCodesParams {
  code: string;
  expired_time__lte: string;
  expired_time__gte: string;
  amount__lte: string;
  amount__gte: string;
  count_user__lte: string;
  count_user__gte: string;
  allowed_count_use__lte: string;
  allowed_count_use__gte: string;
  remain_count_use__lte: string;
  remain_count_use__gte: string;
  page: string;
  page_size: number;
  search: string;
  ordering: string;
}

export interface IGetGiftCodesReponse extends IPaginationMeta {
  data: GiftCode[];
}

export interface NewGiftCode {
  code: string;
  expired_time: string;
  amount: number;
  allowed_count_use?: number;
}

export interface UpdateGiftCode extends NewGiftCode {
  id: string;
}
