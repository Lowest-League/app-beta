import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from './Footer';
import { LangsProvider } from '@context';

const stories = storiesOf('Footer', module);

stories.add('Default', () => (
	<LangsProvider>
		<Footer />
	</LangsProvider>
));
