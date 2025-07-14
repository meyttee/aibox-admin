"use client";

import { sidebarData } from "@/constants";
import { AIBSidebar, Header, SidebarProvider } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex overflow-hidden">
      <SidebarProvider>
        <Header />
        <AIBSidebar sidebarData={sidebarData} />
      </SidebarProvider>
      <div className="w-full py-[84px] 2xl:py-[88px] overflow-auto h-screen">
        {children}
      </div>
    </div>
  );
}
