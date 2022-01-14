import React from 'react';
import Button from './component';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		id: { control: 'text' },
		label: { control: 'text' },
		helper: { control: 'text' },
		secondary: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'storybook',
	label: 'Button',
	helper: '',
	secondary: false,
	disabled: false,
	onClick: () => console.log('Clicked.'),
};
