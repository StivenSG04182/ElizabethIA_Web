"use client";

import { navItems } from "./constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({
	fullName,
	email,
	avatar,
}: {
	fullName: string;
	email: string;
	avatar: string;
}) {
	const pathname = usePathname();
	return (
		<aside className="sidebar flex flex-col justify-between h-auto min-h-full w-64 bg-[#181A20] border-r border-[#23262F] p-4">
			<div>
				<Link href="/" className="flex items-center gap-2 mb-8">
					<Image
						src="/assets/icons/logo-full-brand.svg"
						alt="logo"
						width={160}
						height={50}
						className="h-auto hidden lg:block"
					/>
					<Image
						src="/assets/icons/logo-brand.svg"
						alt="logo"
						width={52}
						height={52}
						className="lg:hidden"
					/>
				</Link>
				<nav className="sidebar-nav">
					<ul className="flex flex-col gap-2">
						{navItems.map(({ url, name, icon }) => (
							<Link href={url} key={name} className="w-full">
								<li
									className={cn(
										"sidebar-nav-item flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer",
										pathname === url
											? "bg-[#23262F] text-[#F47174]"
											: "hover:bg-[#23262F] text-white/80"
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
									<p className="font-medium text-base hidden lg:block">{name}</p>
								</li>
							</Link>
						))}
					</ul>
				</nav>
			</div>
			<div className="mt-8">
				<Image
					src="/assets/images/files-2.png"
					alt="logo"
					width={506}
					height={418}
					className="w-full rounded-lg mb-4 hidden lg:block"
				/>
				<div className="flex items-center gap-3 p-3 bg-[#23262F] rounded-lg">
					<Image
						src={avatar}
						alt="Avatar"
						width={44}
						height={44}
						className="sidebar-user-avatar rounded-full border border-[#F47174]"
					/>
					<div className="flex flex-col">
						<p className="subtitle-2 capitalize text-white font-semibold">{fullName}</p>
						<p className="caption text-xs text-white/60">{email}</p>
					</div>
				</div>
			</div>
		</aside>
	);
}
