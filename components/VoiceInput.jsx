// src/components/VoiceInput.jsx
import React, { useState } from 'react';
import './VoiceInput.css';

const VoiceInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="voice-input">
      <input
        type="text"
        value={input}
        placeholder="Ask your question..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default VoiceInput;
