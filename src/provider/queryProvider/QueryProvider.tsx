"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { FC, PropsWithChildren, useMemo } from "react";
import { QueryClientProvider, hydrate } from "@tanstack/react-query";

import { ToastContainer } from "@/components";
import { createQueryClient } from "@/provider/queryProvider/queryClient";

import ZodErrorsSetup from "../zod-provider";

export interface QueryProviderProps {
  dehydratedState: unknown;
}

const QueryProvider: FC<PropsWithChildren<QueryProviderProps>> = ({
  children,
  dehydratedState,
}) => {
  const queryClient = useMemo(() => createQueryClient(), []);
  hydrate(queryClient, dehydratedState);

  return (
    <QueryClientProvider client={queryClient}>
      <ZodErrorsSetup />
      <ToastContainer />
      <NuqsAdapter>{children} </NuqsAdapter>
    </QueryClientProvider>
  );
};
export default QueryProvider;
