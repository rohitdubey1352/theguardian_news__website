import React, { useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    margin: 0;
  }
  #message{
    color: #fff;
    text-align: center;
  }
  
`;

const ChatWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 30rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ChatMessages = styled.ul`
  list-style-type: none;
  padding: 10px;
  height: 82%;
  margin: 0;
  overflow-y: auto;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-top: 1px solid #ddd;
  outline: none;
`;

const ChatButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #724ae8;
  color: #fff;
  border: none;
  border-radius: 0 0 15px 15px;
  cursor: pointer;
  outline: none;
`;

const SmallChatbotWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 35px;
  width: 50px;
  height: 50px;
  background: #724ae8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
`;

//  ............................................... //

const ChatApp = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  const [messages, setMessages] = useState([
    { content: 'Hello! How can I assist you?', type: 'bot' },
  ]);
  const [userMessage, setUserMessage] = useState('');
  const inputRef = useRef(null);

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { content: userMessage, type: 'user' },
    ]);

    // Simulate bot's response (replace with more realistic logic)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: getBotResponse(userMessage), type: 'bot' },
      ]);
    }, 500);

    setUserMessage('');
    inputRef.current.focus();
  };

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hi there! How can I help you today?';
    } else if (lowerCaseMessage.includes('how are you')) {
      return 'I am just a computer program, but thanks for asking!';
    } else if (lowerCaseMessage.includes('how to read the news?')) {
      return 'Just click on the news headline, it redirect you to the original news website!';
    } else if (lowerCaseMessage.includes('thank you') || lowerCaseMessage.includes('thanks')) {
      return 'You\'re welcome!';
    } else if (lowerCaseMessage.includes('good morning')) {
      return 'Good morning! How can I assist you?';
    } else if (lowerCaseMessage.includes('good night')) {
      return 'Good night! If you have more questions, feel free to ask tomorrow.';
    } else if (lowerCaseMessage.includes('today\'s date') || lowerCaseMessage.includes('current date')) {
      const currentDate = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return `Today's date is ${currentDate.toLocaleDateString('en-IN', options)}.`;
    } else {
      return 'I\'m sorry, I didn\'t understand that. If you have a specific question, feel free to ask!';
    }
  };

  return (
    <>
      <GlobalStyle />
      {isChatbotOpen ? (
        <ChatWrapper>
          <ChatMessages>
            {messages.map((message, index) => (
              <li key={index} className={message.type}>
                {message.content}
              </li>
            ))}
          </ChatMessages>
          <ChatInput
            type="text"
            placeholder="Type your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            ref={inputRef}
          />
          <ChatButton onClick={handleSendMessage}>Send</ChatButton>
        </ChatWrapper>
      ) : (
        <SmallChatbotWrapper onClick={toggleChatbot}>
          {/* <SmallChatbotIcon>💬</SmallChatbotIcon> */}
          <span class="material-symbols-rounded" id='message'>mode_comment</span>
        </SmallChatbotWrapper>
      )}
    </>

  );
};


export default ChatApp;
