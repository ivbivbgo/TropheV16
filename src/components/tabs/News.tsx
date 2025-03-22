import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Trophy, Briefcase, Mail, Building2, GraduationCap, Target, Users, Star, Calendar, Tag, Heart, MessageCircle, Share2, PenSquare, X, ArrowLeft, Send, Image as ImageIcon, Video, ChevronLeft, ChevronRight, Edit2 } from 'lucide-react';
import { NEWS_POSTS } from '../../data/news';

interface CreatePostModalProps {
  onClose: () => void;
  onSubmit: (post: any) => void;
  editingPost?: any;
}

function CreatePostModal({ onClose, onSubmit, editingPost }: CreatePostModalProps) {
  const [title, setTitle] = useState(editingPost?.title || '');
  const [content, setContent] = useState(editingPost?.content || '');
  const [video, setVideo] = useState<string | null>(editingPost?.video || null);
  const [images, setImages] = useState<string[]>(editingPost?.images || []);
  const [selectedTags, setSelectedTags] = useState<Array<{ name: string; color: string }>>(editingPost?.tags || []);
  const [newTag, setNewTag] = useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const videoInputRef = React.useRef<HTMLInputElement>(null);

  const tagColors = [
    "bg-purple-100 text-purple-800",
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-orange-100 text-orange-800",
    "bg-pink-100 text-pink-800"
  ];

  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(file.name);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        if (images.length < 5) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImages(prev => [...prev, reader.result as string]);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const postData = {
      id: editingPost?.id || Date.now(),
      title,
      content,
      video: video || undefined,
      image: images[0],
      images: images.length > 1 ? images : undefined,
      date: editingPost ? editingPost.date : "À l'instant",
      category: "personal",
      author: "Thomas Martin",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
      authorRole: "Athlète",
      likes: editingPost?.likes || 0,
      comments: editingPost?.comments || 0,
      shares: editingPost?.shares || 0,
      tags: selectedTags
    };
    onSubmit(postData);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTag.trim() && selectedTags.length < 3) {
      e.preventDefault();
      const randomColor = tagColors[Math.floor(Math.random() * tagColors.length)];
      setSelectedTags(prev => [...prev, { name: newTag.trim(), color: randomColor }]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(prev => prev.filter(tag => tag.name !== tagToRemove));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl m-4">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            {editingPost ? 'Modifier la publication' : 'Créer une publication'}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
              alt="Your avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">Thomas Martin</h3>
              <p className="text-sm text-gray-500">Athlète</p>
            </div>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre de votre publication"
              className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              required
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Que souhaitez-vous partager ?"
              rows={4}
              className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none text-base"
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags (maximum 3)
              </label>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color} flex items-center`}
                    >
                      {tag.name}
                      <button
                        type="button"
                        onClick={() => removeTag(tag.name)}
                        className="ml-2 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
                {selectedTags.length < 3 && (
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Tapez un tag et appuyez sur Entrée"
                    className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleVideoSelect}
                  className="hidden"
                />
                {video ? (
                  <div className="relative">
                    <div className="w-full h-24 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Video className="w-8 h-8 text-gray-400" />
                      <span className="text-sm text-gray-600 ml-2">{video}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setVideo(null)}
                      className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-lg hover:bg-black/70"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => videoInputRef.current?.click()}
                    className="w-full h-24 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
                  >
                    <Video className="w-6 h-6 mb-1" />
                    <span className="text-xs">Ajouter une vidéo</span>
                  </button>
                )}
              </div>

              <div>
                {images[0] ? (
                  <div className="relative">
                    <img
                      src={images[0]}
                      alt="Preview 1"
                      className="w-full h-24 object-cover rounded-xl"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(0)}
                      className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-lg hover:bg-black/70"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-24 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
                  >
                    <ImageIcon className="w-6 h-6 mb-1" />
                    <span className="text-xs">Ajouter une photo</span>
                  </button>
                )}
              </div>

              {images.length > 0 && (
                <div className="col-span-2">
                  <div className="grid grid-cols-3 gap-2">
                    {images.slice(1).map((image, index) => (
                      <div key={index + 1} className="relative">
                        <img
                          src={image}
                          alt={`Preview ${index + 2}`}
                          className="w-full h-24 object-cover rounded-xl"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index + 1)}
                          className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-lg hover:bg-black/70"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    {images.length < 5 && (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full h-24 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
                      >
                        <ImageIcon className="w-6 h-6 mb-1" />
                        <span className="text-xs">Ajouter des photos</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
              multiple
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{editingPost ? 'Mettre à jour' : 'Publier'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface PostCardProps {
  post: any;
  onPostClick: () => void;
  onEdit?: () => void;
}

function PostCard({ post, onPostClick, onEdit }: PostCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleInteractionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onEdit?.();
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (post.images && currentImageIndex < post.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (post.images && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const isOwnPost = post.author === "Thomas Martin";

  return (
    <div 
      onClick={onPostClick}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">{post.author}</h3>
              <p className="text-sm text-gray-500">{post.authorRole}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
          {isOwnPost && onEdit && (
            <button
              onClick={handleEditClick}
              className="p-2 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-gray-50"
            >
              <Edit2 className="w-5 h-5" />
            </button>
          )}
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {post.title}
        </h2>
        <p className="text-base text-gray-600 mb-3 line-clamp-1">{post.content}</p>

        {post.images ? (
          <div className="relative h-48 -mx-4 mb-3 group">
            <img
              src={post.images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {post.images.length > 1 && (
              <>
                {currentImageIndex > 0 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}
                {currentImageIndex < post.images.length - 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
                
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white rounded-full text-sm">
                  {currentImageIndex + 1} / {post.images.length}
                </div>
              </>
            )}
          </div>
        ) : post.image ? (
          <div className="relative h-48 -mx-4 mb-3">
            <img
              src={post.image}
              alt="Post illustration"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ) : null}

        {post.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: any, index: number) => (
              <span
                key={index}
                className={`px-2.5 py-1 rounded-full text-sm font-medium ${tag.color}`}
                onClick={handleInteractionClick}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center space-x-8 text-gray-500">
          <button 
            onClick={handleInteractionClick}
            className="flex items-center space-x-2 hover:text-red-500 transition-colors"
          >
            <Heart className="w-5 h-5" />
            <span>{post.likes}</span>
          </button>
          <button 
            onClick={handleInteractionClick}
            className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments} commentaires</span>
          </button>
          <button 
            onClick={handleInteractionClick}
            className="flex items-center space-x-2 hover:text-green-500 transition-colors"
          >
            <Share2 className="w-5 h-5" />
            <span>{post.shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

interface PostViewProps {
  post: any;
  onBack: () => void;
  onEdit?: () => void;
}

function PostView({ post, onBack, onEdit }: PostViewProps) {
  const [newComment, setNewComment] = useState('');
  
  const [comments] = useState([
    {
      id: 1,
      author: "Marie Laurent",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
      content: "Excellent parcours ! Votre expérience est vraiment inspirante.",
      timestamp: "Il y a 2 heures",
      likes: 12
    },
    {
      id: 2,
      author: "Thomas Bernard",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
      content: "Merci pour ce partage d'expérience très enrichissant !",
      timestamp: "Il y a 3 heures",
      likes: 8
    }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    setNewComment('');
  };

  const isOwnPost = post.author === "Thomas Martin";

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </button>
          {isOwnPost && onEdit && (
            <button
              onClick={onEdit}
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
            >
              <Edit2 className="w-5 h-5" />
              <span>Modifier</span>
            </button>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium text-gray-900">{post.author}</h3>
            <p className="text-sm text-gray-500">{post.authorRole}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{post.title}</h2>
        <p className="text-lg text-gray-600 mb-6 whitespace-pre-wrap">{post.content}</p>

        <div className="space-y-4 mb-6">
          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: any, index: number) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-8 text-gray-500 pt-4 border-t border-gray-100">
            <button className="flex items-center space-x-2 hover:text-red-500">
              <Heart className="w-5 h-5" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <MessageCircle className="w-5 h-5" />
              <span>{comments.length} commentaires</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-500">
              <Share2 className="w-5 h-5" />
              <span>{post.shares}</span>
            </button>
          </div>
        </div>

        {post.images ? (
          <div className="relative h-96 mb-8">
            <img
              src={post.images[0]}
              alt="Post illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ) : post.image ? (
          <div className="relative h-96 mb-8">
            <img
              src={post.image}
              alt="Post illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ) : null}

        <div className="border-t border-gray-100 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Commentaires</h3>
          
          <form onSubmit={handleSubmitComment} className="mb-8">
            <div className="flex space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
                alt="Your avatar"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Ajouter un commentaire..."
                  className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                  rows={3}
                />
                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Commenter</span>
                  </button>
                </div>
              </div>
            </div>
          </form>

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
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 text-sm">
                      <Heart className="w-4 h-4" />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="text-gray-500 hover:text-indigo-600 text-sm">
                      Répondre
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function News() {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('communaute');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [posts, setPosts] = useState(NEWS_POSTS);

  const searchFilteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFilteredPosts = () => {
    let filteredPosts = searchFilteredPosts;

    if (activeTab === 'communaute') {
      const personalPosts = filteredPosts.filter(post => post.category === 'personal');
      const otherPosts = filteredPosts.filter(post => post.category !== 'personal');
      return [...personalPosts, ...otherPosts];
    } else {
      return filteredPosts.filter(post => post.category === activeTab);
    }
  };

  const handleCreatePost = (newPost: any) => {
    if (editingPost) {
      setPosts(posts.map(post => post.id === editingPost.id ? newPost : post));
      setEditingPost(null);
    } else {
      setPosts([newPost, ...posts]);
    }
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
    setShowCreateModal(true);
    if (selectedPost) {
      setSelectedPost(null);
    }
  };

  const displayPosts = getFilteredPosts();

  return (
    <div className="-mt-4 -mx-4">
      <div className="sticky top-0 z-40 bg-[#7C3AED]">
        <div className="flex items-center justify-between h-14 px-8">
          <div className="flex items-center -ml-4">
            {[
              { id: 'communaute', label: 'Communauté' },
              { id: 'institutions', label: 'Institutions' },
              { id: 'clubs', label: 'Clubs/Fédérations' },
              { id: 'medias', label: 'Médias' },
              { id: 'entreprises', label: 'Entreprises' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-4 font-medium ${
                  activeTab === tab.id 
                    ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 pl-4 pr-10 h-9 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-white/20"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="relative h-[300px] w-full">
        <img 
          src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200&auto=format&fit=crop"
          alt="Feed Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-16 left-16 right-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Vivez l'excitation de la finale à l'Accor Arena</h2>
              <p className="text-xl text-white">Gagnez vos places pour The One à Paris</p>
            </div>
            <div className="w-[80px] h-[50px] bg-white rounded-[10px] flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.1)] mr-8 mb-[-20px]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                alt="Nike Logo"
                className="w-[45px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <div className="py-8">
            {selectedPost ? (
              <PostView 
                post={selectedPost} 
                onBack={() => setSelectedPost(null)}
                onEdit={selectedPost.author === "Thomas Martin" ? () => handleEditPost(selectedPost) : undefined}
              />
            ) : (
              <div className="space-y-4">
                {displayPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onPostClick={() => setSelectedPost(post)}
                    onEdit={post.author === "Thomas Martin" ? () => handleEditPost(post) : undefined}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {activeTab === 'communaute' && !selectedPost && (
        <button
          onClick={() => {
            setEditingPost(null);
            setShowCreateModal(true);
          }}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center group z-50"
          title="Nouvelle publication"
        >
          <PenSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      )}

      {showCreateModal && (
        <CreatePostModal
          onClose={() => {
            setShowCreateModal(false);
            setEditingPost(null);
          }}
          onSubmit={handleCreatePost}
          editingPost={editingPost}
        />
      )}
    </div>
  );
}