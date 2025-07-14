import { keepPreviousData, useQuery } from "@tanstack/react-query";

import {
  IGetFaqCategoryListRequestPayload,
  IGetFaqCategoryListResponsePayload,
} from "./interface";
import FaqCategoryService from "./faq.service";

const faqCategoryService = new FaqCategoryService();

export const useGetFaqCategoryList = (
  params: Partial<IGetFaqCategoryListRequestPayload> = {}
) => {
  const query = useQuery<IGetFaqCategoryListResponsePayload, Error>({
    queryKey: ["faqCategoryList", params],
    queryFn: () =>
      faqCategoryService.getFaqCategoryList(params).then((res) => {
        const topLevelData = res.data;
        return topLevelData.data as IGetFaqCategoryListResponsePayload;
      }),
    placeholderData: keepPreviousData,
  });

  return {
    categories: query.data?.results ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isFetching: query.isFetching,
    refetch: query.refetch,
  };
};
