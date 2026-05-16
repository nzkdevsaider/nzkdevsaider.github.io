import Section from "@/components/molecules/Section";
import EducationCard from "@/components/molecules/EducationCard";
import RESUME_DATA from "@/lib/cv.json";

const Educacion = () => {
  const { education } = RESUME_DATA;
  return (
    <Section title="Educación">
      <div className="flex flex-col gap-3">
        {education.map((center, index) => (
          <EducationCard
            key={`${center.institution}-${index}`}
            institution={center.institution}
            logo={(center as any).logo}
            area={center.area}
            studyType={center.studyType}
            startDate={center.startDate}
            endDate={center.endDate}
            courses={center.courses}
            url={center.url}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Educacion;
