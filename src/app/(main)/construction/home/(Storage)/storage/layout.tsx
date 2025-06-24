import Header from "@/components/Storage/Header";
import MobileNavigation from "@/components/Storage/MobileNavigation";
import Sidebar from "@/components/Storage/Sidebar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await currentUser();
	
	if (!user) {
		return redirect("/sign-in");
	}

	// Preparar los datos del usuario en el formato esperado por los componentes
	const userData = {
		$id: user.id,
		fullName: user.fullName || user.firstName + " " + user.lastName,
		email: user.emailAddresses[0]?.emailAddress || "",
		avatar: user.imageUrl || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
		accountId: user.id,
		ownerId: user.id,
	};

	return (
		<div className=" flex bg-[#141517]">
			<div className="hidden lg:block">
				<Sidebar {...userData} />
			</div>
			<div className="flex-1 flex flex-col min-h-screen">
				<Header />
				<MobileNavigation {...userData} />
				<main className="flex-1 flex flex-col items-center justify-center px-4 py-4">
					<div className="w-full max-w-2xl mx-auto">
						{children}
					</div>
				</main>
			</div>
		</div>
	);
}