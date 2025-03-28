

export function Invitation() {
    return (
        <div className="mt-36 bg-[#514be5] text-white py-20 mb-40 mx-24 text-center rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Prêt à donner un nouvel élan à votre carrière ?</h2>
        <p className="text-xl mb-12">
          Rejoignez Trophenix dès maintenant et commencez à gérer votre carrière et votre reconversion sportive.
        </p>
        <button
          onClick={() => window.location.href = '/inscription'}
          className="px-6 py-3 text-lg text-[#514be5] font-semibold bg-white hover:bg-white/90 rounded-lg transition-colors"
        >
          Inscrivez-vous maintenant
        </button>
      </div>
    );
}