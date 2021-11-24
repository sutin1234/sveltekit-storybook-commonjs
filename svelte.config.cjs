// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';
// import WindiCSS from 'vite-plugin-windicss'
const WindiCSS = require('vite-plugin-windicss')
// const adapter = require('@sveltejs/adapter-auto');

const config = {
	// preprocess: preprocess(),
	kit: {
		// adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins:[
				WindiCSS
			]
		}
	}
};

module.export = config;
