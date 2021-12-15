import React from 'react';
import { storiesOf } from '@storybook/react';
import { LangsMenu } from './LangsMenu';
import { LangsProvider } from '@context';

const stories = storiesOf('LangsMenu', module);

stories.add('Default', () => (
    <LangsProvider>
		<LangsMenu />
	</LangsProvider>
));
