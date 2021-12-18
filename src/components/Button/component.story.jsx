import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './component';

const stories = storiesOf('Button', module);

const Props = {
	id: 'storybook',
	label: 'Storybook',
};

stories.add('Default', () => <Button {...Props} />);
stories.add('Default - with helper', () => <Button {...Props} helper="Button helper" />);

stories.add('Secondary', () => <Button {...Props} secondary />);
stories.add('Secondary - with helper', () => (
	<Button {...Props} secondary helper="Button helper" />
));

stories.add('Disabled', () => <Button {...Props} disabled />);
stories.add('Disabled - with helper', () => <Button {...Props} disabled helper="Button helper" />);
