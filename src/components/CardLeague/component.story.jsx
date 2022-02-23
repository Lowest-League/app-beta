import React from 'react';
import CardLeague from './component';

export default {
	title: 'CardLeague',
	component: CardLeague,
	argTypes: {
		id: { control: 'text' },
		name: { control: 'text' },
	},
};

const Template = (args) => <CardLeague {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'storybook',
	name: 'Storybook',
	onClick: () => console.log('Clicked.'),
};
