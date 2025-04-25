import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export function Invitation2() {
    return (
        <div className="my-24 md:my-32 lg:my-40 px-4 sm:px-6 lg:px-8">
            {/* Conteneur principal avec gradient violet, coins arrondis et ombre - INCHANGÉ */}
            <div className={`relative max-w-8xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#7C3AED] to-violet-700`}>

                {/* Grille de contenu (responsive) */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-x-8 gap-y-12 min-h-[400px] sm:min-h-[500px] px-6 py-16 sm:px-12 lg:px-20">

                    {/* Section Texte (Gauche) - INCHANGÉE */}
                    <div className="text-white max-w-lg">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-8 drop-shadow-md">
                            Donnez un élan à votre carrière.
                        </h2>
                        <p className="text-lg sm:text-xl opacity-90">
                            Rejoignez Trophenix et pilotez votre avenir professionnel.
                        </p>
                    </div>

                    {/* Section Formulaire (Droite) - MODIFIÉE pour aligner le bouton en bas */}
                    {/* Conteneur extérieur avec effet verre dépoli */}
                    <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg ring-1 ring-inset ring-white/30 p-4 sm:p-8">
                        {/* Form modifié pour une disposition verticale avec le bouton en bas */}
                        <form className="flex flex-col h-full" onSubmit={(e) => e.preventDefault()}>

                            {/* Conteneur blanc pour l'input (similaire à 'Your Passport') */}
                            <div className="flex-grow bg-white rounded-xl p-3 sm:p-5 flex flex-col mb-4">
                                {/* Label original, stylisé comme dans la cible (petit, icône) */}
                                <label htmlFor="email-invite" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                                    <Mail className="h-4 w-4 text-gray-500" aria-hidden="true" />
                                    Votre adresse e-mail
                                </label>
                                {/* Input email, stylisé comme le champ gris de la cible */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email-invite"
                                        id="email-invite"
                                        required
                                        className="block w-full h-10 sm:h-11 px-3 py-2 bg-gray-100 border border-transparent rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white/30 focus:ring-[#7C3AED] text-base sm:text-lg transition"
                                        placeholder="adresse@email.com"
                                        aria-label="Votre adresse e-mail"
                                    />
                                </div>
                            </div>

                            {/* Bouton Submit en bas - maintenant en pleine largeur */}
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-5 sm:px-6 h-14 sm:h-16 bg-gray-900 hover:bg-gray-800 border border-transparent rounded-xl shadow-sm text-base sm:text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900/20 focus:ring-gray-700 transition group"
                            >
                                <span className="mr-2">S'inscrire</span>
                                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invitation2;