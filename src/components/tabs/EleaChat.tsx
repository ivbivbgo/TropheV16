import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, Image, Paperclip, Eraser, Copy, Check, Loader2 } from 'lucide-react';

interface ChatMessage {
  id: number;
  content: string;
  isBot: boolean;
  timestamp: string;
  status: 'sending' | 'sent' | 'error';
  suggestions?: string[];
}

export function EleaChat() {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      content: "Bonjour ! Je suis Elea, votre assistante spécialisée en reconversion sportive. Je peux vous aider avec :\n\n• L'orientation professionnelle\n• Les formations adaptées\n• Les opportunités de carrière\n• Le développement de compétences\n\nComment puis-je vous aider aujourd'hui ?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
      suggestions: [
        "Quelles formations sont disponibles ?",
        "Comment valoriser mon expérience sportive ?",
        "Conseils pour la transition de carrière"
      ]
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      content: message,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        content: "Je comprends votre situation. Voici quelques suggestions personnalisées basées sur votre profil et votre expérience sportive...",
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent',
        suggestions: [
          "En savoir plus sur ce sujet",
          "Voir les formations recommandées",
          "Parler à un expert"
        ]
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  const handleCopyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Elea - Votre assistante</h2>
            <p className="text-sm text-gray-500">Propulsée par Gemini AI</p>
          </div>
        </div>
        <button
          onClick={() => setMessages([messages[0]])}
          className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
          title="Effacer la conversation"
        >
          <Eraser className="w-5 h-5" />
        </button>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 bg-white rounded-lg shadow-sm p-6 mb-4 overflow-auto">
        <div className="space-y-6">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-start space-x-3 ${msg.isBot ? '' : 'justify-end'}`}
            >
              {msg.isBot && (
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-indigo-600" />
                </div>
              )}
              <div className={`group max-w-[80%] space-y-2`}>
                <div 
                  className={`relative rounded-2xl px-4 py-2 ${
                    msg.isBot 
                      ? 'bg-gray-100 text-gray-900' 
                      : 'bg-indigo-600 text-white'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                  {msg.isBot && (
                    <button
                      onClick={() => handleCopyMessage(msg.content)}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded-lg bg-white/50 hover:bg-white/80 transition-opacity"
                      title="Copier le message"
                    >
                      <Copy className="w-4 h-4 text-gray-500" />
                    </button>
                  )}
                </div>
                {msg.suggestions && (
                  <div className="flex flex-wrap gap-2">
                    {msg.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
                <p className="text-xs text-gray-500">{msg.timestamp}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="bg-gray-100 rounded-2xl px-4 py-2">
                <Loader2 className="w-5 h-5 text-gray-500 animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-4">
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Posez votre question à Elea..."
            className="flex-1 rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
          />
          <button 
            type="submit"
            disabled={isTyping}
            className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isTyping ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Envoyer</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}