import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import FileUploader from "./FileUploader";
import Search from "./Search";
import { Button } from "./ui/button";
import Image from "next/image";

export default async function Header() {
	const user = await currentUser();
	
	if (!user) {
		return null;
	}

	return (
		<header className="w-full flex items-center justify-between px-6 py-4 bg-[#181A20] border-b border-[#23262F] sticky top-0 z-20">
			<div className="flex-1 max-w-md">
				<Search />
			</div>
			<div className="flex items-center gap-4">
				<FileUploader 
					ownerId={user.id}
					accountId={user.id}
				/>
			</div>
		</header>
	);
}
