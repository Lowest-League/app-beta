import React from 'react';
import classnames from 'classnames';
import { Typography, Loader } from '@components';

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

	function cardLoader() {
		return (
			<div className="List__loader">
				<div className="List__loaderLine">
					<Loader id={'${id}-loader'} box />
				</div>
				<div className="List__loaderLine">
					<Loader id={'${id}-loader'} box />
				</div>
				<div className="List__loaderLine">
					<Loader id={'${id}-loader'} box />
				</div>
			</div>
		);
	}

	return (
		<div className={classnames('List', { 'List--loading': loading })} id={id} data-testid={id}>
			{renderHeader()}
			{!loading && renderItems()}
			{loading && cardLoader()}
		</div>
	);
};

export default List;
