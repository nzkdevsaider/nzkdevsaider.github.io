import Section from "@/components/molecules/Section";
import ExperienceCard from "@/components/molecules/ExperienceCard";
import RESUME_DATA from "@/lib/cv.json";

const Experiencia = () => {
  const { work } = RESUME_DATA;
  return (
    <Section title="Experiencia laboral">
      <div className="flex flex-col gap-3">
        {work.map((job, index) => (
          <ExperienceCard
            key={`${job.name}-${index}`}
            name={job.name ?? "Organización"}
            logo={(job as any).logo}
            position={job.position}
            startDate={job.startDate}
            endDate={job.endDate}
            summary={job.summary}
            highlights={job.highlights}
            url={job.url}
            location={job.location}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experiencia;
