import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addChannel } from '../../redux/actions.js';
import './index.css';

function AddChannel({addChannel}){
    const [value, setValue] = useState('');

    function submitHandle(event){
        event.preventDefault();
        if(value.trim()){
            addChannel(value);
            setValue('');
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={submitHandle}>
                <input value={value} onChange={event => setValue(event.target.value)}/>
                <button type="submit">Создать канал</button>
            </form>
        </React.Fragment>        
    )
}

export default connect(
    null,
    { addChannel }
)(AddChannel);