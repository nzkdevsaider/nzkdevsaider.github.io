import { generateId } from "@/lib/utils";
import Section from "./Section";
import RESUME_DATA from "@/lib/cv.json";
import Link from "next/link";

const Experiencia = () => {
  const { work } = RESUME_DATA;
  return (
    <Section title="Experiencia laboral">
      <div className="flex flex-col gap-6">
        {work.map((job, index) => (
          <div key={generateId(index)}>
            <div className="flex flex-row justify-between items-center gap-3">
              <h3 className="font-semibold hover:underline underline-offset-4">
                <Link href={job.url}>{job.name}</Link>
              </h3>
              <p className="text-sm font-mono text-gray-600">
                {job.startDate} - {job.endDate}
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
