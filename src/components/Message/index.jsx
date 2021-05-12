import React from 'react';
import './index.css';

function Message({message}){
    return(
        <React.Fragment>
            <p>{message.send} : {message.text}</p>
        </React.Fragment>
    )
}

export default Message