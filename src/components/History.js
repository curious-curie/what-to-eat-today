import React from 'react';
import './History.css';

const History = ({item,index, onClick}) => {
    return (
        <span className= "history-wrapper" onClick={onClick}>
            #{item}
            { index == 2 && <br/>}
        </span>
        
    );
};

export default History;