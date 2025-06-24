"use server";

import { currentUser, auth } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import { redirect } from "next/navigation";

export async function getCurrentUser() {
	try {
		const user = await currentUser();
		
		if (!user) {
			return null;
		}

		// Retornar datos del usuario en el formato esperado por los componentes
		return parseStringify({
			$id: user.id,
			fullName: user.fullName || user.firstName + " " + user.lastName,
			email: user.emailAddresses[0]?.emailAddress || "",
			avatar: user.imageUrl || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
			accountId: user.id, // Usar el ID de Clerk como accountId
		});
	} catch (error) {
		console.error("Error getting current user:", error);
		return null;
	}
}

export async function signOutUser() {
	try {
		// Clerk maneja el sign out automáticamente
		// Solo necesitamos redirigir
		redirect("/sign-in");
	} catch (error) {
		console.error("Error signing out:", error);
		redirect("/sign-in");
	}
}

// Funciones de compatibilidad que ya no se necesitan con Clerk
export async function createAccount({
	fullName,
	email,
}: {
	fullName: string;
	email: string;
}) {
	// Esta función ya no es necesaria con Clerk
	// Clerk maneja la creación de cuentas automáticamente
	throw new Error("Account creation is handled by Clerk");
}

export async function signInUser({ email }: { email: string }) {
	// Esta función ya no es necesaria con Clerk
	// Clerk maneja el sign in automáticamente
	throw new Error("Sign in is handled by Clerk");
}

export async function sendEmailOTP({ email }: { email: string }) {
	// Esta función ya no es necesaria con Clerk
	// Clerk maneja la verificación automáticamente
	throw new Error("OTP is handled by Clerk");
}

export async function verifySecret({
	secret,
	accountId,
}: {
	secret: string;
	accountId: string;
}) {
	// Esta función ya no es necesaria con Clerk
	// Clerk maneja la verificación automáticamente
	throw new Error("OTP verification is handled by Clerk");
}
