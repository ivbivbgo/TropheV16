import React, { useState } from "react";
import { motion } from "framer-motion"; 
import image1 from "../../assets/presentation.png";
import { Briefcase, Calendar, UserCircle, Users } from "lucide-react";

export function Functionalities() {
    const [activeBackground, setActiveBackground] = useState<number | null>(null);

    const buttonDetails = [
        {
            title: "Rencontrer des sportifs",
            background: "bg-stone-100",
            textColor: "text-stone-800",
        },
        {
            title: "Découvrer des opportunités",
            background: "bg-stone-100",
            textColor: "text-stone-800",
        },
        {
            title: "Explorer les événements",
            background: "bg-stone-100",
            textColor: "text-stone-800",
        },
        {
            title: "Créer votre profil personnalisé",
            background: "bg-stone-100",
            textColor: "text-stone-800",
        },
    ];

    const icons = [
        <Users size={24} />,
        <Briefcase size={24} />,
        <Calendar size={24} />,
        <UserCircle size={24} />,
    ];

    return (
        <div className="flex pt-48 justify-center items-center w-full">
            <div className="flex flex-col mx-auto w-[95%] h-[130vh] rounded-3xl justify-center items-center p-16">
                <h1 className="mb-5 text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900">
                    Lorem ipsum dolor sit amet
                </h1>

                <div className="mb-12 relative inline-block">
                    <p className="text-xl sm:text-2xl text-stone-400 font-sm tracking-wide">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="flex flex-row w-[90%] h-[90vh] rounded-xl mx- bg-stone-100 shadow-lg border">
                    {/* Colonne gauche */}
                    <div className="flex items-center justify-center rounded-l-xl w-[40%] p-6 pr-0">
                        <div className="flex flex-col mx-4 space-y-7 w-full">
                            <h2 className="text-2xl font-semibold text-violet-600 mb-10 pl-4">
                                Avec Trophenix, vous pouvez...
                            </h2>
                            {buttonDetails.map((detail, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveBackground(index)}
                                    className={`group w-full flex items-center gap-4 text-left px-4 py-1 font-medium text-xl font-normal 
                                            bg-transparent border-none transition-all duration-300 
                                            cursor-pointer rounded-lg
                                            ${activeBackground === index ? "text-[#514be5] font-semibold" : detail.textColor} 
                                            hover:text-[#514be5]`}
                                >
                                    {/* Icône avec fond dynamique */}
                                    <div className={`w-12 h-12 flex items-center justify-center rounded-full 
                                                    transition-all duration-300 mr-2
                                                    ${activeBackground === index ? "bg-[#514be5] text-white" : "bg-gray-200 text-gray-600"}`}>
                                        {icons[index]}
                                    </div>

                                    <span className="relative">
                                        {detail.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Colonne droite avec animation fade-in */}
                    <motion.div
                        key={activeBackground}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`flex-1 rounded-r-xl flex flex-col items-center justify-center p-8 transition-all duration-300 ease-in-out overflow-hidden ${
                            activeBackground !== null
                            ? buttonDetails[activeBackground].background
                            : "bg-stone-100"
                        }`}
                        >
                        {activeBackground !== null ? (
                            <div className="flex flex-col pl-[40%]">
                            <div className="ml-8">
                                <h3 className="text-xl font-base text-stone-500 mb-2 mt-5">
                                {buttonDetails[activeBackground].title}
                                </h3>
                                <div className="relative p-3 mt-8 rounded-xl bg-gradient-to-r from-indigo-500 from-[#7C3AED] to-[#6D28D9] overflow-hidden w-[54rem] h-[34rem]">
                                <div
                                    className="bg-white rounded-lg bg-cover bg-center bg-no-repeat w-full h-full"
                                    style={{
                                    backgroundImage: `url(${image1})`,
                                    }}
                                ></div>
                                </div>
                            </div>
                            </div>
                        ) : (
                            <p className="text-2xl text-gray-500">
                            Survolez un bouton pour voir plus de détails
                            </p>
                        )}
                        </motion.div>
                </div>
            </div>
        </div>
    );
}