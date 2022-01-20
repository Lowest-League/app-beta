// Modal template
import React from 'react';
import classnames from 'classnames';

// STYLE
import './style.scss';

// COMPONENTS
import { Typography } from '@components';
import { CloseIcon } from '@icons';

const Modal = (props) => {
	const { id, visible, title, content, close, footer } = props;
	const sizes = '20';

	const componentId = `modal-${id}`;

	const element = (
		<div className="Modal" id={componentId} data-testid={componentId}>
			<div className="Modal__box">
				<div className="Modal__top">
					<div className="Modal__title">
						<Typography id={componentId} content={title} bold />
					</div>
					<span onClick={close}>
						<CloseIcon className="Modal__close" width={sizes} height={sizes} />
					</span>
				</div>
				<div className="Modal__content">{content}</div>
				{footer && (
					<div className="Modal__footer" data-testid={`${componentId}-footer`}>
						{footer}
					</div>
				)}
			</div>
		</div>
	);

	return visible ? element : null;
};

export default Modal;
