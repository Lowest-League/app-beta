import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// COMPONENTS
import Typography from './component';

let component = (props) => <Typography {...props} />;
const types = ['title', 'subtitle', 'helper', ''];

describe('Typography', () => {
	it('should render', () => {
		const props = {
			id: 'jest',
			content: 'Typography content',
		};

		const componentId = `typography-${props.id}`;

		const { getByTestId, container } = render(component(props));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(componentId).textContent).toBe(props.content);
		expect(container.querySelector('p')).toBeTruthy();
	});

	it('should render a title', () => {
		const props = {
			id: 'jest',
			content: 'Typography title',
			type: 'title',
		};

		const componentId = `typography-${props.id}`;

		const { getByTestId, container } = render(component(props));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(componentId).textContent).toBe(props.content);
		expect(container.querySelector('h1')).toBeTruthy();
	});

	it('should render a subtitle', () => {
		const props = {
			id: 'jest',
			content: 'Typography subtitle',
			type: 'subtitle',
		};

		const componentId = `typography-${props.id}`;

		const { getByTestId, container } = render(component(props));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(componentId).textContent).toBe(props.content);
		expect(container.querySelector('h2')).toBeTruthy();
	});

	it('should render a helper', () => {
		const props = {
			id: 'jest',
			content: 'Typography helper',
			type: 'helper',
		};

		const componentId = `typography-${props.id}`;

		const { getByTestId, container } = render(component(props));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(componentId).textContent).toBe(props.content);
		expect(container.querySelector('p')).toBeTruthy();
	});

	it.each(types)('should apply bold styling', (type) => {
		const props = {
			id: 'jest',
			content: 'Typography bold',
			bold: true,
			type,
		};

		const componentId = `typography-${props.id}`;
		const className = `Typography${type.length ? '__' : ''}${type} Typography--bold`;

		const { getByTestId } = render(component(props));

		expect(getByTestId(componentId).className).toBe(className);
	});

	it.each(types)('should apply italic styling', (type) => {
		const props = {
			id: 'jest',
			content: 'Typography italic',
			italic: true,
			type,
		};

		const componentId = `typography-${props.id}`;
		const className = `Typography${type.length ? '__' : ''}${type} Typography--italic`;

		const { getByTestId } = render(component(props));

		expect(getByTestId(componentId).className).toBe(className);
	});
});
