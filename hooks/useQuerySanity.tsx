"use client";
import { client } from "@/lib/sanity";
import { useState } from "react";

export function useQuerySanity<T>() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<T | null>(null);

	const handleQuery = async (query: string) => {
		try {
			setLoading(true);
			const res = await client.fetch(query);
			setData(res);
		} catch (error) {
			setError("Ha ocurrido un error al cargar los datos.");
			console.error(error);
			return null;
		} finally {
			setLoading(false);
		}
	};

	return {
		data,
		loading,
		error,
		handleQuery,
	};
}
