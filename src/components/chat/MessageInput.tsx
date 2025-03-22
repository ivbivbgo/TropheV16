import React, { useState } from 'react';
import { Send, Image, Smile, Paperclip } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (content: string) => void;
}

export function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
        >
          <Image className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
        >
          <Paperclip className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écrivez votre message..."
          className="flex-1 rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
        />
        <button
          type="button"
          className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
        >
          <Smile className="w-5 h-5" />
        </button>
        <button
          type="submit"
          className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}