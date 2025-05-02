import { defineField, defineType } from "sanity";

export default defineType({
	name: "workExperience",
	title: "Experiencia Laboral",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Empresa",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "position",
			title: "Cargo",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "url",
			title: "Sitio Web de la Empresa",
			type: "url",
		}),
		defineField({
			name: "startDate",
			title: "Fecha de Inicio",
			type: "date",
			description: "Año o fecha específica de inicio",
			validation: (Rule) => Rule.required(),
			options: {
				dateFormat: "YYYY-MM",
			},
		}),
		defineField({
			name: "endDate",
			title: "Fecha de Finalización",
			type: "date",
			description:
				"Año, fecha específica, dejar vacío para implicitamente indicar que se trabaja actualmente",
			options: {
				dateFormat: "YYYY-MM",
			},
		}),
		defineField({
			name: "summary",
			title: "Descripción",
			type: "text",
			description: "Breve descripción de tus responsabilidades",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "highlights",
			title: "Aspectos Destacados",
			type: "array",
			of: [{ type: "string" }],
			description: "Tecnologías, habilidades o logros destacados",
		}),
	],
	preview: {
		select: {
			title: "name",
			subtitle: "position",
			description: "startDate",
		},
		prepare({ title, subtitle, description }) {
			return {
				title,
				subtitle: `${subtitle} (${description})`,
			};
		},
	},
});
