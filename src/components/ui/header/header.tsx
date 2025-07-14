"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";

import { routeNames } from "@/routes";
import { AiBoxIcon, MenuIcon, ProfileBox, useSidebar } from "@/components";

const Header: FC = () => {
  const pathName = usePathname();
  const title = routeNames[pathName] || "";
  const { toggleSidebar } = useSidebar();

  const onMenuHandler = () => {
    toggleSidebar();
  };

  return (
    <div className="fixed z-20 bg-white w-full h-16 flex justify-between items-center xl:px-6 xl:py-3 md:px-4 md:py-2 py-4 sm:px-8 px-4 shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.20),0px_4px_5px_0px_rgba(0,_0,_0,_0.14),0px_1px_10px_0px_rgba(0,_0,_0,_0.12)]">
      <div className="flex items-center order-1 gap-6 sm:order-2">
        <AiBoxIcon className="w-8 h-8 md:w-12 md:h-12" />
        <p className="hidden md:block">{title}</p>
      </div>
      <div className="flex gap-5 sm:order-1 md:hidden" onClick={onMenuHandler}>
        <MenuIcon />
        <p className="block md:hidden">{title}</p>
      </div>
      <div className="order-3">
        <ProfileBox
          username="userName"
          items={[
            {
              label: "پروفایل",
              href: "/",
            },
            {
              label: "خروج از حساب کاربری",
              href: "/dashboard",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Header;
