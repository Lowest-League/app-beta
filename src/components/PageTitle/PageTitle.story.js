import React from 'react';
import { storiesOf } from '@storybook/react';
import { PageTitle } from './PageTitle';

const stories = storiesOf('PageTitle', module);

stories.add('Default', () => (
    <PageTitle>Default title</PageTitle>
));

stories.add('Light', () => (
    <PageTitle light>Light title</PageTitle>
));

stories.add('With subtitle', () => (
    <PageTitle subtitle={'Subtitle'}>Title with subtitle</PageTitle>
));

stories.add('Light with subtitle', () => (
    <PageTitle
		subtitle={'Subtitle'}
		light>Title with subtitle</PageTitle>
));
