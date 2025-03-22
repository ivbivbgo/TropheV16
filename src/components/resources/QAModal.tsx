import React from 'react';
import { X, Heart } from 'lucide-react';
import { Resource } from '../../types/resources';

interface QAModalProps {
  resource: Resource;
  onClose: () => void;
}

export function QAModal({ resource, onClose }: QAModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-indigo-50 to-purple-50">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Questions & Réponses
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          {resource.qa.map((qa) => (
            <div key={qa.id} className="mb-8 last:mb-0">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={qa.authorAvatar}
                  alt={qa.author}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                />
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{qa.author}</h4>
                    <p className="text-gray-600">{qa.question}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>{qa.timestamp}</span>
                    <button className="flex items-center space-x-1 hover:text-indigo-600 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{qa.likes}</span>
                    </button>
                  </div>
                </div>
              </div>

              {qa.institutionResponse && (
                <div className="flex items-start space-x-4 ml-16">
                  <img
                    src={qa.institutionResponse.avatar}
                    alt={qa.institutionResponse.respondent}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  />
                  <div className="flex-1">
                    <div className="bg-indigo-50 rounded-2xl p-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        {qa.institutionResponse.respondent}
                      </h4>
                      <p className="text-gray-600">
                        {qa.institutionResponse.response}
                      </p>
                    </div>
                    <span className="block mt-2 text-sm text-gray-500">
                      {qa.institutionResponse.timestamp}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}