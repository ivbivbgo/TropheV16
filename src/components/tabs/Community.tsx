import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Image, X, Send, Plus, Tag, Sparkles, Upload } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  authorImage: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  tags?: Array<{ name: string; color: string; }>;
}

export function Community() {
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    image: '',
    tags: [] as Array<{ name: string; color: string; }>
  });
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Marie Laurent",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
      title: "Ma transition vers le coaching sportif",
      content: "Après 12 ans en tant qu'athlète professionnelle, j'ai décidé de me lancer dans le coaching. Voici mon expérience et mes conseils pour ceux qui envisagent cette voie...",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60",
      likes: 124,
      comments: 45,
      shares: 12,
      timestamp: "Il y a 2 heures",
      tags: [
        { name: "Reconversion", color: "blue" },
        { name: "Coaching", color: "purple" },
        { name: "Experience", color: "green" }
      ]
    },
    {
      id: 2,
      author: "Thomas Martin",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
      title: "Du terrain à l'entrepreneuriat",
      content: "Le sport m'a appris la discipline et la persévérance. Ces qualités sont aujourd'hui essentielles dans mon rôle de chef d'entreprise. Voici comment j'ai fait la transition...",
      image: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=800&auto=format&fit=crop&q=60",
      likes: 89,
      comments: 23,
      shares: 8,
      timestamp: "Il y a 5 heures",
      tags: [
        { name: "Entrepreneuriat", color: "purple" },
        { name: "Business", color: "blue" }
      ]
    },
    {
      id: 3,
      author: "Sophie Bernard",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
      title: "Formation continue : mon retour d'expérience",
      content: "Se former tout en maintenant une carrière sportive n'est pas facile, mais c'est possible. Voici les ressources qui m'ont aidée...",
      likes: 156,
      comments: 34,
      shares: 15,
      timestamp: "Il y a 1 jour",
      tags: [
        { name: "Formation", color: "green" },
        { name: "Education", color: "blue" }
      ]
    }
  ]);

  const handleCreatePost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) return;

    const post: Post = {
      id: Date.now(),
      author: "Thomas Martin",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: "À l'instant",
      tags: newPost.tags
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', image: '', tags: [] });
    setShowNewPostModal(false);
  };

  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      <div className="max-w-3xl mx-auto pb-24 px-4">
        <div className="space-y-8 mt-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {post.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{post.content}</p>

                {post.image && (
                  <div className="relative h-96 -mx-8 mb-6">
                    <img
                      src={post.image}
                      alt="Post illustration"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                )}

                {post.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-${tag.color}-100 text-${tag.color}-700`}
                      >
                        <Tag className="w-4 h-4 mr-2" />
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center space-x-8 text-gray-500">
                  <button className="flex items-center space-x-2 hover:text-red-500">
                    <Heart className="w-6 h-6" />
                    <span className="text-lg">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-500">
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-lg">{post.comments} commentaires</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-green-500">
                    <Share2 className="w-6 h-6" />
                    <span className="text-lg">{post.shares}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto m-4">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Créer une publication</h2>
              <button 
                onClick={() => setShowNewPostModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre
                </label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Donnez un titre à votre publication"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenu
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                  rows={6}
                  className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Partagez votre expérience..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 transition-colors cursor-pointer">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                        <span>Télécharger une image</span>
                        <input type="file" className="sr-only" accept="image/*" onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setNewPost(prev => ({ ...prev, image: reader.result as string }));
                            };
                            reader.readAsDataURL(file);
                          }
                        }} />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG jusqu'à 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowNewPostModal(false)}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Annuler
                </button>
                <button
                  onClick={handleCreatePost}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  Publier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setShowNewPostModal(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center group z-50"
        title="Nouvelle publication"
      >
        <Plus className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}