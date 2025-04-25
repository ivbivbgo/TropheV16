import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/fonctionnalite1.png";
import image2 from "../../assets/fonctionnalite2.png";
import image3 from "../../assets/fonctionnalite3.png";
import image4 from "../../assets/fonctionnalite4.png";
import { Briefcase, Calendar, UserCircle, Users } from "lucide-react";

export function Functionalities() {
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
            image: image2,
            alt: "Aperçu de la fonctionnalité Découvrir des opportunités",
        },
        {
            title: "Explorer les événements",
            textColor: "text-stone-700",
            image: image3,
            alt: "Aperçu de la fonctionnalité Explorer les événements",
        },
        {
            title: "Créer votre profil personnalisé",
            textColor: "text-stone-700",
            image: image4,
            alt: "Aperçu de la fonctionnalité Créer votre profil",
        },
    ];

    const getIcons = (size: string | number | undefined) => [
        <Users size={size} />,
        <Briefcase size={size} />,
        <Calendar size={size} />,
        <UserCircle size={size} />,
    ];

    // Pour mobile/tablette
    const mobileIcons = getIcons(20);
    // Pour desktop
    const desktopIcons = getIcons(24);

    return (
        <div id="fonctionnalites" className="flex mt-2 justify-center items-center w-full">
            <div className="flex flex-col w-full  max-w-7xl items-center p-0 sm:p-0 lg:p-16">
                <h1 className="mb-4 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7C3AED]"> 
                    Découvrez ce que Trophenix vous offre
                </h1>
                <div className="mb-10 sm:mb-12 text-center">
                    <p className="text-lg sm:text-xl text-stone-500 tracking-wide max-w-2xl mx-auto">
                        Connectez-vous, trouvez des opportunités et participez à des événements sportifs.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row w-full min-h-[80vh] lg:rounded-2xl bg-stone-50 lg:shadow-xl border border-gray-200 overflow-hidden">
                    {/* Colonne gauche (sur desktop) / Rangée du haut (sur mobile/tablette) */}
                    <div className="w-full lg:w-[40%] bg-stone-50 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200 flex-shrink-0">
                        <div className="flex flex-col h-full">
                            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-800 mb-6 sm:mb-8 lg:mb-14 pt-4 lg:pt-12 pl-2">
                                Avec Trophenix, vous pouvez...
                            </h2>
                            {/* Sur mobile et tablette: disposition horizontale avec défilement */}
                            <div className="flex lg:hidden overflow-x-auto pb-4 space-x-4 snap-x">
                                {buttonDetails.map((detail, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveBackground(index)}
                                        className={`group flex flex-col items-center snap-start min-w-[140px] sm:min-w-[160px] p-4
                                                bg-transparent border-none transition-all duration-300
                                                cursor-pointer rounded-lg
                                                ${activeBackground === index
                                                    ? "text-[#7C3AED] font-semibold" 
                                                    : detail.textColor + " hover:bg-stone-200/60"
                                                }
                                                hover:text-[#7C3AED]`}
                                    >
                                        <div className={`w-12 h-12 flex items-center justify-center rounded-full
                                                        transition-all duration-300 mb-3 flex-shrink-0
                                                        ${activeBackground === index
                                                            ? "bg-[#7C3AED] text-white"
                                                            : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
                                                        }`}>
                                            {mobileIcons[index]}
                                        </div>
                                        <span className="text-center text-sm sm:text-base">{detail.title}</span>
                                    </button>
                                ))}
                            </div>
                            
                            {/* Sur desktop: disposition verticale */}
                            <div className="hidden lg:flex lg:flex-col space-y-5">
                                {buttonDetails.map((detail, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveBackground(index)}
                                        className={`group w-full flex items-center gap-4 text-left px-4 py-3 font-medium text-base sm:text-lg
                                                bg-transparent border-none transition-all duration-300
                                                cursor-pointer rounded-lg
                                                ${activeBackground === index
                                                    ? "text-[#7C3AED] font-semibold"
                                                    : detail.textColor + " hover:bg-stone-200/60"
                                                }
                                                hover:text-[#7C3AED]`}
                                    >
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                                                        transition-all duration-300 mr-1 sm:mr-2 flex-shrink-0
                                                        ${activeBackground === index
                                                            ? "bg-[#7C3AED] text-white"
                                                            : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
                                                        }`}>
                                            {desktopIcons[index]}
                                        </div>
                                        <span className="relative">{detail.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite */}
                    <motion.div
                        key={activeBackground ?? "placeholder"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12 bg-stone-100 relative"
                    >
                        {activeBackground !== null ? (
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 lg:mb-8 text-center lg:text-left w-full max-w-2xl lg:max-w-3xl">
                                    {buttonDetails[activeBackground].title}
                                </h3>

                                {/* Animation combinée du cadre et de l'image ensemble */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10, x: 0 }}
                                    animate={{ 
                                        opacity: 1, 
                                        scale: 1, 
                                        y: 0, 
                                        x: window.innerWidth >= 1024 ? '10%' : 0 
                                    }}
                                    transition={{ 
                                        duration: 0.4, 
                                        ease: "easeOut"
                                    }}
                                    className="relative bg-gradient-to-br from-gray-700 to-gray-900 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-2xl
                                              w-full lg:w-[130%] aspect-[16/10] overflow-hidden mx-auto lg:mx-0"
                                >
                                    {/* L'image à l'intérieur du cadre, sans animation individuelle */}
                                    <div
                                        className="bg-white rounded-md sm:rounded-lg bg-cover bg-no-repeat w-full h-full"
                                        style={{
                                            backgroundImage: `url(${buttonDetails[activeBackground].image})`,
                                            backgroundPosition: 'center center lg:left center',
                                        }}
                                        aria-label={buttonDetails[activeBackground].alt}
                                    />
                                </motion.div>
                            </div>
                        ) : (
                            // Placeholder
                            <div className="flex flex-col items-center justify-center text-center h-full px-4">
                                <p className="text-lg sm:text-xl text-gray-500">
                                    Cliquez sur une fonctionnalité pour voir un aperçu.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}