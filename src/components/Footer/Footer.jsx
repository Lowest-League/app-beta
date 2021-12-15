import React from 'react';

// STYLE
import './Footer.scss';

// CONTEXT
import { useTranslation } from '@context';

// COMPONENTS
import { MainLink } from '@components';
import { GithubLogo, LinkedinLogo } from '@icons';

export const Footer = () => {
	const { translation } = useTranslation();

	return (
		<div className="Footer">
			<ul className="Footer__list">
				<li className="Footer__link">
					<MainLink
						id="github-link"
						href="https://github.com/cl4pper/react-boilerplate"
						icon={<GithubLogo width="24px" height="24px" id="github-link" />}
						light
						reverse
					>
						{translation.footer.help}
					</MainLink>
				</li>
				<li className="Footer__link">
					<MainLink
						id="linkedin-link"
						href="https://www.linkedin.com/in/matheus-pereira-de-souza-19895316a/"
						icon={<LinkedinLogo width="24px" height="24px" id="linkedin-link" />}
						light
						reverse
					>
						{translation.footer.contact}
					</MainLink>
				</li>
			</ul>
		</div>
	);
};
