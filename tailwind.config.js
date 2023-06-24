/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				topaz: {
					...require("daisyui/src/theming/themes")[
						"[data-theme=corporate]"
					],

					primary: "#76738b",
					secondary: "#a3cfc6",
					accent: "#f8b897",
					neutral: "#4b5563",
					"base-100": "#f3f4f6",
					info: "#7dd3fc",
					success: "#2fc189",
					warning: "#fdba74",
					error: "#f87171",
				},
			},
		],
	},
	theme: {
		extend: {
			fontFamily: {
				inter: "Inter",
			},
		},
	},
	plugins: [require("daisyui")],
};
