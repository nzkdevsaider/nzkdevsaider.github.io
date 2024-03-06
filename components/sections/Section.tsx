import { SectionProps } from "@/lib/types";
import TitlePrimary from "../typo/TitlePrimary";

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="max-w-3xl mx-auto my-10">
      {title && <TitlePrimary className="my-1">{title}</TitlePrimary>}
      <div>{children}</div>
    </section>
  );
};

export default Section;
