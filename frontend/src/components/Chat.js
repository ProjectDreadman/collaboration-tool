import React from 'react';

function Chat({ messages }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  );
}

export default Chat;
