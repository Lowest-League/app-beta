const path = require('path');

module.exports = {
	stories: ['../src/components/**/*.story.jsx', '../src/containers/**/*.story.jsx'],
	addons: ['@storybook/addon-controls', '@storybook/addon-postcss'],
	webpackFinal: async (config) => {
		config.resolve.alias = {
			'@styles': path.resolve(__dirname, '../src/styles'),
			'@icons': path.resolve(__dirname, '../src/assets/icons'),
			'@components': path.resolve(__dirname, '../src/components'),
			'@containers': path.resolve(__dirname, '../src/containers'),
			'@api': path.resolve(__dirname, '../src/api'),
			'@store': path.resolve(__dirname, '../src/store'),
			'@store/*': path.resolve(__dirname, '../src/store/*'),
			'@utils': path.resolve(__dirname, '../src/utils'),
		};

		config.module.rules.push({
			test: /\.scss$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader' },
				{ loader: 'sass-loader', options: { additionalData: '@import "~@styles/global.scss";' } },
			],
			include: path.resolve(__dirname, '../'),
		});

		return config;
	},
};
