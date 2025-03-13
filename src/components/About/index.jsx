import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import images from "../../constants/image";


const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "linear", duration: 0.5 }}
      ></motion.div>
      <div className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          className="w-full text-primary md:w-1/2 dark:text-white"
        >
          <h2 className="text-2xl font-semibold mb-4 font-display">My name is Aryan, and I love learning, building, and exploring.</h2>
          <p className="text-base font-light text-neutral-700 dark:text-neutral-300 mb-6  ">
          I study CS and business at the University of Michigan with a minor in math. I'm currently most interested in systems computing, machine learning, financial markets, UI/UX, talking to strangers, and weightlifting. I love public speaking, playing drums, running, and music. In my free time, I work as a part time Wedding MC.
          </p>
          <p className="text-base font-light text-neutral-700 dark:text-neutral-300  tracking mb-2">
          I'm Currently Reading: Joel Greenblatt, Kate Elizabeth Russell, Ray Dalio, Dmitri Nesteruk, Sayaka Murata, and Paul Graham
          </p>
          <p className="text-base font-light text-neutral-700 dark:text-neutral-300 mb-2  tracking">
          I'm Currently Listening to: 070 Shake, Playboi Carti, Lavern, Shreya Ghoshal, Don Toliver, Fred Again, J. Cole, Saint Motel, Future, Lana Del Rey, In This Moment, Saint Levant, Caroline Polachek, Sudan Archives, The Neighbourhood, Kendrick Lamar, Todd Masten, Børns, Pritam, Miki Matsubara
          </p>
          {/* <ul className="list-disc list-inside space-y-4 tracking-wide leading-6">
            <li><strong>Incoming Software Engineer at Fidelity Invesments</strong> Incoming for Winter Internhip. </li>
            <li><strong>Building Analyrics:</strong> Finishing up my full-stack web application at <a href="http://analyrics.info" className="text-blue-500 underline">analyrics.info</a>, the world's most unique, creative, and beautiful lyrics analyzer, with a lyrics analysis database of over 1 million songs, artists, and albums. </li>
            <li><strong>Studying:</strong> Currently focusing on Machine Learning, Web Systems, Computer Organization, Accounting, and Business Analytics. Expect some more ML projects in the next months!</li>
            <li><strong>Recruiting:</strong> Seeking software engineering internships for Summer 2025.</li>
            <li>I've also been working as a part-time Wedding/Party MC, running, weightlifting, playing poker, and playing music in my free time.</li>
          </ul> */}

        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          className="w-full relative md:w-1/2 md:h-[450px]"
        >
          {!isLoaded && (
            <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full md:h-[450px]" />
          )}
          <img
            src={images.profile}
            alt="Aryan Shah"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover rounded-lg ${isLoaded ? "" : "hidden"}`}
          />
        </motion.div>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "linear", duration: 0.5 }}
      >
      </motion.div>
    </>
  );
};

export default TabSection;
