import React from 'react';
import classnames from 'classnames';
import { Typography } from '@components';

// STYLE
import './style.scss';

const List = (props) => {
	const { id, title, items, loading } = props;

	function renderHeader() {
		return (
			title && (
				<div className="List__header">
					<Typography id={`${id}-list-title`} content={title} size="lg" bold />
				</div>
			)
		);
	}

	function renderItems() {
		return items && items.length ? (
			<ul className="List__ul">{items}</ul>
		) : (
			<Typography id={`${id}-list-empty-message`} content="No item." size="sm" italic />
		);
	}

	return (
		<div className={classnames('List', { 'List--loading': loading })} id={id} data-testid={id}>
			{renderHeader()}
			{renderItems()}
		</div>
	);
};

export default List;
