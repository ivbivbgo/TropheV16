import React, { useEffect, useRef } from 'react';
import { Message } from '../../types/chat';

interface MessageListProps {
  messages: Message[];
  currentUserId: number;
}

export function MessageList({ messages, currentUserId }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.senderId === currentUserId ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`max-w-[70%] ${message.senderId === currentUserId ? 'order-2' : ''}`}>
            <div
              className={`rounded-2xl px-4 py-2 ${
                message.senderId === currentUserId
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p>{message.content}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {message.timestamp}
            </p>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}