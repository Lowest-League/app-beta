import React from 'react';
import Modal from './component';

export default {
	title: 'Modal',
	component: Modal,
	argTypes: {
		id: { control: 'text' },
		visible: { control: 'boolean' },
		title: { control: 'text' },
	},
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'storybook',
	visible: false,
	title: 'Storybook',
	content: <span>Hello</span>,
	footer: <span>Footer</span>,
	close: () => window.alert('Closed.'),
};
