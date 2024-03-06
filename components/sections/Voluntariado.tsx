import { generateId } from "@/lib/utils";
import Section from "./Section";
import RESUME_DATA from "@/lib/cv.json";
import Link from "next/link";

const Voluntariado = () => {
  const { volunteer } = RESUME_DATA;
  
  return (
    <Section title="Voluntariado">
      <div className="flex flex-col gap-6">
        {volunteer.map((center, index) => (
          <div key={generateId(index)}>
            <div className="flex flex-row justify-between items-center gap-3">
            <h3 className="font-semibold hover:underline underline-offset-4">
                <Link href={center.url}>{center.organization}</Link>
              </h3>
              <p className="text-sm font-mono text-gray-600">
                {center.startDate} - {center.endDate}
              </p>
            </div>
            <div className="flex flex-col">
              <p>{center.position}</p>
              <p className="text-sm font-mono text-gray-600">{center.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Voluntariado;
