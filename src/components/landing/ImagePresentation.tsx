import presentation from '../../assets/presentation.png';

export function ImagePresentation() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      {/* Fond coloré */}
      <div className="absolute bottom-[-60vh] w-full h-[85vh] bg-[#514be5] z-0 p-6 flex flex-wrap">
        <div className="w-6/12 h-[45.5%] flex justify-center items-center text-center"></div>
        <div className="w-6/12 h-[45.5%] flex justify-center items-center"></div>
        
        <div className="w-6/12 h-[55.5%] flex px-18 rounded-lg mb-96">
          <p className="text-7xl font-bold text-gray-100">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="w-6/12 h-[55.5%] pr-12 flex flex-col items-start p-4 rounded-lg font-semibold">
          <p className="text-lg text-white leading-relaxed mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo labore obcaecati odio voluptatibus! In impedit rerum exercitationem qui voluptatum eum quaerat eaque. Quibusdam beatae corrupti voluptatum minus, est quo, recusandae natus sint quidem tenetur nam, dolor autem ullam architecto ducimus.</p>
         <div className="flex flex-row space-x-10">
          <button className="inline-block mt-6 px-6 py-2.5 bg-white text-[#514be5] font-semibold rounded-lg hover:bg-gray-200">
              Découvrir
          </button>
          <button className="inline-block mt-6 bg-transparent text-white font-semibold rounded-lg">
            Voir une démonstration →
          </button>
         </div>
        </div>
      </div>

      {/* Image principale */}
      <div className="relative flex mx-auto bg-stone-100 border border-stone-400/60 w-[68%] h-[84vh] rounded-3xl justify-center items-center p-6 z-10 -mb-24">
        <div
          className="mx-auto w-full h-full rounded-xl bg-cover bg-center border border-stone-400/60"
          style={{ backgroundImage: `url(${presentation})` }}
        ></div>
      </div>
    </div>
  );
}
