import Banner from "@/components/organisms/Banner";
import Presentation from "@/components/organisms/Presentation";
import AboutMe from "@/components/organisms/AboutMe";
import Experiencia from "@/components/organisms/Experiencia";
import Educacion from "@/components/organisms/Educacion";
import Habilidades from "@/components/organisms/Habilidades";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="px-2 md:px-6 z-1">
        <Presentation />
        <div className="flex flex-col gap-8 mt-8 pb-12">
          <AboutMe />
          <Experiencia />
          <Educacion />
          <Habilidades />
        </div>
      </div>
    </>
  );
}
