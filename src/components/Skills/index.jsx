import React, { useState, useEffect } from 'react';

const SkillIcons = () => {
  const [perLine, setPerLine] = useState(12);

  const updatePerLine = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setPerLine(4);
    } else if (width < 768) {
      setPerLine(5);
    } else if (width < 1024) {
      setPerLine(6);
    } else {
      setPerLine(8);
    }
  };

  useEffect(() => {
    updatePerLine();
    window.addEventListener('resize', updatePerLine);
    return () => window.removeEventListener('resize', updatePerLine);
  }, []);

  return (
    <div className="flex w-full justify-center items-center flex-col md:flex-row-reverse transition-all">
      <div className="w-full flex flex-col items-center justify-center">
        <img
          className="w-3/4"
          src={`https://skillicons.dev/icons?i=neovim,cpp,c,python,js,ts,java,kotlin,swift,postgres,mongodb,androidstudio,git,github,selenium,anaconda&perline=${perLine}`}
          alt="My Skills"
        />
        <img
          className="w-3/4 mt-16"
          src={`https://skillicons.dev/icons?i=react,tailwind,css,html,d3,django,docker,express,threejs,vite,bootstrap,npm,nextjs,nodejs,postman,redis,kubernetes,aws,netlify,heroku,vercel,firebase,flask,gcp,azure&perline=${perLine}`}
          alt="My Skills"
        />
      </div>
    </div>
  );
};

export default SkillIcons;
