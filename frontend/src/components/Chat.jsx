// frontend/src/components/Chat.jsx

import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('123'); // 假设当前用户ID为123

  const sendNotification = async () => {
    try {
      const response = await fetch('http://localhost:5001/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, message })
      });
      const data = await response.json();
      console.log('Notification sent:', data);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const handleSendMessage = () => {
    // 假设已有发送消息的逻辑
    sendNotification(); // 发送通知
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
