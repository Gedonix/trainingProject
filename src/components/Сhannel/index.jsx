import React from 'react';
import { connect } from 'react-redux';
import { selectChannel } from '../../redux/actions.js';
import './index.css';

function Channel({channel, selectChannel}){
    const classes = ['li'];
    if(channel.isSelected) classes.push('selected')
    return(
        <li 
        className={classes.join(' ')} 
        onClick={() => selectChannel(channel.id)}>
        {channel.title}
        </li>
    )
}

export default connect(
    null,
    { selectChannel }
)(Channel);