import React from 'react';
import Wrapper from './component';

export default {
	title: 'Wrapper',
	component: Wrapper,
	argTypes: {
		id: { control: 'text' },
		title: { control: 'text' },
		height: { control: 'number' },
	},
};

const content = (
	<ul>
		<li>Legen...</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>wait for it</li>
		<li>...dary.</li>
	</ul>
);

const Template = (args) => <Wrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'storybook',
	title: 'Storybook wrapper',
	height: 320,
	content,
};
