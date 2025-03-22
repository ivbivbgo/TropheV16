import React from 'react';
import { Chat } from '../../types/chat';

interface ChatListProps {
  chats: Chat[];
  selectedChat: number | null;
  onSelectChat: (chatId: number) => void;
}

export function ChatList({ chats, selectedChat, onSelectChat }: ChatListProps) {
  return (
    <div className="overflow-y-auto h-[calc(100%-4rem)]">
      {chats.map((chat) => (
        <button
          key={chat.id}
          onClick={() => onSelectChat(chat.id)}
          className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-50 ${
            selectedChat === chat.id ? 'bg-indigo-50' : ''
          }`}
        >
          <div className="relative">
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            {chat.online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium truncate">{chat.name}</h3>
              <span className="text-xs text-gray-500">{chat.timestamp}</span>
            </div>
            <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
          </div>
          {chat.unread > 0 && (
            <span className="bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              {chat.unread}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}