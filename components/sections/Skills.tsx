import { generateId } from "@/lib/utils";
import Section from "./Section";
import RESUME_DATA from "@/lib/cv.json";
import {
  IconBrandCss3,
  IconBrandDeno,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandFirebase,
  IconBrandFlutter,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconSquare,
} from "@tabler/icons-react";

const Skills = () => {
  const { skills } = RESUME_DATA;
  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "javascript":
        return <IconBrandJavascript size={20} />;
      case "typescript":
        return <IconBrandTypescript size={20} />;
      case "react":
        return <IconBrandReact size={20} />;
      case "nextjs":
        return <IconBrandNextjs size={20} />;
      case "tailwindcss":
        return <IconBrandTailwind size={20} />;
      case "html":
        return <IconBrandHtml5 size={20} />;
      case "css":
        return <IconBrandCss3 size={20} />;
      case "mongodb":
        return <IconBrandMongodb size={20} />;
      case "mysql":
        return <IconBrandMysql size={20} />;
      case "python":
        return <IconBrandPython size={20} />;
      case "docker":
        return <IconBrandDocker size={20} />;
      case "git":
        return <IconBrandGit size={20} />;
      case "github":
        return <IconBrandGithub size={20} />;
      case "nodejs":
        return <IconBrandNodejs size={20} />;
      case "flutter":
        return <IconBrandFlutter size={20} />;
      case "firebase":
        return <IconBrandFirebase size={20} />;
      case "supabase":
        return <IconBrandSupabase size={20} />;
      case "deno":
        return <IconBrandDeno size={20} />;
      case "vercel":
        return <IconBrandVercel size={20} />;
      case "figma":
        return <IconBrandFigma size={20} />;
      default:
        return <IconSquare size={20} />;
    }
  };
  return (
    <Section title="Habilidades">
      <div className="inline-flex flex-wrap justify-start items-center gap-2">
        {skills.map((skill, index) => (
          <div key={generateId(index)} className="badge gap-1 badge-ghost">
            <div>{getSkillIcon(skill.name)}</div>
            <span className="font-mono">{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
