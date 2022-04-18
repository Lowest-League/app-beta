import React from 'react';
import { Typography } from '@components';

// STYLE
import './style.scss';

const List = (props) => {
	const { id, header, items } = props;

	function renderHeader() {
		return header && <div className="List__header">{header}</div>;
	}

	function renderItems() {
		return items && items.length ? (
			<ul className="List__ul">{items}</ul>
		) : (
			<Typography id={`${id}-list-empty-message`} content="No item." size="sm" italic />
		);
	}

	return (
		<div className="List" id={id} data-testid={id}>
			{renderHeader()}
			{renderItems()}
		</div>
	);
};

export default List;
