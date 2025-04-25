import React, { useState, useEffect } from 'react';

// Import images
import presentation from '../../assets/fonctionnalite1.png';
import img7 from '../../assets/act7.png';
import img3 from '../../assets//act3.png';
import img4 from '../../assets//act4.png';
import img6 from '../../assets//test1.png';

const imageDimensions = {
  center: { width: '797px', height: '505px' },
  inner: { width: '643px', height: '416px' },
  outer: { width: '500px', height: '342px' },
  tablet: { width: '90%', maxWidth: '900px', height: 'auto' },
  mobile: { width: '92%', maxWidth: '600px', height: 'auto' },
};

const horizontalOffsets = {
  inner: '235px',
  outer: '435px',
};

// Augmente légèrement le facteur d'échelle pour agrandir un peu
const scaleFactor = 0.96;

export function ImagePresentation() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  useEffect(() => {
    // Fonction pour mettre à jour la largeur de la fenêtre
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Ajouter l'écouteur d'événement
    window.addEventListener('resize', handleResize);
    
    // Initialisation
    handleResize();
    
    // Nettoyage
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calcul des seuils pour l'affichage des images
  const showOuterImages = windowWidth >= 1440; // Grands écrans
  const showInnerImages = windowWidth >= 1200; // Écrans moyens
  const isTabletView = windowWidth < 1200 && windowWidth >= 768; // Tablette
  const isMobileView = windowWidth < 768; // Mobile
  const isResponsiveView = windowWidth < 1200; // Tablette ou mobile
  
  const sideImageClasses = "w-full h-full rounded-2xl bg-cover bg-no-repeat border border-stone-400/60";
  const centerImageClasses = "w-full h-full rounded-2xl bg-contain bg-no-repeat border border-stone-400/60";
  const baseContainerClasses = "absolute top-1/2 bg-stone-300 border border-stone-400/60 rounded-3xl p-2";

  // Classes distinctes pour tablette et mobile avec rounded réduit
  const tabletContainerClasses = "relative mx-auto bg-stone-300 border border-stone-400/60 rounded-xl p-2";
  const mobileContainerClasses = "relative mx-auto bg-stone-300 border border-stone-400/60 rounded-xl p-1";
  
  // Classes d'image pour responsive avec rounded réduit
  const responsiveImageClasses = "w-full h-full rounded-lg bg-contain bg-no-repeat border border-stone-400/60";

  return (
    <section className={`relative flex justify-center items-start overflow-hidden ${isResponsiveView ? 'pt-8' : 'min-h-[85vh] min-h-[82vh] pt-[47.5vh]'}`}>
      {!isResponsiveView ? (
        // Version desktop avec mise en page originale
        <div
          className="relative w-full h-full flex justify-center items-center"
          style={{ transform: `scale(${scaleFactor})` }}
        >
          {/* Outer Left */}
          {showOuterImages && (
            <div
              className={`${baseContainerClasses} z-0`}
              style={{
                width: imageDimensions.outer.width,
                height: imageDimensions.outer.height,
                left: '50%',
                transform: `translateX(calc(-50% - ${horizontalOffsets.outer})) translateY(-50%)`,
              }}
            >
              <div
                className={sideImageClasses}
                style={{ backgroundImage: `url(${img6})`, backgroundPosition: "270% center" }}
              ></div>
            </div>
          )}

          {/* Outer Right */}
          {showOuterImages && (
            <div
              className={`${baseContainerClasses} z-0`}
              style={{
                width: imageDimensions.outer.width,
                height: imageDimensions.outer.height,
                left: '50%',
                transform: `translateX(calc(-50% + ${horizontalOffsets.outer})) translateY(-50%)`,
              }}
            >
              <div
                className={sideImageClasses}
                style={{ backgroundImage: `url(${img3})`, backgroundPosition: "120px center" }}
              ></div>
            </div>
          )}

          {/* Inner Left */}
          {showInnerImages && (
            <div
              className={`${baseContainerClasses} z-5`}
              style={{
                width: imageDimensions.inner.width,
                height: imageDimensions.inner.height,
                left: '50%',
                transform: `translateX(calc(-50% - ${horizontalOffsets.inner})) translateY(-50%)`,
              }}
            >
              <div
                className={sideImageClasses}
                style={{ backgroundImage: `url(${img7})`, backgroundPosition: "-240px center" }}
              ></div>
            </div>
          )}

          {/* Inner Right */}
          {showInnerImages && (
            <div
              className={`${baseContainerClasses} z-5`}
              style={{
                width: imageDimensions.inner.width,
                height: imageDimensions.inner.height,
                left: '50%',
                transform: `translateX(calc(-50% + ${horizontalOffsets.inner})) translateY(-50%)`,
              }}
            >
              <div
                className={sideImageClasses}
                style={{ backgroundImage: `url(${img4})`, backgroundPosition: "-0 center" }}
              ></div>
            </div>
          )}

          {/* Center Image - toujours visible */}
          <div
            className={`${baseContainerClasses} left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center`}
            style={{
              width: imageDimensions.center.width,
              height: imageDimensions.center.height,
            }}
          >
            <div
              className={centerImageClasses}
              style={{ backgroundImage: `url(${presentation})`, backgroundPosition: "center center" }}
            ></div>
          </div>
        </div>
      ) : (
        // Version responsive (tablette ou mobile)
        <div className="w-full">
          {/* Padding top séparé du conteneur gris */}
          <div className="pt-8"></div>
          
          {/* Conteneur avec le fond gris */}
          <div className="w-full py-8 px-4 bg-stone-100">
            {isTabletView ? (
              // Version tablette - padding normal et rounded réduit
              <div
                className={tabletContainerClasses}
                style={{
                  width: imageDimensions.tablet.width,
                  maxWidth: imageDimensions.tablet.maxWidth,
                  aspectRatio: "797/505", // Maintient le ratio d'aspect de l'image originale
                }}
              >
                <div
                  className={responsiveImageClasses}
                  style={{ backgroundImage: `url(${presentation})`, backgroundPosition: "center center" }}
                ></div>
              </div>
            ) : (
              // Version mobile - padding réduit et rounded encore plus réduit
              <div
                className={mobileContainerClasses}
                style={{
                  width: imageDimensions.mobile.width,
                  maxWidth: imageDimensions.mobile.maxWidth,
                  aspectRatio: "797/505",
                }}
              >
                <div
                  className={responsiveImageClasses}
                  style={{ backgroundImage: `url(${presentation})`, backgroundPosition: "center center" }}
                ></div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}