import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				elegante: ['var(--font-elegante)'],
			},
			colors: {
				'golden-hour': {
					white: '#faf9f4',
					gold: '#ac9654',
				},
			},
		},
	},
	plugins: [],
};
export default config;