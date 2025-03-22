import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  onSubmit: (email: string, password: string, remember: boolean) => void;
  onForgotPassword: () => void;
  onCreateAccount: () => void;
}

export function LoginForm({ onSubmit, onForgotPassword, onCreateAccount }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, remember);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="space-y-4">
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

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="rounded border-gray-300 text-[#7C3AED] focus:ring-[#7C3AED]"
          />
          <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
        </label>

        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm text-[#7C3AED] hover:text-[#6D28D9] font-medium"
        >
          Mot de passe oublié ?
        </button>
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          className="w-full py-3 bg-[#7C3AED] text-white rounded-xl hover:bg-[#6D28D9] transition-colors shadow-lg shadow-[#7C3AED]/25"
        >
          Se connecter
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">ou</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onCreateAccount}
          className="w-full py-3 bg-white text-[#7C3AED] border-2 border-[#7C3AED] rounded-xl hover:bg-[#7C3AED]/5 transition-colors"
        >
          Créer un compte
        </button>
      </div>
    </form>
  );
}