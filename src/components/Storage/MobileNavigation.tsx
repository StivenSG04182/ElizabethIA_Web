"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { navItems } from "@/components/Storage/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";
import { SignOutButton } from "@clerk/nextjs";

interface MobileNavigationProps {
	ownerId: string;
	accountId: string;
	fullName: string;
	avatar: string;
	email: string;
}

export default function MobileNavigation({
	ownerId,
	accountId,
	fullName,
	avatar,
	email,
}: MobileNavigationProps) {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	return (
		<header className="mobile-header w-full flex items-center justify-between px-4 py-3 bg-[#181A20] border-b border-[#23262F] lg:hidden">
			<div className="flex items-center gap-2">
				<Image
					src="/assets/icons/logo-brand.svg"
					alt="Logo"
					width={36}
					height={36}
					className="h-auto"
				/>
				<span className="text-lg font-bold text-[#F47174]">StoreIt</span>
			</div>

			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<Image
						src="/assets/icons/menu.svg"
						alt="menu"
						width={30}
						height={30}
					/>
				</SheetTrigger>
				<SheetContent className="shad-sheet h-screen px-3 bg-[#181A20] border-l border-[#23262F]">
					<SheetTitle>
						<div className="header-user flex items-center gap-3 mb-4">
							<Image
								src={avatar}
								alt="Avatar"
								width={44}
								height={44}
								className="header-user-avatar rounded-full border border-[#F47174]"
							/>
							<div>
								<p className="subtitle-2 capitalize text-white font-semibold">{fullName}</p>
								<p className="caption text-xs text-white/60">{email}</p>
							</div>
						</div>
						<Separator className="mb-4 bg-light-200/20" />
					</SheetTitle>
					<SheetDescription>
						<nav className="mobile-nav mb-6">
							<ul className="mobile-nav-list flex flex-col gap-2">
								{navItems.map(({ url, name, icon }) => (
									<Link href={url} key={name} className="w-full">
										<li
											className={cn(
												"mobile-nav-item flex items-center gap-3 px-3 py-2 rounded-md transition-colors cursor-pointer",
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
												<p className="font-medium text-base">{name}</p>
										</li>
									</Link>
								))}
							</ul>
						</nav>
						<Separator className="my-5 bg-light-200/20" />
						<div className="flex flex-col justify-between gap-5 pb-5">
							<FileUploader 
								ownerId={ownerId}
								accountId={accountId}
							/>
							<SignOutButton>
								<Button
									type="button"
									className="mobile-sign-out-button flex items-center gap-2 bg-[#23262F] hover:bg-[#F47174] text-white px-4 py-2 rounded-md transition-colors"
								>
									<Image
										src="/assets/icons/logout.svg"
										alt="logo"
										width={24}
										height={24}
									/>
									<span>Salir</span>
								</Button>
							</SignOutButton>
						</div>
					</SheetDescription>
				</SheetContent>
			</Sheet>
		</header>
	);
}
