import AboutMe from "@/components/sections/AboutMe";
import Educacion from "@/components/sections/Educacion";
import Experiencia from "@/components/sections/Experiencia";
import Proyectos from "@/components/sections/Proyectos";
import Skills from "@/components/sections/Skills";
import Voluntariado from "@/components/sections/Voluntariado";
import { client } from "@/lib/sanity";
import { WorkExperience } from "../studio/sanity.types";

export default async function Home() {
	const [workExperience, projects, skills, person] = await Promise.all([
		client.fetch(`*[_type == "workExperience"] | order(order asc)`),
		client.fetch(`*[_type == "project"] | order(order asc)`),
		client.fetch(`*[_type == "skill"] | order(order asc)`),
		client.fetch(`*[_type == "person"][0]`),
	]);

	console.log(workExperience, projects, skills, person);

	return (
		<>
			<AboutMe />
			<Experiencia />
			{/* <Educacion /> */}
			{/* <Voluntariado /> */}
			<Skills />
			<Proyectos />
		</>
	);
}
