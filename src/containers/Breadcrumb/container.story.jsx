import React from 'react';
import Breadcrumb from './container';

export default {
	title: 'Breadcrumb',
	component: Breadcrumb,
};

const Template = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
	links: [
		{
			label: 'Home',
			url: '',
		},
		{
			label: 'Leagues',
			url: 'leagues',
		},
	],
};
