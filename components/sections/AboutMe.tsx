"use client";
import type { Person } from "@/studio/sanity.types";
import Section from "./Section";
import { IconWorld } from "@tabler/icons-react";
import Button from "../buttons/Button";
import { useQuerySanity } from "@/hooks/useQuerySanity";
import { useEffect } from "react";

const AboutMe = () => {
	const { data, loading, error, handleQuery } = useQuerySanity<Person>();

	const query = `*[_type == "person"][0]`;

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		handleQuery(query);
	}, []);

	return (
		<>
			<div className="max-w-3xl mx-auto my-3">
				{loading || !data ? (
					<div className="flex flex-col gap-3 my-2">
						<div className="skeleton h-9 w-[65%]" />
					</div>
				) : (
					<h1 className="text-4xl font-medium my-2 animate-fade-in">
						{data.name}
					</h1>
				)}
				{loading || !data ? (
					<div className="flex flex-col gap-3">
						<div className="skeleton h-20 w-[80%]" />
					</div>
				) : (
					<div className="text-gray-600">
						<p className="text-md">{data.label}</p>
						<div className="flex flex-row items-center gap-1 mb-2">
							<IconWorld size={15} />
							<p className="text-sm font-mono">{data.location?.countryCode}</p>
						</div>
						<div className="flex flex-row items-center gap-2">
							{data.profiles?.map((profile, index) => (
								<Button
									network={profile.network ?? ""}
									url={profile.url ?? ""}
									username={profile.username ?? ""}
									key={profile.network ?? ""}
								/>
							))}
						</div>
					</div>
				)}
			</div>
			<Section title="Sobre mí">
				{loading || !data ? (
					<div className="flex flex-col gap-3">
						<div className="skeleton h-32 w-full" />
					</div>
				) : (
					<p className="font-mono text-gray-600">{data.summary}</p>
				)}
			</Section>
		</>
	);
};

export default AboutMe;
