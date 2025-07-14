import "./globals.css";
import { ReactNode } from "react";

import { dehydrate } from "@tanstack/react-query";
import { createQueryClient, QueryProvider } from "@/provider";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const serverQueryClient = createQueryClient();
  const dehydratedState = dehydrate(serverQueryClient);

  return (
    <html lang="fa" dir="rtl">
      <body>
        <QueryProvider dehydratedState={dehydratedState}>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
