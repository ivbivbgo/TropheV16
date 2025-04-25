import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/presentation.png"; // Assure-toi que le chemin est correct
import { Briefcase, Calendar, UserCircle, Users } from "lucide-react";

export function Functionalities2() {
    const [activeBackground, setActiveBackground] = useState<number>(0);

    const buttonDetails = [
        {
            title: "Rencontrer des sportifs",
            textColor: "text-stone-700",
            image: image1,
            alt: "Aperçu de la fonctionnalité Rencontrer des sportifs",
        },
        {
            title: "Découvrir des opportunités",
            textColor: "text-stone-700",
            image: image1,
            alt: "Aperçu de la fonctionnalité Découvrir des opportunités",
        },
        {
            title: "Explorer les événements",
            textColor: "text-stone-700",
            image: image1,
            alt: "Aperçu de la fonctionnalité Explorer les événements",
        },
        {
            title: "Créer votre profil personnalisé",
            textColor: "text-stone-700",
            image: image1,
            alt: "Aperçu de la fonctionnalité Créer votre profil",
        },
    ];

    const icons = [
        <Users size={24} />,
        <Briefcase size={24} />,
        <Calendar size={24} />,
        <UserCircle size={24} />,
    ];

    return (
        <div className="flex pt-32 sm:pt-48 justify-center items-center w-full">
            <div className="flex flex-col mx-auto w-[95%] max-w-7xl items-center p-6 sm:p-10 lg:p-16">
                <h1 className="mb-4 text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
                    Découvrez ce que Trophenix vous offre
                </h1>
                <div className="mb-10 sm:mb-12 text-center">
                    <p className="text-lg sm:text-xl text-stone-500 tracking-wide max-w-2xl mx-auto">
                        Connectez-vous, trouvez des opportunités et participez à des événements sportifs.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row w-full min-h-[80vh] rounded-2xl bg-stone-100 shadow-xl border border-gray-200 overflow-hidden">
                    {/* Colonne gauche - Fonctionnalités */}
                    <div className="w-full lg:w-[40%] bg-stone-50 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
                        <div className="flex flex-col space-y-5 h-full">
                            <h2 className="text-xl sm:text-2xl font-semibold text-violet-700 mb-6 sm:mb-8 pt-14 pl-2">
                                Avec Trophenix, vous pouvez...
                            </h2>
                            {buttonDetails.map((detail, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveBackground(index)}
                                    className={`group w-full flex items-center gap-4 text-left px-4 py-3 font-medium text-base sm:text-lg
                                            bg-transparent border-none transition-all duration-300
                                            cursor-pointer rounded-lg
                                            ${activeBackground === index
                                                ? "text-[#514be5] font-semibold"
                                                : detail.textColor + " hover:bg-stone-200/60"
                                            }
                                            hover:text-[#514be5]`}
                                >
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                                                    transition-all duration-300 mr-1 sm:mr-2 flex-shrink-0
                                                    ${activeBackground === index
                                                        ? "bg-[#514be5] text-white"
                                                        : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
                                                    }`}>
                                        {icons[index]}
                                    </div>
                                    <span className="relative">{detail.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Colonne droite - Aperçu avec animation */}
                    <motion.div
                        // Animation de base pour le changement de contenu (fade in/out)
                        key={activeBackground ?? "placeholder"} // Change key pour animer entre placeholder et contenu
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12 bg-stone-100 overflow-hidden"
                    >
                        {activeBackground !== null ? (
                            // Contenu quand un bouton est sélectionné
                            <div className="flex flex-col items-center justify-center w-full h-full text-center">
                                <h3 className="text-xl sm:text-3xl font-bold text-gray-800 mb-6 lg:mb-12 mt-1 tracking-wide">
                                    {buttonDetails[activeBackground].title}
                                </h3>

                                {/* Le "Cadre" de l'écran - Maintenant un motion.div */}
                                <motion.div
                                    // Animation spécifique pour le cadre
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }} // Commence invisible, petit, légèrement bas
                                    animate={{ opacity: 1, scale: 1, y: 0 }}    // Devient visible, taille normale, position normale
                                    transition={{ duration: 0.35, ease: "easeOut" }} // Durée, easing, léger délai
                                    className="relative bg-gradient-to-br from-gray-700 to-gray-900 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-2xl w-full max-w-2xl lg:max-w-3xl aspect-[16/10] overflow-hidden"
                                >
                                    {/* L'"Écran" avec l'image (intérieur du cadre animé) */}
                                    <motion.div
                                        key={buttonDetails[activeBackground].image} // Anime si l'image change
                                        initial={{ opacity: 0, scale: 0.98 }} // Commence invisible, légèrement petit
                                        animate={{ opacity: 1, scale: 1 }}    // Devient visible, taille normale
                                        transition={{ duration: 0.3, ease: "easeOut" }} // Durée, easing, délai légèrement plus long que le cadre
                                        className="bg-white rounded-md sm:rounded-lg bg-cover bg-no-repeat w-full h-full"
                                        style={{
                                            backgroundImage: `url(${buttonDetails[activeBackground].image})`,
                                            backgroundPosition: 'left center',
                                        }}
                                        aria-label={buttonDetails[activeBackground].alt}
                                    />
                                </motion.div>
                            </div>
                        ) : (
                            // Placeholder quand rien n'est sélectionné
                            <div className="flex flex-col items-center justify-center text-center h-full px-4">
                                <p className="text-lg sm:text-xl text-gray-500">
                                    Cliquez sur une fonctionnalité à gauche pour voir un aperçu.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}