import SectionTitle from "@/components/atoms/SectionTitle";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="flex flex-col gap-4">
      {title && <SectionTitle>{title}</SectionTitle>}
      <div>{children}</div>
    </section>
  );
};

export default Section;
