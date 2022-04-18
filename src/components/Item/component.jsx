import React from 'react';

// STYLE
import './style.scss';

const Item = props => {
    const { id, content } = props;
    
    return (
        <li className="Item" key={id} id={id} data-testid={id}>
            {content}
        </li>
    );
};

export default Item;