import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// COMPONENTS
import Typography from './component';

let component;
const sizes = ['sm', 'lg', 'xl'];

describe('Typography', () => {
	beforeEach(() => (component = (props) => <Typography {...props} />));
	afterEach(() => (component = null));
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

	it('should render sm', () => {
		const props = {
			id: 'jest',
			content: 'Typography sm',
			size: 'sm',
		};

		const componentId = `typography-${props.id}`;

		const { getByTestId } = render(component(props));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(componentId).classList).toContain('Typography--sm');
		expect(getByTestId(componentId).textContent).toBe(props.content);
	});

	it('should render lg', () => {
		const props = {
			id: 'jest',
			content: 'Typography lg',
			size: 'lg',
		};

		const componentId = `typography-${props.id}`;

		const { getByTestId } = render(component(props));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(componentId).classList).toContain('Typography--lg');
		expect(getByTestId(componentId).textContent).toBe(props.content);
	});

	it('should render xl', () => {
		const props = {
			id: 'jest',
			content: 'Typography xl',
			size: 'xl',
		};

		const componentId = `typography-${props.id}`;

		const { getByTestId } = render(component(props));

		expect(getByTestId(componentId)).toBeTruthy();
		expect(getByTestId(componentId).classList).toContain('Typography--xl');
		expect(getByTestId(componentId).textContent).toBe(props.content);
	});

	it.each(sizes)('should apply bold styling', (size) => {
		const props = {
			id: 'jest',
			content: 'Typography bold',
			bold: true,
			size,
		};

		const componentId = `typography-${props.id}`;
		const className = `Typography Typography--bold Typography${size.length ? '--' : ''}${size}`;

		const { getByTestId } = render(component(props));

		expect(getByTestId(componentId).className).toBe(className);
	});

	it.each(sizes)('should apply italic styling', (size) => {
		const props = {
			id: 'jest',
			content: 'Typography italic',
			italic: true,
			size,
		};

		const componentId = `typography-${props.id}`;
		const className = `Typography Typography--italic Typography${size.length ? '--' : ''}${size}`;

		const { getByTestId } = render(component(props));

		expect(getByTestId(componentId).className).toBe(className);
	});
});
