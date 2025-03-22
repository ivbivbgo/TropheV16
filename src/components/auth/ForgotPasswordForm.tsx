import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface ForgotPasswordFormProps {
  onSubmit: (email: string) => void;
  onBack: () => void;
}

export function ForgotPasswordForm({ onSubmit, onBack }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Mot de passe oublié ?</h2>
        <p className="text-gray-600">
          Entrez votre email pour réinitialiser votre mot de passe
        </p>
      </div>

      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-[#7C3AED] bg-gray-50/50"
          required
        />
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          className="w-full py-3 bg-[#7C3AED] text-white rounded-xl hover:bg-[#6D28D9] transition-colors shadow-lg shadow-[#7C3AED]/25"
        >
          Réinitialiser le mot de passe
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