import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
		assets: process.env.NODE_ENV === 'production' ? '/pokesearch' : '',
		base: process.env.NODE_ENV === 'production' ? '/pokesearch' : ''
		}
	}
};