"use client";
import { generateId } from "@/lib/utils";
import Section from "./Section";
import RESUME_DATA from "@/lib/cv.json";
import Link from "next/link";
import type { WorkExperience } from "@/studio/sanity.types";
import { useQuerySanity } from "@/hooks/useQuerySanity";
import { useEffect } from "react";

const Experiencia = () => {
	const { data, loading, error, handleQuery } =
		useQuerySanity<WorkExperience[]>();

	const query = `*[_type == "workExperience"] | order(order asc)`;

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		handleQuery(query);
	}, []);

	return (
		<Section title="Experiencia laboral">
			<div className="flex flex-col gap-6">
				{loading && (
					<div className="flex flex-col gap-3 my-3">
						<div className="skeleton h-32 w-full" />
					</div>
				)}
				{data?.map((job, index) => (
					<div key={generateId(index)}>
						<div className="flex flex-row justify-between items-center gap-3">
							<h3 className="font-semibold hover:underline underline-offset-4">
								<Link href={job.url ?? ""}>{job.name}</Link>
							</h3>
							<p className="text-sm font-mono text-gray-600">
								{new Date(job.startDate ?? "").toLocaleDateString("es-ES", {
									year: "numeric",
									month: "long",
								})}{" "}
								-{" "}
								{job.endDate
									? new Date(job.endDate ?? "").toLocaleDateString("es-ES", {
											year: "numeric",
											month: "long",
										})
									: "Presente"}
							</p>
						</div>
						<div className="flex flex-col">
							<p>{job.position}</p>
							<p className="text-sm font-mono text-gray-600">{job.summary}</p>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export default Experiencia;
