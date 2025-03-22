import React from 'react';
import { MoreVertical, Phone, Video } from 'lucide-react';
import { Chat } from '../../types/chat';

interface ChatHeaderProps {
  chat: Chat;
}

export function ChatHeader({ chat }: ChatHeaderProps) {
  return (
    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img
          src={chat.avatar}
          alt={chat.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium">{chat.name}</h3>
          <p className="text-sm text-gray-500">
            {chat.online ? 'En ligne' : 'Hors ligne'}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
          <Phone className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
          <Video className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}