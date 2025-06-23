"use client";

import Image from "next/image";
import Link from "next/link";
import { navItems, avatarPlaceholderUrl } from "../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SidebarStorage: React.FC = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src="/assets/icons/wardrobe-svgrepo-com.svg"
          alt="Logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />

        <Image
          src="/assets/icons/bedside-table-svgrepo-com.svg"
          alt="Logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link href={url} key={name} className="lg:w-full">
              <li
                className={cn(
                  "flex flex-row items-center gap-2 sidebar-nav-item",
                  pathname === url && "shad-active"
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Image
				src="/assets/images/files-2.png"
				alt="logo"
				width={506}
				height={418}
				className="w-full h-end hidden lg:block"
			/>
      {/* 
			<div
				className="
			sidebar-user-info"
			>
				<Image
					src={avatarPlaceholderUrl}
					alt="Avatar"
					width={44}
					height={44}
					className="sidebar-user-avatar"
				/>
				<div className="hidden lg:block">
					<p className="subtitle-2 capitalize">{fullName}</p>
					<p className="caption">{email}</p>
				</div>
			</div> */}
    </aside>
  );
};

export default SidebarStorage;
