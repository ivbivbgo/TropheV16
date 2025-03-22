import React, { useState } from 'react';
import { PlusCircle, Send, Image, Paperclip, Smile } from 'lucide-react';

const CURRENT_USER_ID = 1;

interface Message {
  id: number;
  content: string;
  senderId: number;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
  messages: Message[];
}

export function Messages() {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');
  const [chats, setChats] = useState<Chat[]>([
    {
      id: 1,
      name: "Thomas Martin",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
      lastMessage: "Merci pour vos conseils !",
      timestamp: "10:30",
      unread: 2,
      online: true,
      messages: [
        {
          id: 1,
          content: "Bonjour ! Comment se passe votre reconversion ?",
          senderId: 2,
          timestamp: "10:25",
          status: 'read'
        },
        {
          id: 2,
          content: "Très bien, merci ! J'ai commencé une formation en management.",
          senderId: CURRENT_USER_ID,
          timestamp: "10:28",
          status: 'read'
        },
        {
          id: 3,
          content: "C'est une excellente nouvelle ! Dans quel domaine exactement ?",
          senderId: 2,
          timestamp: "10:29",
          status: 'read'
        },
        {
          id: 4,
          content: "Je me spécialise dans le management sportif. J'aimerais aider d'autres athlètes dans leur parcours.",
          senderId: CURRENT_USER_ID,
          timestamp: "10:30",
          status: 'read'
        }
      ]
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedChat) return;

    const message: Message = {
      id: Date.now(),
      content: newMessage,
      senderId: CURRENT_USER_ID,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setChats(prevChats => prevChats.map(chat => {
      if (chat.id === selectedChat) {
        return {
          ...chat,
          messages: [...chat.messages, message],
          lastMessage: newMessage,
          timestamp: 'À l\'instant'
        };
      }
      return chat;
    }));

    setNewMessage('');

    // Simulate response
    setTimeout(() => {
      const response: Message = {
        id: Date.now() + 1,
        content: "Je vous réponds dès que possible !",
        senderId: 2,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };

      setChats(prevChats => prevChats.map(chat => {
        if (chat.id === selectedChat) {
          return {
            ...chat,
            messages: [...chat.messages, response],
            lastMessage: response.content,
            timestamp: 'À l\'instant'
          };
        }
        return chat;
      }));
    }, 1000);
  };

  const currentChat = chats.find(chat => chat.id === selectedChat);

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm overflow-hidden flex">
      {/* Chat list */}
      <div className="w-80 border-r border-gray-100">
        <div className="p-4 flex items-center justify-between">
          <input
            type="text"
            placeholder="Rechercher une conversation..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-indigo-500 text-gray-900"
          />
          <button 
            className="ml-2 p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            title="Nouvelle discussion"
          >
            <PlusCircle className="w-6 h-6" />
          </button>
        </div>
        
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
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
              <div className="flex-1 min-w-0 text-left">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
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
      </div>

      {/* Chat area */}
      {selectedChat && currentChat ? (
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={currentChat.avatar}
                alt={currentChat.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">{currentChat.name}</h3>
                <p className="text-sm text-gray-500">
                  {currentChat.online ? 'En ligne' : 'Hors ligne'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {currentChat.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.senderId === CURRENT_USER_ID ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${message.senderId === CURRENT_USER_ID ? 'order-2' : ''}`}>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.senderId === CURRENT_USER_ID
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
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <Image className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Écrivez votre message..."
                className="flex-1 rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
              />
              <button
                type="button"
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
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
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Sélectionnez une conversation pour commencer
        </div>
      )}
    </div>
  );
}