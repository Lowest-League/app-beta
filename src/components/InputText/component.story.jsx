import React from 'react';
import InputText from './component';

export default {
	title: 'InputText',
	component: InputText,
	argTypes: {
		id: { control: 'text' },
		label: { control: 'text' },
		helper: { control: 'text' },
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		error: { control: 'boolean' },
	},
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'storybook',
	label: 'InputText',
	helper: '',
	placeholder: 'Placeholder',
	disabled: false,
	error: false,
	field: {
		onChange: (e) => console.log(e.target.value),
		value: 'Hello, value',
	},
};
