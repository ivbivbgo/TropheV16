import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { ChevronDown, ArrowRight, Star, Circle } from 'lucide-react';

interface InnovativeLandingProps {
  onLogin: () => void;
  onSignup: () => void;
}

export function InnovativeLanding({ onLogin, onSignup }: InnovativeLandingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [1, 0, 0, 1]);

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      mouseX.set(x * 50);
      mouseY.set(y * 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Floating particles animation
  const particles = useRef<Array<{ x: number; y: number; scale: number; speed: number }>>(
    Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.5 + 0.5,
    }))
  );

  useAnimationFrame((time) => {
    particles.current = particles.current.map(particle => ({
      ...particle,
      y: (particle.y + particle.speed) % 100,
    }));
  });

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900">
        <div className="absolute inset-0">
          {particles.current.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                scale: particle.scale,
                opacity: 0.2,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [particle.scale, particle.scale * 1.2, particle.scale],
              }}
              transition={{
                duration: 2 + particle.speed,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <motion.div
          style={{ x: springX, y: springY }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mb-6">
              Trophenix
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 leading-relaxed">
              Votre partenaire de reconversion sportive
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <button 
              onClick={onSignup}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full overflow-hidden transition-all duration-300 hover:bg-white/20"
            >
              <span className="relative z-10 flex items-center text-white font-medium">
                Commencer
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  scale: 1.5,
                  rotate: 45,
                }}
              />
            </button>

            <button 
              onClick={onLogin}
              className="group px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-colors"
            >
              <span className="text-white font-medium flex items-center">
                Se connecter
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ scale }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: useTransform(scrollYProgress, [0, 1], [0.8, 0]),
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {i % 2 === 0 ? (
                <Star className="w-6 h-6 text-white/20" />
              ) : (
                <Circle className="w-4 h-4 text-white/20" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </motion.section>
    </div>
  );
}