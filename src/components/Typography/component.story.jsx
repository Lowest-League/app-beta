import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './component';

export default {
	title: 'Typography',
	component: Typography,
	argTypes: {
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
	content: 'Typography',
	bold: false,
	italic: false,
};
