import React, { useEffect, useState, useRef } from "react";
import images from "../../constants/image";
import { motion } from "framer-motion";
import useDarkMode from "../../hooks/useDarkMode";

const socials = [
  {
    logo: images.linkedinIcon,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/aryanshah1/",
  },
  {
    logo: images.githubIcon,
    alt: "Github Icon",
    link: "https://github.com/shah-aryan",
  },
  {
    logo: images.emailIcon,
    alt: "Email Icon",
    link: "mailto:shahary@umich.edu",
  },
];

const HeroSection = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();
  const [animationComplete, setAnimationComplete] = useState(false);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScriptsAndInitialize = async () => {
      try {
        if (!window.THREE) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        }
        if (!window.VANTA) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.fog.min.js');
        }

        if (vantaRef.current && !vantaEffect.current) {
          vantaEffect.current = window.VANTA.FOG({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x363F4D,
            midtoneColor: 0x222831,
            lowlightColor: 0x1A1F26,
            baseColor: 0x1A1F26,
            blurFactor: 1.30,
            speed: 2.00,
            zoom: 1.30,
          });
        }
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScriptsAndInitialize();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }

      const threeScript = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"]');
      const vantaScript = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.fog.min.js"]');
      if (threeScript) document.body.removeChild(threeScript);
      if (vantaScript) document.body.removeChild(vantaScript);
    };
  }, []);

  useEffect(() => {
    if (animationComplete) {
      setDarkMode(true);
    }
  }, [animationComplete, setDarkMode]);

  return (
    <section id="home" className="" ref={vantaRef}>
      <div className="container relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen">
            <motion.h1
              className="hero__heading"
              onAnimationComplete={() => setAnimationComplete(true)}
            >
              {['A', 'R', 'Y', 'A', 'N'].map((letter, index) => (
                <motion.span
                  key={index}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, duration: 0.5, delay: index * 0.2 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
        <div className="w-full relative bottom-20 md:w-auto md:absolute md:top-[70%]">
          <ul className="flex flex-row justify-center items-center w-full gap-6 md:flex-col">
            {socials.map((social, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
                key={index}
                className="bg-neutral w-max rounded-full hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300"
              >
                <a href={social.link} target="_blank">
                  <img
                    className="h-14 w-14 p-4 transition-all dark:invert"
                    src={social.logo}
                    alt={social.alt}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
