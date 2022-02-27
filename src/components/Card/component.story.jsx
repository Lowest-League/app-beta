import React from 'react';
import Card from './component';

export default {
	title: 'Card',
	component: Card,
	argTypes: {
		id: { control: 'text' },
		type: {
			options: ['league', 'match', 'default'],
			control: { type: 'select' },
		},
	},
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'storybook',
	type: 'default',
	data: {
		id: '0000',
		name: 'Lowest League main',
		players: 242,
	},
};
