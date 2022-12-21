import { mergeConfig } from 'vite';

export default {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	framework: '@storybook/sveltekit',
	docs: {
		docsPage: 'automatic'
	},
	async viteFinal(config) {
		// Merge custom configuration into the default config
		return mergeConfig(config, {
			// Add storybook-specific dependencies to pre-optimization
			optimizeDeps: {
				include: ['storybook-addon-designs']
			}
		});
	},
	features: {
		storyStoreV7: true
	}
};
