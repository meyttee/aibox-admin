import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { useQueryParams } from "@/hooks";

import {
  IGetUserTokenRequestPayload,
  IGetUserTokenResponsePayload,
  IUserToken,
} from "./interface";
import UserAccessTokenListService from "./user-token.service";

const userAccessTokenServices = new UserAccessTokenListService();

export const useGetAccessTokenList = () => {
  const allQueryParams = useQueryParams();

  let totalPages = 0;
  let totalItems = 0;

  const {
    data: user = [],
    isLoading,
    refetch,
    isFetching,
  } = useQuery<IGetUserTokenResponsePayload, Error, IUserToken[]>({
    queryKey: ["accessTokenList", allQueryParams],
    queryFn: async ({ queryKey }) => {
      const { page, ...params } = queryKey[1] as IGetUserTokenRequestPayload;
      const queryParams: IGetUserTokenRequestPayload = {
        page,
        page_size: 10,
        ...params,
      };
      const response = await userAccessTokenServices.getAccessTokenList(
        queryParams
      );
      return response.data.data;
    },
    select: (payload) => {
      totalPages = payload.page_count;
      totalItems = payload.total_count;
      return payload.user;
    },
    placeholderData: keepPreviousData,
  });

  return { user, totalItems, totalPages, isLoading, refetch, isFetching };
};
