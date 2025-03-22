import React from 'react';
import { Bell, Lock, Eye, Globe, HelpCircle, Info, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function Settings() {
  const { signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
          <p className="text-gray-600 mt-1">Gérez vos préférences et paramètres de compte</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Notifications */}
          <div>
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <Bell className="w-5 h-5 mr-2 text-indigo-500" />
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Notifications par email</h3>
                  <p className="text-sm text-gray-500">Recevoir des mises à jour par email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Notifications push</h3>
                  <p className="text-sm text-gray-500">Recevoir des notifications sur l'application</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div>
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <Lock className="w-5 h-5 mr-2 text-indigo-500" />
              Confidentialité
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Profil public</h3>
                  <p className="text-sm text-gray-500">Rendre votre profil visible publiquement</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Statut en ligne</h3>
                  <p className="text-sm text-gray-500">Afficher votre statut de connexion</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div>
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <Eye className="w-5 h-5 mr-2 text-indigo-500" />
              Apparence
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Taille du texte
                </label>
                <select 
                  className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  defaultValue="normal"
                >
                  <option value="small">Petite</option>
                  <option value="normal">Normale</option>
                  <option value="large">Grande</option>
                </select>
              </div>
            </div>
          </div>

          {/* Language */}
          <div>
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <Globe className="w-5 h-5 mr-2 text-indigo-500" />
              Langue
            </h2>
            <div className="space-y-4">
              <div>
                <select 
                  className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                  defaultValue="fr"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>
          </div>

          {/* Help & Support */}
          <div>
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <HelpCircle className="w-5 h-5 mr-2 text-indigo-500" />
              Aide & Support
            </h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-900">Centre d'aide</span>
                <Info className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-900">Contacter le support</span>
                <Info className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Logout */}
          <div>
            <h2 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
              <LogOut className="w-5 h-5 mr-2 text-red-500" />
              Déconnexion
            </h2>
            <div className="space-y-4">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Se déconnecter
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-6 border-t border-gray-100">
            <button className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Enregistrer les modifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}