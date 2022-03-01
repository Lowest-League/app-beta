// Breadcrumb template
import React from 'react';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';
import { RightIcon } from '@icons';

const Breadcrumb = (props) => {
	const { links } = props;

	const containerId = 'breadcrumb';

	function setLink(link) {
		const { url, label } = link;
		if (!url.length)
			return (
				<span className="Breadcrumb__label">
					<Typography id={`${containerId}-${label}-link`} content={label} />
				</span>
			);
		return (
			<span className="Breadcrumb__label" onClick={() => location.replace(url)}>
				<Typography id={`${containerId}-${label}-link`} content={label} />
			</span>
		);
	}

	function render() {
		return !links ? null : (
			<ul className="Breadcrumb" id={containerId} data-testid={containerId}>
				{links.map((link, index) => {
					if (links.length > 1 && index < links.length - 1)
						return (
							<li key={`${index}-link`} className="Breadcrumb__link">
								{setLink(link, index)} &nbsp;{' '}
								<RightIcon className="Breadcrumb__icon" width={12} height={16} /> &nbsp;
							</li>
						);
					return (
						<li className="Breadcrumb__link" key={`${index}-link`}>
							{setLink(link, index)}
						</li>
					);
				})}
			</ul>
		);
	}

	return render();
};

export default Breadcrumb;
