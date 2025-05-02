import type {
	Award,
	Basics,
	Certificate,
	Education,
	Interest,
	Language,
	Project,
	Publication,
	Reference,
	Skill,
	Volunteer,
} from "./cv";

// // CV - deprecated
// export interface Cv {
// 	basics: Basics;
// 	work: Volunteer[];
// 	volunteer: Volunteer[];
// 	education: Education[];
// 	awards: Award[];
// 	certificates: Certificate[];
// 	publications: Publication[];
// 	skills: Skill[];
// 	languages: Language[];
// 	interests: Interest[];
// 	references: Reference[];
// 	projects: Project[];
// }

export interface SectionProps {
	title: string;
	children: React.ReactNode;
}

export interface ButtonProps {
	username: string;
	network: string;
	url: string;
}
