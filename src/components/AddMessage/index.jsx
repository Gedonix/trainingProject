import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBlock } from '../../redux/actions.js';
import './index.css';

function AddMessage({canSend, addBlock}){
    const [value, setValue] = useState('');
    
    function sendMessage(){
        if( canSend && value.trim()){
            addBlock(value);
            setValue('');             
       }
    }

    function submitHandle(event){
        event.preventDefault();
        sendMessage();    
    }

    function handleKeyUp(event){
        if (event.keyCode === 13) {
            sendMessage();
        }
    }

    return(
        <React.Fragment>
            <form onSubmit={submitHandle}>
                <input 
                className="inputMessage"
                value={value}
                onChange={(event => setValue(event.target.value))}
                onKeyUp={handleKeyUp}/>
                <button 
                type="submit" 
                className="btnAddMessage"
                disabled={false}
                > + </button>
            </form>
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    const {gid, allChannels} = state.channels; 
    const content = (gid === 0) ? [] : allChannels[gid].messages;
    let exp = Object.entries(content[content.length - 1]).find(([key, value]) => (key === 'send') && (value === 'БОТ'));
    let canSend = (exp === undefined) ? false : true;
    return {canSend};
};

export default connect(
    mapStateToProps,
    { addBlock }
)(AddMessage);