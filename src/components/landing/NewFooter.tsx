import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export function NewFooter() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Trophenix</h3>
            <p className="text-indigo-200 text-sm">
              Accompagner les athlètes dans leur parcours après le sport. Proposer des ressources, réunir des opportunités pour une reconversion réussie.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4">PROGRAMMES</h4>
            <ul className="space-y-2 text-indigo-200">
              <li><a href="#" className="hover:text-white transition-colors">Mentorat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Formation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ressources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Événements</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-white mb-4">S'IMPLIQUER</h4>
            <ul className="space-y-2 text-indigo-200">
              <li><a href="#" className="hover:text-white transition-colors">Faire un Don</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Devenir Bénévole</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Devenir Partenaire</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">SUIVEZ-NOUS</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-200 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-indigo-200">© 2024 Trophenix. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}