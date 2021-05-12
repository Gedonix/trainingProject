import React from 'react';
import Message from '../Message/index.jsx';
import AddMessage from '../AddMessage/index.jsx';
import { connect } from 'react-redux';
import './index.css';

function MessageList({content}){
    return (
        <div className="right">            
            <div className="messageBox">
                { content.map(element => {
                    return (
                        <Message key={element.mid} message={element}/>
                    )                    
                })}                
            </div>
            { content.length === 0
                ? <div></div>
                : <AddMessage />
            }              
        </div>
    )
}

const mapStateToProps = state => {
    const {gid, allChannels} = state.channels; 
    const content = (gid === 0) ? [] : allChannels[gid].messages;
    return {content};
};

export default connect(mapStateToProps)(MessageList);