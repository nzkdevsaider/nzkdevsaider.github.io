import AboutMe from "@/components/sections/AboutMe";
import Educacion from "@/components/sections/Educacion";
import Experiencia from "@/components/sections/Experiencia";
import Proyectos from "@/components/sections/Proyectos";
import Skills from "@/components/sections/Skills";
import Voluntariado from "@/components/sections/Voluntariado";

export default function Home() {
  return (
    <>
    <AboutMe />
    <Experiencia />
    <Educacion />
    <Voluntariado />
    <Skills />
    <Proyectos />
    </>
  );
}
