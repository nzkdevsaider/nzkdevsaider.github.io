import Section from "./Section";
import RESUME_DATA from "@/lib/cv.json";

const AboutMe = () => {
    const { basics } = RESUME_DATA;
    return (
        <Section title="Sobre mí">
            <p className="font-mono text-gray-600">{basics.summary}</p>
        </Section>
    );
}

export default AboutMe;