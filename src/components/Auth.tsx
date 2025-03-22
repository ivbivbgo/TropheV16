import React, { useState } from 'react';
import { Bot, Lock, Mail, Eye, EyeOff } from 'lucide-react';

interface AuthProps {
  onLogin: () => void;
}

export function Auth({ onLogin }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Bot className="w-6 h-6 text-indigo-600" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
              placeholder="Email"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 pl-10 pr-10 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
              placeholder="Mot de passe"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {!isLogin && (
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
                placeholder="Confirmer le mot de passe"
              />
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-2"
                />
                Se souvenir de moi
              </label>
              <button 
                type="button"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Mot de passe oublié ?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full h-11 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all duration-200"
          >
            {isLogin ? 'Se connecter' : 'Créer un compte'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Pas encore de compte ? " : "Déjà un compte ? "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            {isLogin ? "Créer un compte" : "Se connecter"}
          </button>
        </p>
      </div>
    </div>
  );
}