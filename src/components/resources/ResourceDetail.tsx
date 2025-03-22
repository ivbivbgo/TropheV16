import React from 'react';
import { ArrowLeft, ExternalLink, Tag, CalendarClock, Euro, GraduationCap, Heart, MessageCircle, Share2, Globe, Send } from 'lucide-react';
import { Resource, QA } from '../../types/resources';
import { QASection } from './QASection';

interface ResourceDetailProps {
  resource: Resource;
  onBack: () => void;
}

export function ResourceDetail({ resource, onBack }: ResourceDetailProps) {
  const [hasApplied, setHasApplied] = React.useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 mb-6 bg-white px-4 py-2 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Retour aux dispositifs</span>
      </button>

      <article className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="relative h-96">
          <img 
            src={resource.banner}
            alt={resource.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={resource.organizationAvatar}
                  alt={resource.organization}
                  className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                />
                <div className="text-white">
                  <h3 className="text-2xl font-semibold">{resource.organization}</h3>
                  <p className="text-white/90 flex items-center mt-1">
                    <Globe className="w-5 h-5 mr-2" />
                    {resource.type === 'public' ? 'Institution publique' : 'Organisation privée'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setHasApplied(!hasApplied)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  hasApplied
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-white text-indigo-600 hover:bg-white/90'
                }`}
              >
                <Send className="w-5 h-5" />
                <span>{hasApplied ? 'Candidature envoyée' : 'Postuler'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{resource.title}</h1>
          <h2 className="text-xl text-gray-600 mb-6">{resource.description}</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {resource.tags.map((tag, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${tag.color}-50 text-${tag.color}-700`}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag.label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
            <div className="flex items-center space-x-2">
              <CalendarClock className="w-5 h-5 text-indigo-500" />
              <span className="text-sm text-gray-600">{resource.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Euro className="w-5 h-5 text-indigo-500" />
              <span className="text-sm text-gray-600">{resource.funding}</span>
            </div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-indigo-500" />
              <span className="text-sm text-gray-600">{resource.eligibility}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500">
                <Heart className="w-5 h-5" />
                <span>{resource.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                <MessageCircle className="w-5 h-5" />
                <span>{resource.qa.length} questions</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
                <Share2 className="w-5 h-5" />
                <span>{resource.shares}</span>
              </button>
            </div>

            <a 
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Voir le dispositif
              <ExternalLink className="w-4 h-4 ml-2 inline-block" />
            </a>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <div className="text-gray-600 whitespace-pre-line">
              {resource.fullDescription}
            </div>
          </div>

          {resource.additionalImages && (
            <div className="grid grid-cols-2 gap-4 mb-8">
              {resource.additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${resource.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          )}

          <QASection
            qaList={resource.qa}
            organizationAvatar={resource.organizationAvatar}
            organization={resource.organization}
            onSubmitQuestion={() => {}}
            onLikeQuestion={() => {}}
            onSubmitReply={() => {}}
          />
        </div>
      </article>
    </div>
  );
}