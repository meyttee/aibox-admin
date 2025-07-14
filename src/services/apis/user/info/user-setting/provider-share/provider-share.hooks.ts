import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type {
  IProviderShareRequest,
  IUpdateShareRequestPayload,
} from "./interface";
import ProviderShareServices from "./provider-share.service";

const providerShareService = new ProviderShareServices();

export const useGetProviderShare = ({ id }: IProviderShareRequest) => {
  const { data: providerShareData, isPending } = useQuery({
    queryKey: ["provider-share", id],
    queryFn: async () => {
      const response = await providerShareService.getProviderShare({ id });
      return response.data.data;
    },
    enabled: !!id,
  });

  return { providerShareData, isPending };
};

export const useUpdateProviderShare = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      earnings_coefficient_api,
    }: IUpdateShareRequestPayload) => {
      return await providerShareService.updateProviderShare({
        id,
        earnings_coefficient_api,
      });
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["provider-share", variables.id],
      });
    },
  });
};
