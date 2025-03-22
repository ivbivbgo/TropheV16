import React, { useState } from 'react';
import { Send, ThumbsUp, MessageCircle, Search } from 'lucide-react';
import { QA } from '../../types/resources';

interface QASectionProps {
  qaList: QA[];
  organizationAvatar: string;
  organization: string;
  onSubmitQuestion: (question: string) => void;
  onLikeQuestion: (questionId: number) => void;
  onSubmitReply: (questionId: number, reply: string) => void;
}

export function QASection({
  qaList,
  organizationAvatar,
  organization,
  onSubmitQuestion,
  onLikeQuestion,
  onSubmitReply
}: QASectionProps) {
  const [newQuestion, setNewQuestion] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'answered' | 'unanswered'>('all');

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    onSubmitQuestion(newQuestion);
    setNewQuestion('');
  };

  const handleSubmitReply = (questionId: number) => {
    if (!replyContent.trim()) return;
    onSubmitReply(questionId, replyContent);
    setReplyingTo(null);
    setReplyContent('');
  };

  const filteredQA = qaList.filter(qa => {
    const matchesSearch = qa.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         qa.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' ||
                         (filter === 'answered' && qa.institutionResponse) ||
                         (filter === 'unanswered' && !qa.institutionResponse);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mt-12 border-t border-gray-100 pt-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold text-gray-900">Questions & Réponses</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">{qaList.length} questions</span>
          <MessageCircle className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher dans les questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        <div className="flex space-x-2">
          {(['all', 'answered', 'unanswered'] as const).map((value) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === value
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {value === 'all' ? 'Toutes' : value === 'answered' ? 'Répondues' : 'Sans réponse'}
            </button>
          ))}
        </div>
      </div>
      
      <form onSubmit={handleSubmitQuestion} className="mb-12">
        <div className="flex items-start space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
            alt="Your avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Posez votre question..."
              className="w-full p-4 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
              rows={3}
            />
            <button
              type="submit"
              className="mt-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Envoyer</span>
            </button>
          </div>
        </div>
      </form>

      <div className="space-y-8">
        {filteredQA.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            {searchQuery
              ? "Aucune question ne correspond à votre recherche"
              : "Aucune question n'a encore été posée"}
          </div>
        ) : (
          filteredQA.map((qa) => (
            <div key={qa.id} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={qa.authorAvatar}
                  alt={qa.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{qa.author}</h4>
                    <span className="text-sm text-gray-500">{qa.timestamp}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{qa.question}</p>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => onLikeQuestion(qa.id)}
                      className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{qa.likes}</span>
                    </button>
                    {!qa.institutionResponse && (
                      <button
                        onClick={() => setReplyingTo(qa.id)}
                        className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                      >
                        Répondre
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {replyingTo === qa.id && (
                <div className="mt-4 ml-14">
                  <div className="flex items-start space-x-4">
                    <img
                      src={organizationAvatar}
                      alt={organization}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Votre réponse..."
                        className="w-full p-4 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                        rows={3}
                      />
                      <div className="flex justify-end space-x-3 mt-2">
                        <button
                          onClick={() => setReplyingTo(null)}
                          className="px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                          Annuler
                        </button>
                        <button
                          onClick={() => handleSubmitReply(qa.id)}
                          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Répondre</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {qa.institutionResponse && (
                <div className="mt-4 ml-14">
                  <div className="flex items-start space-x-4">
                    <img
                      src={qa.institutionResponse.avatar}
                      alt={qa.institutionResponse.respondent}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-white rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-indigo-600">
                            {qa.institutionResponse.respondent}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {qa.institutionResponse.timestamp}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {qa.institutionResponse.response}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}