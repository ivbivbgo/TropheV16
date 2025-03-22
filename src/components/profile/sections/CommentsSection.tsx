import React from 'react';
import { MessageCircle, ThumbsUp, Reply } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
}

export function CommentsSection() {
  const comments: Comment[] = [
    {
      id: 1,
      author: "Marie Laurent",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
      content: "Excellent parcours ! Votre expérience est vraiment inspirante.",
      timestamp: "Il y a 2 heures",
      likes: 12,
      replies: 3
    },
    {
      id: 2,
      author: "Thomas Bernard",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
      content: "Bravo pour votre reconversion réussie !",
      timestamp: "Il y a 5 heures",
      likes: 8,
      replies: 1
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <MessageCircle className="w-6 h-6 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-900">Commentaires</h3>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <img
              src={comment.authorAvatar}
              alt={comment.author}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{comment.author}</h4>
                  <span className="text-sm text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="text-gray-600">{comment.content}</p>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600 text-sm">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{comment.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600 text-sm">
                  <Reply className="w-4 h-4" />
                  <span>{comment.replies} réponses</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        <form className="mt-8">
          <textarea
            placeholder="Ajouter un commentaire..."
            rows={3}
            className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Commenter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}