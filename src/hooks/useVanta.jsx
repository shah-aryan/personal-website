import { useEffect, useRef } from "react";

const useVanta = (isDarkMode) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initializeVanta = async () => {
      try {
        if (!window.THREE) {
          await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
        }
        if (!window.VANTA) {
          await loadScript("https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.fog.min.js");
        }

        const vantaSettings = {
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: isDarkMode ? 0x363F4D : 0xd3d3d3,
          midtoneColor: isDarkMode ? 0x222831 : 0xa9a9a9,
          lowlightColor: isDarkMode ? 0x1A1F26 : 0x808080,
          baseColor: isDarkMode ? 0x1A1F26 : 0xc0c0c0,
          blurFactor: 1.30,
          speed: 2.00,
          zoom: 1.30,
        };

        if (vantaEffect.current) {
          vantaEffect.current.destroy();
        }

        if (vantaRef.current) {
          vantaEffect.current = window.VANTA.FOG(vantaSettings);
        }
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    initializeVanta();

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
  }, [isDarkMode]);

  return vantaRef;
};

export default useVanta;
