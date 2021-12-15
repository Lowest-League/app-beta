import React, { useState } from 'react';
import classNames from 'classnames';

// STYLE
import './LangsMenu.scss';

// CONTEXT
import { useTranslation } from '@context';

// COMPONENTS
import { ArrowLogo } from '@icons';

export const LangsMenu = () => {
	const { lang, setLang, translations } = useTranslation();
	const [open, handleOpen] = useState(false);

	function handleMenu() {
		handleOpen(!open);
	}

	function selectLanguage(id) {
		setLang(id);
	}

	function renderList() {
		return translations.map((trans) => (
			<li
				key={trans.id}
				className={classNames('LangsMenu__option', {
					'LangsMenu__option--selected': trans.id === lang,
				})}
				onClick={() => selectLanguage(trans.id)}
			>
				{trans.label}
			</li>
		));
	}

	return (
		<>
			<div className="LangsMenu">
				<p className="LangsMenu__toggle" onClick={() => handleMenu()}>
					Menu
					<ArrowLogo
						className={classNames('LangsMenu__icon', {
							'LangsMenu__icon--open': open,
						})}
					/>
				</p>
				<ul
					className={classNames('LangsMenu__menu', {
						'LangsMenu__menu--hidden': !open,
					})}
				>
					{renderList()}
				</ul>
			</div>
		</>
	);
};
