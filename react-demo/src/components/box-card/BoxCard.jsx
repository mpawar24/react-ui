import React from 'react';
import './box-card.scss';

const BoxCard = props => {
    const className = {
        box: 'box',
        purple: props.purple && 'box-purple',
        fullHeight: props.fullHeight && 'box-fullheight' 
    }
    return (
        <div className={Object.values(className).join(' ')}>
            {props.children}
        </div>
    )
}
export default BoxCard;
