import React from 'react';
import './History.css';

const History = ({item, onClick}) => {
    return (
        <span className= "history-wrapper" onClick={onClick}>
            #{item}
        </span>
    );
};

export default History;