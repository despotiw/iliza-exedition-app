// src/pages/AIAssistant.jsx
import React, { useState } from 'react';
import '../styles/AIAssistant.css';
import ChatWindow from '../components/ChatWindow';
import VoiceInput from '../components/VoiceInput';

const AIAssistant = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async (message) => {
    // For demonstration, append the message and a dummy response.
    setChatHistory(prev => [...prev, { sender: 'user', text: message }]);
    // Simulate API call to OpenAI here.
    setTimeout(() => {
      setChatHistory(prev => [...prev, { sender: 'ai', text: `You asked: "${message}"` }]);
    }, 1000);
  };

  return (
    <div className="ai-assistant-page">
      <h2>AI Assistant</h2>
      <ChatWindow chatHistory={chatHistory} />
      <VoiceInput onSend={handleSendMessage} />
    </div>
  );
};

export default AIAssistant;

