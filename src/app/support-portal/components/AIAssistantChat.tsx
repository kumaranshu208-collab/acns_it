'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: string;
}

const AIAssistantChat: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your AI support assistant. How can I help you today?',
      timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isHydrated]);

  if (!isHydrated) return null;

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'I understand your concern. Let me help you with that. Would you like me to create a support ticket or connect you with a live technician?',
        timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-secondary hover:bg-secondary/90 text-secondary-foreground p-4 rounded-full shadow-elevated hover:shadow-brand transition-all duration-300 hover:scale-110"
        aria-label="Open AI Assistant"
      >
        <Icon name={isOpen ? 'XMarkIcon' : 'ChatBubbleLeftRightIcon'} size={28} />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-card rounded-xl shadow-elevated border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-secondary to-primary p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-secondary-foreground/20 p-2 rounded-lg">
                <Icon name="SparklesIcon" size={24} className="text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-secondary-foreground">
                  AI Assistant
                </h3>
                <p className="text-xs text-secondary-foreground/80">Online • Instant responses</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-secondary-foreground/20 rounded-lg transition-colors duration-300"
            >
              <Icon name="XMarkIcon" size={20} className="text-secondary-foreground" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user' ?'bg-primary text-primary-foreground' :'bg-card border border-border text-text-primary'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-primary-foreground/70' : 'text-text-secondary'
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-border bg-card">
            <div className="flex items-end space-x-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows={2}
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 resize-none text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="p-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="PaperAirplaneIcon" size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistantChat;