import type { Config } from "tailwindcss";
import animations from '@midudev/tailwind-animations'

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	daisyui: {
		themes: [
			{
				morant: {
					primary: "#0000ff",

					secondary: "#006bdb",

					accent: "#76b100",

					neutral: "#1b1d00",

					"base-100": "#fffef9",

					info: "#007aca",

					success: "#00faaf",

					warning: "#9c5300",

					error: "#ed3e4d",
				},
			},
		],
	},
	plugins: [require("daisyui"), animations],
};
export default config;
