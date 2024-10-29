import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './LiveChat.css';

const LiveChat = ({ socket, joinedUserData }) => {
  const [messages, setMessages] = useState(joinedUserData.listAllMessages || []);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const handleSendMessage = () => {
    const token = localStorage.getItem('accessToken'); 

    if (!token) {
      navigate('/login'); 
      return;
    }

    if (newMessage.trim()) {
      // Emit the message to the socket server
      socket.emit('sendMessage', {
        token,
        message: newMessage,
      });

      // Update the local state to show the message
      setMessages((prevMessages) => [
        ...prevMessages,
        { senderId: { name: 'You' }, content: newMessage },
      ]);

      setNewMessage(''); 
    }
  };

  useEffect(() => {
   
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

 
  useEffect(() => {
    if (socket) {
      socket.on('receiveMessage', (messageData) => {
        setMessages((prevMessages) => [...prevMessages, messageData]);
      });
    }

    return () => {
      if (socket) {
        socket.off('receiveMessage'); // Cleanup the listener on component unmount
      }
    };
  }, [socket]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="flex-grow overflow-y-auto p-4">
        {messages.length > 0 ? messages.map((message, index) => (
          <div key={index} className="mb-2 flex items-center main_message">
            <div>
              <strong>{message.senderId.name}</strong>
              <p>{message.content}</p>
            </div>
          </div>
        )) : <p>No messages yet</p>}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-gray-800 p-4">
        <div className="sendmessage flex items-center bg-gray-800 rounded-full px-4 py-2 d-flex justify-content-between">
          <input
            type="text"
            width={120}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="bg-transparent flex-grow outline-none text-sm placeholder-gray-400"
          />
          <button onClick={handleSendMessage} className="ml-2">
            <FaPaperPlane className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
