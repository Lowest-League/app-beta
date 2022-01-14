import React from 'react';
import Typography from './component';

export default {
	title: 'Typography',
	component: Typography,
	argTypes: {
		id: { control: 'text' },
		content: { control: 'text' },
		type: {
			options: ['title', 'subtitle', 'text', 'subtext'],
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
	bold: false,
	italic: false,
};
