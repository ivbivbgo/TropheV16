import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Share2, Tag, HelpingHand, Search } from 'lucide-react';
import { RequestForm } from '../help/RequestForm';
import { QuestionDetail } from '../help/QuestionDetail';

interface Question {
  id: number;
  author: string;
  authorAvatar: string;
  title: string;
  content: string;
  tags: Array<{
    name: string;
    color: 'blue' | 'green' | 'purple' | 'orange' | 'pink';
  }>;
  image?: string;
  likes: number;
  answers: number;
  shares: number;
  timestamp: string;
}

export function Help() {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      author: "Marie Laurent",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
      title: "Comment gérer la transition mentale après une carrière sportive ?",
      content: "Après 15 ans en tant qu'athlète professionnelle, je trouve difficile de m'adapter à une nouvelle routine. Quels conseils pourriez-vous me donner ?",
      tags: [
        { name: "Santé mentale", color: "purple" },
        { name: "Transition", color: "blue" },
        { name: "Adaptation", color: "green" }
      ],
      likes: 24,
      answers: 8,
      shares: 5,
      timestamp: "Il y a 2 heures"
    }
  ]);

  const handleSubmitRequest = (request: any) => {
    const newQuestion: Question = {
      id: Date.now(),
      author: "Thomas Martin",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
      title: request.title,
      content: request.content,
      tags: request.selectedTags,
      image: request.imagePreview || undefined,
      likes: 0,
      answers: 0,
      shares: 0,
      timestamp: "À l'instant"
    };
    setQuestions([newQuestion, ...questions]);
    setShowRequestForm(false);
  };

  const filteredQuestions = questions.filter(question =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    question.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    question.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (showRequestForm) {
    return (
      <RequestForm 
        onClose={() => setShowRequestForm(false)}
        onSubmit={handleSubmitRequest}
      />
    );
  }

  if (selectedQuestion) {
    return (
      <QuestionDetail
        question={selectedQuestion}
        onBack={() => setSelectedQuestion(null)}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="sticky top-[64px] bg-gray-50 z-50 -mx-4 px-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <button 
            onClick={() => setShowRequestForm(true)}
            className="ml-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center space-x-2"
          >
            <HelpingHand className="w-5 h-5" />
            <span>Envoyer une requête</span>
          </button>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        {filteredQuestions.map((question) => (
          <article 
            key={question.id}
            onClick={() => setSelectedQuestion(question)}
            className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200"
          >
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={question.authorAvatar}
                  alt={question.author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{question.author}</h3>
                  <p className="text-sm text-gray-500">{question.timestamp}</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {question.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">{question.content}</p>

              {question.image && (
                <div className="relative h-96 -mx-8 mb-6">
                  <img
                    src={question.image}
                    alt="Question illustration"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {question.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-${tag.color}-100 text-${tag.color}-700`}
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-8 text-gray-500">
                <button className="flex items-center space-x-2 hover:text-red-500">
                  <ThumbsUp className="w-6 h-6" />
                  <span className="text-lg">{question.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-lg">{question.answers} réponses</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-500">
                  <Share2 className="w-6 h-6" />
                  <span className="text-lg">{question.shares}</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}