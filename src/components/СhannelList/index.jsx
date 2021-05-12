import React, { useState } from 'react';
import Channel from '../Сhannel/index.jsx';
import AddChannel from '../AddChannel/index.jsx';
import { connect } from 'react-redux';
import './index.css';

function ChannelList({channels}){
    return(
        <div className="left">
            <h3 className="h3">КАНАЛЫ</h3>
            <ul className="ul">
                { channels.map(element => {
                    return (
                        <Channel 
                        key={element.id}
                        channel={element} />)
                })}
            </ul>
           <AddChannel/>
        </div>
    )
}

const mapStateToProps = state => {
    const {allChannels} = state.channels; 
    const  channels = Object.keys(allChannels).map(id => ({ ...allChannels[id], id }));
    return {channels};
};

export default connect(mapStateToProps)(ChannelList);