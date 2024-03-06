import { generateId } from "@/lib/utils";
import Section from "./Section";
import RESUME_DATA from "@/lib/cv.json";
import Link from "next/link";

const Educacion = () => {
  const { education } = RESUME_DATA;

  return (
    <Section title="Educación">
      <div className="flex flex-col gap-6">
        {education.map((center, index) => (
          <div key={generateId(index)}>
            <div className="flex flex-row justify-between items-center gap-3">
              <h3 className="font-semibold hover:underline underline-offset-4">
                <Link href={center.url}>{center.institution}</Link>
              </h3>
              <p className="text-sm font-mono text-gray-600">
                {center.startDate} - {center.endDate}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-mono text-gray-600">{center.area}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Educacion;
