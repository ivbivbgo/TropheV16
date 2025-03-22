import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Share2, Tag, ArrowLeft, Send } from 'lucide-react';

interface Response {
  id: number;
  author: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
}

interface QuestionDetailProps {
  question: any;
  onBack: () => void;
}

export function QuestionDetail({ question, onBack }: QuestionDetailProps) {
  const [newResponse, setNewResponse] = useState('');
  const [responses, setResponses] = useState<Response[]>([
    {
      id: 1,
      author: "Dr. Philippe Martin",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
      content: "La transition est effectivement un moment délicat. Je vous conseille de commencer par établir une nouvelle routine quotidienne et de maintenir une activité physique régulière. N'hésitez pas à consulter un psychologue du sport qui pourra vous accompagner dans cette phase.",
      timestamp: "Il y a 1 heure",
      likes: 12
    },
    {
      id: 2,
      author: "Sophie Bernard",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
      content: "J'ai vécu la même situation il y a 2 ans. Ce qui m'a beaucoup aidé c'est de rejoindre des groupes d'anciens athlètes et de partager nos expériences. Je peux vous recommander quelques associations si vous le souhaitez.",
      timestamp: "Il y a 30 minutes",
      likes: 8
    }
  ]);

  const handleSubmitResponse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResponse.trim()) return;

    const response: Response = {
      id: Date.now(),
      author: "Thomas Martin",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
      content: newResponse,
      timestamp: "À l'instant",
      likes: 0
    };

    setResponses([...responses, response]);
    setNewResponse('');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Retour aux questions</span>
      </button>

      <article className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={question.authorAvatar}
              alt={question.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">{question.author}</h3>
              <p className="text-sm text-gray-500">{question.timestamp}</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {question.title}
          </h2>
          <p className="text-gray-600 mb-4">{question.content}</p>

          {question.image && (
            <div className="relative h-64 -mx-6 mb-4">
              <img
                src={question.image}
                alt="Question illustration"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {question.tags.map((tag: any, index: number) => (
              <span
                key={index}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${tag.color}-50 text-${tag.color}-700`}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag.name}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-6 text-gray-500">
            <button className="flex items-center space-x-2 hover:text-red-500">
              <ThumbsUp className="w-5 h-5" />
              <span>{question.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <MessageCircle className="w-5 h-5" />
              <span>{responses.length} réponses</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-500">
              <Share2 className="w-5 h-5" />
              <span>{question.shares}</span>
            </button>
          </div>
        </div>
      </article>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Réponses</h3>
          <div className="space-y-6">
            {responses.map((response) => (
              <div key={response.id} className="flex space-x-4">
                <img
                  src={response.authorAvatar}
                  alt={response.author}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{response.author}</h4>
                      <span className="text-sm text-gray-500">{response.timestamp}</span>
                    </div>
                    <p className="text-gray-600">{response.content}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600 text-sm">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{response.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <form onSubmit={handleSubmitResponse} className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Votre réponse</h3>
          <div className="flex space-x-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
              alt="Your avatar"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <textarea
                value={newResponse}
                onChange={(e) => setNewResponse(e.target.value)}
                placeholder="Écrivez votre réponse..."
                className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                rows={4}
                required
              />
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Répondre</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}