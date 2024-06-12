import React from 'react';
import '../styles/App.css';

const Message = ({ message }) => {
    return (
        <div className={`message ${message.success ? 'success' : 'error'}`}>
            {message.message}
        </div>
    );
};

export default Message;

