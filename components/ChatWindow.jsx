// src/components/ChatWindow.jsx
import React from 'react';
import './ChatWindow.css';

const ChatWindow = ({ chatHistory }) => {
  return (
    <div className="chat-window">
      {chatHistory.map((msg, idx) => (
        <div key={idx} className={`chat-message ${msg.sender}`}>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
