import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './component';

const stories = storiesOf('Typography', module);

const Props = {
	id: 'storybook',
	content: 'Storybook',
};

stories.add('Default', () => (
	<>
		<Typography {...Props} />
		<Typography {...Props} bold />
		<Typography {...Props} italic />
		<Typography {...Props} italic bold />
	</>
));

stories.add('Helper', () => (
	<>
		<Typography {...Props} type="helper" />
		<Typography {...Props} bold type="helper" />
		<Typography {...Props} italic type="helper" />
		<Typography {...Props} italic bold type="helper" />
	</>
));

stories.add('Title', () => (
	<>
		<Typography {...Props} type="title" />
		<Typography {...Props} bold type="title" />
		<Typography {...Props} italic type="title" />
		<Typography {...Props} italic bold type="title" />
	</>
));

stories.add('Subtitle', () => (
	<>
		<Typography {...Props} type="subtitle" />
		<Typography {...Props} bold type="subtitle" />
		<Typography {...Props} italic type="subtitle" />
		<Typography {...Props} italic bold type="subtitle" />
	</>
));
