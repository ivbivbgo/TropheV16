import React, { useState, useRef } from 'react';
import { Image, X, Tag } from 'lucide-react';

interface RequestFormProps {
  onClose: () => void;
  onSubmit: (request: any) => void;
}

const availableTags = [
  { name: "Santé mentale", color: "purple" },
  { name: "Transition", color: "blue" },
  { name: "Adaptation", color: "green" },
  { name: "Formation", color: "orange" },
  { name: "Management", color: "pink" },
  { name: "Reconversion", color: "blue" },
  { name: "Entrepreneuriat", color: "green" },
  { name: "Coaching", color: "purple" },
  { name: "Financement", color: "orange" },
  { name: "Emploi", color: "pink" }
];

export function RequestForm({ onClose, onSubmit }: RequestFormProps) {
  const [newRequest, setNewRequest] = useState({
    title: '',
    content: '',
    selectedTags: [] as typeof availableTags,
    image: null as File | null,
    imagePreview: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewRequest(prev => ({
          ...prev,
          image: file,
          imagePreview: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setNewRequest(prev => ({
      ...prev,
      image: null,
      imagePreview: ''
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const toggleTag = (tag: typeof availableTags[0]) => {
    setNewRequest(prev => {
      const isSelected = prev.selectedTags.some(t => t.name === tag.name);
      if (isSelected) {
        return {
          ...prev,
          selectedTags: prev.selectedTags.filter(t => t.name !== tag.name)
        };
      } else if (prev.selectedTags.length < 3) {
        return {
          ...prev,
          selectedTags: [...prev.selectedTags, tag]
        };
      }
      return prev;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newRequest);
  };

  const getTagColors = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700',
      green: 'bg-green-50 text-green-700',
      purple: 'bg-purple-50 text-purple-700',
      orange: 'bg-orange-50 text-orange-700',
      pink: 'bg-pink-50 text-pink-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Envoyer une requête</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Titre de la requête
            </label>
            <input
              type="text"
              id="title"
              value={newRequest.title}
              onChange={(e) => setNewRequest(prev => ({ ...prev, title: e.target.value }))}
              className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Ex: Recherche conseils pour reconversion dans le coaching"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Description détaillée
            </label>
            <textarea
              id="content"
              value={newRequest.content}
              onChange={(e) => setNewRequest(prev => ({ ...prev, content: e.target.value }))}
              rows={6}
              className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Décrivez votre situation et vos besoins..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image (optionnel)
            </label>
            <div className="mt-1 flex items-center space-x-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
              >
                <Image className="w-5 h-5" />
                <span>Ajouter une image</span>
              </button>
              {newRequest.imagePreview && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="text-red-500 hover:text-red-700"
                >
                  Supprimer
                </button>
              )}
            </div>
            {newRequest.imagePreview && (
              <div className="mt-4 relative">
                <img
                  src={newRequest.imagePreview}
                  alt="Preview"
                  className="max-h-48 rounded-lg object-cover"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (maximum 3)
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag.name}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    newRequest.selectedTags.some(t => t.name === tag.name)
                      ? getTagColors(tag.color)
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Publier la requête
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}