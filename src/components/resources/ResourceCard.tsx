import React from 'react';
import { Tag, CalendarClock, Euro, GraduationCap, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Resource } from '../../types/resources';

interface ResourceCardProps {
  resource: Resource;
  onClick: () => void;
  viewMode: 'grid' | 'list';
}

export function ResourceCard({ resource, onClick, viewMode }: ResourceCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer group"
    >
      <div className="flex">
        <div className="w-72 relative flex-shrink-0">
          <img
            src={resource.banner}
            alt={resource.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center space-x-3">
            <img
              src={resource.organizationAvatar}
              alt={resource.organization}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-white">{resource.organization}</h3>
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <span>{resource.type === 'public' ? 'Institution publique' : 'Organisation privée'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#7C3AED] transition-colors duration-200 mb-3">{resource.title}</h2>
            <p className="text-base text-gray-600 mb-4">{resource.description}</p>

            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium bg-${tag.color}-50 text-${tag.color}-700`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-2 hover:text-red-500">
                  <Heart className="w-5 h-5" />
                  <span>{resource.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <MessageCircle className="w-5 h-5" />
                  <span>{resource.qa.length}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-500">
                  <Share2 className="w-5 h-5" />
                  <span>{resource.shares}</span>
                </button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center space-x-2">
                  <CalendarClock className="w-4 h-4" />
                  <span>{resource.duration}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Euro className="w-4 h-4" />
                  <span>{resource.funding}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{resource.eligibility}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}