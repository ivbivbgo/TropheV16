import { Mail, ArrowRight } from 'lucide-react';
import background from "../../assets/photo2.png";

export function Invitation() {
    return (
        <div className="my-16 sm:my-20 md:my-24 lg:my-40 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-8xl mx-auto rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat'
            }}
            >

                <div className="absolute inset-0 bg-gradient-to-r from-black/60 sm:from-black/50 via-black/50 sm:via-black/40 to-transparent -z-0"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12 min-h-[320px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] px-4 sm:px-8 md:px-10 lg:px-20 py-10 sm:py-12 md:py-14 lg:py-16">

                    <div className="text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 md:mb-6 lg:mb-8">
                            Donnez un élan à votre carrière
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl opacity-90">
                            Rejoignez Trophenix et pilotez votre avenir professionnel
                        </p>
                    </div>

                    <div className="bg-white/15 backdrop-blur-lg rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl shadow-lg border border-white/20 p-4 sm:p-6 md:p-7 lg:p-8">
                        <form className="flex flex-col h-full">
                            <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-4 h-full">
                                <div className="flex-grow bg-white rounded-lg md:rounded-xl lg:rounded-xl p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col justify-center shadow-sm">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5 text-gray-500" aria-hidden="true" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email-invite"
                                            id="email-invite"
                                            required
                                            className="block w-full h-10 sm:h-10 md:h-11 lg:h-11 pl-10 pr-3 py-2 bg-gray-100 border border-transparent rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white/30 focus:ring-purple-600 text-sm sm:text-base md:text-lg lg:text-lg transition"
                                            placeholder="Votre adresse e-mail"
                                            aria-label="Votre adresse e-mail"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-4 sm:px-5 md:px-5 lg:px-6 h-11 sm:h-12 md:h-14 lg:h-16 bg-gray-900 hover:bg-gray-800 border border-transparent rounded-lg md:rounded-xl lg:rounded-xl shadow-sm text-sm sm:text-base md:text-base lg:text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900/20 focus:ring-gray-700 transition group"
                                >
                                    <span className="mr-2">S'inscrire</span>
                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invitation;