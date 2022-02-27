import React from 'react';
import Typography from './component';

export default {
	title: 'Typography',
	component: Typography,
	argTypes: {
		id: { control: 'text' },
		content: { control: 'text' },
		size: {
			options: ['sm', 'default', 'lg', 'xl'],
			control: { type: 'select' },
		},
		bold: { control: 'boolean' },
		italic: { control: 'boolean' },
	},
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'storybook',
	content: 'Typography',
	size: 'default',
	bold: false,
	italic: false,
};
