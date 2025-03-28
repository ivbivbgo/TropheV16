import individuImg from '../../assets/photo1.jpeg';
import sportifImg from '../../assets/photo2.jpeg';
import proImg from '../../assets/photo3.jpeg';

export function UserTypes() {
  const userTypes = [
    {
      title: "Passionné de sport",
      imgSrc: individuImg,
    },
    {
      title: "Sportif",
      imgSrc: sportifImg,
    },
    {
      title: "Professionnel",
      imgSrc: proImg,
    },
    {
      title: "Sponsors",
      imgSrc: individuImg,
    },
    {
      title: "Clubs et fédérations",
      imgSrc: sportifImg,
    },
    {
      title: "Établissements",
      imgSrc: proImg,
    },
  ];

  return (
    <div className="pt-[80vh] bg-white flex flex-col justify-center items-center">
      <div className="mb-10 bg-sky-50 border border-sky-500 text-sky-500 text-base font-semibold px-3 py-1 rounded-md flex items-center gap-1 mx-auto w-fit">
        <span>Une plateforme est faite pour vous</span>
      </div>

      <div className="w-[80%] text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          Adaptez votre expérience selon votre profil
        </h2>
        <p className="text-xl text-gray-500 mb-16 max-w-3xl mx-auto">
          Que vous soyez sportif, professionnel ou passionné, découvrez des fonctionnalités adaptées à vos besoins.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {userTypes.map((user, index) => (
            <div
              key={index}
              className="p-3.5 rounded-lg shadow-md bg-white border border-gray-200 transition-transform transform hover:scale-105"
            >
              <img src={user.imgSrc} alt={user.title} className="w-full h-72 object-cover rounded" />
              <h3 className="mt-4 mb-0.5 text-xl font-semibold text-gray-900">{user.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
