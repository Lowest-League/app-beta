import React from 'react';
import { storiesOf } from '@storybook/react';
import { MainLink } from './MainLink';
import { GithubLogo } from '@icons';

const stories = storiesOf('MainLink', module);

stories.add('Default', () => (
	<MainLink
        id="storybook-mainlink"
        icon={<GithubLogo />}
        href={'http://google.com'}>Default link</MainLink>
));

stories.add('Light', () => (
	<MainLink
        id="storybook-mainlink"
        icon={<GithubLogo />}
        href={'http://google.com'}
		light>Light link</MainLink>
));

stories.add('Reverse', () => (
	<MainLink
        id="storybook-mainlink"
        icon={<GithubLogo />}
        href={'http://google.com'}
		reverse>Reversed link</MainLink>
));
