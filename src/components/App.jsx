import React from 'react';
import Header from './Header/index.jsx';
import ChannelList from './СhannelList/index.jsx';
import MessageList from './MessageList/index.jsx';
import './App.css';

function App(){
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <ChannelList />
                <MessageList />                               
            </div>
        </div>
    )
}

export default App