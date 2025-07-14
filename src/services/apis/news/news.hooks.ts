import { useRouter } from "next/navigation";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "@/components/ui";
import { NEWS_ROUTES } from "@/routes";
import { useQueryParams } from "@/hooks";

import {
  INews,
  IGetNewsListResponse,
  IGetNewsListRequest,
  IAddNewsRequestPayload,
} from "./interface";
import NewsService from "./news.service";

const newsService = new NewsService();

export const useGetNewsList = () => {
  const allQueryParams = useQueryParams();

  let totalPages = 0;
  let totalItems = 0;

  const {
    data: news = [],
    isLoading,
    refetch,
  } = useQuery<IGetNewsListResponse, Error, INews[]>({
    queryKey: ["newsList", allQueryParams],
    queryFn: async ({ queryKey }) => {
      const { page, ...params } = queryKey[1] as IGetNewsListRequest;
      const queryParams: IGetNewsListRequest = {
        page: page,
        page_size: 10,
        ...params,
      };
      const resp = await newsService.getNewsList(queryParams);
      return resp.data.data;
    },
    select: (payload) => {
      totalPages = payload.page_count;
      totalItems = payload.total_count;
      return payload.results;
    },
    placeholderData: keepPreviousData,
  });

  return { news, totalItems, totalPages, isLoading, refetch };
};

export const useGetNews = (id: string) =>
  useQuery({
    queryKey: ["news", id],
    queryFn: async () => {
      const rep = await newsService.getNewsById(id);
      return rep.data.data;
    },
  });

export const useCreateNews = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation<IGetNewsListResponse, Error, IAddNewsRequestPayload>({
    mutationFn: (newUserPayload: IAddNewsRequestPayload) =>
      newsService.addNews(newUserPayload).then((res) => res.data.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsList"] });
      toast.success("خبر جدید با موفقیت ایجاد شد.");
      router.push(NEWS_ROUTES.LIST);
    },
  });
};

export const usePutNewsById = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["putNewsById"],
    mutationFn: (data: IAddNewsRequestPayload) =>
      newsService.updateNews({ ...data, id: id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });
};

export const useDeleteNews = () =>
  useMutation({
    mutationFn: (id: number) => newsService.deleteNews(id),
    onSuccess: () => {
      toast.success("خبر مورد نظر با موفقیت حذف شد.");
    },
    mutationKey: [`deleteNews`],
  });
