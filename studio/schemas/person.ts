import { defineField, defineType } from "sanity";

export default defineType({
	name: "person",
	title: "Información Personal",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Nombre",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "label",
			title: "Título Profesional",
			type: "string",
			description: "Ej: Desarrollador full-stack",
		}),
		defineField({
			name: "image",
			title: "Imagen",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
		}),
		defineField({
			name: "phone",
			title: "Teléfono",
			type: "string",
		}),
		defineField({
			name: "url",
			title: "Sitio Web",
			type: "url",
		}),
		defineField({
			name: "summary",
			title: "Resumen",
			type: "text",
			description: "Breve descripción profesional",
		}),
		defineField({
			name: "location",
			title: "Ubicación",
			type: "object",
			fields: [
				//{name: 'address', title: 'Dirección', type: 'string'},
				//{name: 'postalCode', title: 'Código Postal', type: 'string'},
				{ name: "city", title: "Ciudad", type: "string" },
				{ name: "countryCode", title: "Código de País (ISO)", type: "string" },
				{ name: "province", title: "Provincia", type: "string" },
			],
		}),
		defineField({
			name: "profiles",
			title: "Perfiles Sociales",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "network",
							title: "Red Social",
							type: "string",
							options: {
								list: [
									{ title: "LinkedIn", value: "LinkedIn" },
									{ title: "GitHub", value: "GitHub" },
									{ title: "Instagram", value: "Instagram" },
								],
							},
							validation: (Rule) => Rule.required(),
						},
						{
							name: "username",
							title: "Usuario",
							type: "string",
							validation: (Rule) =>
								Rule.required()
									.min(1)
									.max(50)
									.warning("El nombre de usuario es obligatorio."),
						},
						{
							name: "url",
							title: "URL",
							description:
								"URL al perfil, omitiendo el nombre de usuario. Ej: https://www.linkedin.com/in/{usuario omitido}",
							type: "url",
							validation: (Rule) =>
								Rule.uri({
									allowRelative: false,
									scheme: ["http", "https"],
								}),
						},
					],
					preview: {
						select: {
							title: "network",
							subtitle: "username",
						},
					},
				},
			],
		}),
	],
	preview: {
		select: {
			title: "name",
			subtitle: "label",
			media: "image",
		},
	},
});
