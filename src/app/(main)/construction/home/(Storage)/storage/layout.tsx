import React from "react";
import SidebarStorage from "@/components/Storage/SidebarStorage/SidebarStorage";
import HeaderStorage from "@/components/Storage/HeaderStorage/HeaderStorage";
import MobileNagation from "@/components/Storage/Mobile/mobileNavigation";

const StorageLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <main className="flex h-screen">
      <SidebarStorage />
      <section className="flex h-full flex-1 flex-col">
        <MobileNagation /> <HeaderStorage />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default StorageLayout;
