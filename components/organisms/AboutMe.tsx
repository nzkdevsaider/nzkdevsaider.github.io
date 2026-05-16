import Section from "@/components/molecules/Section";
import FadeIn from "@/components/atoms/FadeIn";
import RESUME_DATA from "@/lib/cv.json";

const AboutMe = () => {
  const { basics } = RESUME_DATA;
  return (
    <Section title="Sobre mí">
      <FadeIn delay={0.1}>
        <p className="text-sm text-base-content/70 leading-relaxed">
          {basics.summary}
        </p>
      </FadeIn>
    </Section>
  );
};

export default AboutMe;
