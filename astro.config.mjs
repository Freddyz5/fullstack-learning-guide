// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://freddytacuri.github.io',
	base: '/fullstack-learning-guide',
	integrations: [
		starlight({
			title: 'Fullstack Learning Guide',
			sidebar: [
				{
					label: '🧭 Cómo usar esta guía',
					slug: 'guides/como-usar'
				},
				{
					label: '🟦 Bases y Lógica',
					autogenerate: { directory: 'bases-y-logica' },
				},
				{
					label: '🟩 Desarrollo y Despliegue',
					autogenerate: { directory: 'desarrollo-y-despliegue' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
		mermaid(),
	],
});
