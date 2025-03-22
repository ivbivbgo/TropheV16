import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Upload } from 'lucide-react';

interface SignupFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    password: string;
    userType: string;
    sport?: string;
    level?: string;
    status?: string;
    bio: string;
    location: string;
    photoFile?: File;
  }) => void;
  onBack: () => void;
}

export function SignupForm({ onSubmit, onBack }: SignupFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '',
    sport: '',
    level: 'National',
    status: 'En activité',
    bio: '',
    location: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      photoFile: photoFile || undefined,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const userTypes = [
    { value: 'athlete', label: 'Sportif' },
    { value: 'club', label: 'Club' },
    { value: 'federation', label: 'Fédération' },
    { value: 'enterprise', label: 'Entreprise' },
    { value: 'expert', label: 'Expert' },
    { value: 'public_institution', label: 'Institution publique' },
    { value: 'private_institution', label: 'Institution privée' }
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="space-y-4">
        {/* Photo Upload */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
              {photoPreview ? (
                <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
              )}
            </div>
            <label className="absolute bottom-0 right-0 bg-[#7C3AED] p-2 rounded-full cursor-pointer hover:bg-[#6D28D9] transition-colors">
              <Upload className="w-4 h-4 text-white" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </label>
          </div>
        </div>

        {/* User Type Selection */}
        <select
          name="userType"
          value={formData.userType}
          onChange={handleInputChange}
          className="w-full py-3 px-4 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] bg-gray-50/50"
          required
        >
          <option value="">Type de compte</option>
          {userTypes.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nom complet"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] bg-gray-50/50"
            required
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] bg-gray-50/50"
            required
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Mot de passe"
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] bg-gray-50/50"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {/* Conditional Fields based on User Type */}
        {formData.userType === 'athlete' && (
          <>
            {/* Sport */}
            <select
              name="sport"
              value={formData.sport}
              onChange={handleInputChange}
              className="w-full py-3 px-4 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] bg-gray-50/50"
              required
            >
              <option value="">Sélectionnez votre sport</option>
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Tennis">Tennis</option>
              <option value="Rugby">Rugby</option>
              <option value="Athlétisme">Athlétisme</option>
              <option value="Natation">Natation</option>
              <option value="Judo">Judo</option>
              <option value="Gymnastique">Gymnastique</option>
            </select>

            {/* Level */}
            <select
              name="level"
              value={formData.level}
              onChange={handleInputChange}
              className="w-full py-3 px-4 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] bg-gray-50/50"
              required
            >
              <option value="National">National</option>
              <option value="International">International</option>
            </select>

            {/* Status */}
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full py-3 px-4 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] bg-gray-50/50"
              required
            >
              <option value="En activité">En activité</option>
              <option value="En reconversion">En reconversion</option>
              <option value="En Blessure">En Blessure</option>
              <option value="En Réflexion">En Réflexion</option>
            </select>
          </>
        )}

        {/* Location */}
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Localisation"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] bg-gray-50/50"
        />

        {/* Bio */}
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          placeholder="Bio (optionnel)"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] bg-gray-50/50 resize-none"
          rows={3}
        />
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          className="w-full py-3 bg-[#7C3AED] text-white rounded-xl hover:bg-[#6D28D9] transition-colors shadow-lg shadow-[#7C3AED]/25"
        >
          Créer un compte
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full py-3 bg-white text-[#7C3AED] border-2 border-[#7C3AED] rounded-xl hover:bg-[#7C3AED]/5 transition-colors"
        >
          Retour à la connexion
        </button>
      </div>
    </form>
  );
}