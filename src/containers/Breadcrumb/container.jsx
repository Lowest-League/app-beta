import React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';
import { RightIcon } from '@icons';

const Breadcrumb = () => {
	const uiStore = useSelector((store) => store.ui);
	const links = uiStore.breadcrumb;

	const containerId = 'breadcrumb';

	function setLink(link) {
		const { url, label } = link;
		return (
			<span
				className={classnames('Breadcrumb__label', { 'Breadcrumb__label--disabled': !url.length })}
				onClick={() => location.replace(url)}
			>
				<Typography id={`${containerId}-${label}-link`} content={label} />
			</span>
		);
	}

	function render() {
		return !links || !links.length ? null : (
			<ul className="Breadcrumb" id={containerId} data-testid={containerId}>
				{links.map((link, index) => {
					if (links.length > 1 && index < links.length - 1)
						return (
							<li key={`${index}-link`} className="Breadcrumb__link">
								{setLink(link)} &nbsp;{' '}
								<RightIcon className="Breadcrumb__icon" width={12} height={16} /> &nbsp;
							</li>
						);
					return (
						<li className="Breadcrumb__link" key={`${index}-link`}>
							{setLink(link)}
						</li>
					);
				})}
			</ul>
		);
	}

	return render();
};

export default Breadcrumb;
