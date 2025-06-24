"use client"

import { useState } from "react";
import Image from "next/image";

export default function Search() {
	const [query, setQuery] = useState("");

	return (
		<div className="relative w-full">
			<input
				type="text"
				placeholder="Buscar archivos, imágenes, documentos..."
				value={query}
				onChange={e => setQuery(e.target.value)}
				className="w-full pl-10 pr-4 py-2 rounded-md bg-[#23262F] text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F47174] transition-all"
			/>
			<span className="absolute left-3 top-1/2 -translate-y-1/2">
				<Image src="/assets/icons/search.svg" alt="Buscar" width={20} height={20} />
			</span>
			{query && (
				<div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setQuery("")}>✕</div>
			)}
		</div>
	);
}
