import { generateId } from "@/lib/utils";
import Section from "./Section";
import RESUME_DATA from "@/lib/cv.json";
import Link from "next/link";

const Proyectos = () => {
  const { projects } = RESUME_DATA;
  return (
    <Section title="Proyectos">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Link href={project.url}>
            <div
              key={generateId(index)}
              className="border border-slate-200 h-full shadow-sm rounded-md p-3 hover:shadow-md transition duration-300 ease-in-out cursor-pointer hover:border-slate-300"
            >
              <div className="flex flex-col justify-between gap-4 h-full">
                <div className="flex flex-col">
                  <h3 className="font-semibold hover:underline underline-offset-4">
                    {project.name}
                  </h3>
                  <p className="font-mono text-sm text-gray-600">
                    {project.description}
                  </p>
                </div>
                <p className="inline-flex flex-wrap gap-1">
                  {project.highlights.map((highlight, index) => (
                    <span
                      key={generateId(index)}
                      className="badge badge-sm badge-ghost"
                    >
                      {highlight}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Proyectos;
