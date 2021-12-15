import React from 'react';
// import TestRenderer from 'react-test-renderer';
import { ContentSection } from './ContentSection';
import { render } from '@testing-library/react';

let contentSection;

describe('ContentSection', () => {
	beforeAll(() => {
		contentSection = (props) => {
			return (
				<ContentSection {...props}>
					<p id="content-section-p">Hello</p>
				</ContentSection>
			);
		};
	});
  // it('snapshot renders', () => {
  //   const component = TestRenderer.create(<ContentSection></ContentSection>); // writes snapshot
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

	it('should render children prop', () => {
    const { container } = render(contentSection());

    expect(container.querySelector('#content-section-p')).toBeTruthy();
  });

	it('should set light style', () => {
    const { container } = render(contentSection({ light: true }));

    expect(container.firstChild.classList.contains('ContentSection--light')).toBeTruthy();
  });

	it('should set center style', () => {
    const { container } = render(contentSection());

    expect(container.firstChild.classList.contains('ContentSection--center')).toBeTruthy();
  });

	it('should set right style', () => {
    const { container } = render(contentSection({ right: true }));

    expect(container.firstChild.classList.contains('ContentSection--right')).toBeTruthy();
  });

	it('should set left style', () => {
    const { container } = render(contentSection({ left: true }));

    expect(container.firstChild.classList.contains('ContentSection--left')).toBeTruthy();
  });

	it('should set spaced style', () => {
    const { container } = render(contentSection({ spaced: true }));

    expect(container.firstChild.classList.contains('ContentSection--spaced')).toBeTruthy();
  });

	it('should set vertical style', () => {
    const { container } = render(contentSection({ vertical: true }));

    expect(container.firstChild.classList.contains('ContentSection--vertical')).toBeTruthy();
  });
});
