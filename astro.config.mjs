// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fullstack Learning Guide',
			sidebar: [
				{
					label: '🧭 Cómo usar esta guía',
					slug: 'guides/como-usar'
				},
				{
					label: '🟦 Primer Periodo Académico',
					autogenerate: { directory: 'periodo-1' },
				},
				{
					label: '🟩 Segundo Periodo Académico',
					autogenerate: { directory: 'periodo-2' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
		mermaid(),
	],
});
