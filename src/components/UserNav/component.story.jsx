import React from 'react';
import UserNav from './component';

export default {
	title: 'UserNav',
	component: UserNav,
	argTypes: {
		username: { control: 'text' },
	},
};

const Template = (args) => <UserNav {...args} />;

export const Default = Template.bind({});
Default.args = {
	username: 'storybook',
};
