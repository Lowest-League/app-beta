import React from 'react';
import Chip from './component';

export default {
	title: 'Chip',
	component: Chip,
	argTypes: {
		id: { control: 'text' },
		label: { control: 'text' },
		active: { control: 'boolean' },
		small: { control: 'boolean' },
	},
};

const Template = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'storybook',
	label: 'Chip',
	active: false,
	small: false,
};
