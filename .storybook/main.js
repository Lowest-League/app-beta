const path = require('path');

module.exports = {
	stories: ['../src/components/**/*.story.jsx'],
	addons: ['@storybook/addon-postcss'],
	webpackFinal: async (config) => {
		config.resolve.alias = {
			'@styles': path.resolve(__dirname, '../src/styles'),
			'@components': path.resolve(__dirname, '../src/components'),
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
