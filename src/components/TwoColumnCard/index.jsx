import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
 return (
  <motion.div
   initial="offscreen"
   whileInView="onscreen"
   viewport={{ once: true }}
   className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
  >
   <motion.div
    variants={{
     offscreen: { y: 150 },
     onscreen: {
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
     },
    }}
    whileHover={{ scale: 1.02 }}
    className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
   >
    <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
     <a
      href="https://predica.com/"
      target="_blank"
      className="hover:underline"
     >
      Predica
     </a>
     <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
      MARCH, 2024 - PRESENT
     </span>
     <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
      PARTNER & SOFTWARE ENGINEER
     </span>
    </h6>
    <div className="relative mb-4">
     <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
     </div>
     <div className="relative flex justify-center">
      <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
       duties & responsibilities
      </span>
     </div>
    </div>
    <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
     <li>Led the development of a full-stack HR-technology web application using React, Django, PostgreSQL, Docker, Redis, and AWS.</li>
     <li>Oversaw the complete software development lifecycle, including requirements analysis, design, development, testing, and deployment.</li>
     <li>Implemented a CI/CD pipeline and successfully launched the MVP within 4 weeks with positive investor feedback.</li>
    </ul>
   </motion.div>
   <motion.div
    variants={{
     offscreen: { y: 300 },
     onscreen: {
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
     },
    }}
    whileHover={{ scale: 1.02 }}
    className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
   >
    <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
     <a
      // href="https://tech5ai.com/"
      target="_blank"
      className="hover:underline"
     >
      TECH5AI
     </a>
     <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <CalendarIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
      APRIL, 2023 - AUGUST, 2023
     </span>
     <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
      MACHINE LEARNING INTERN
     </span>
    </h6>
    <div className="relative mb-4">
     <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
     </div>
     <div className="relative flex justify-center">
      <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
       duties & responsibilities
      </span>
     </div>
    </div>
    <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
     <li>Developed ML Object Detection Model for PreciPal, ensuring accurate device positioning guidance.</li>
     <li>Enhanced model robustness and accuracy by incorporating diverse data sources.</li>
     <li>Successfully deployed the model across various phone types and lighting conditions.</li>
    </ul>
   </motion.div>
   <motion.div
    variants={{
     offscreen: { y: 300 },
     onscreen: {
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
     },
    }}
    whileHover={{ scale: 1.02 }}
    className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
   >
    <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
     <a
      //="https://umich.edu/"
      target="_blank"
      className="hover:underline"
     >
      Michigan Investment Group - Quant Division
     </a>
     <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <CalendarIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
      JANUARY, 2023 - PRESENT
     </span>
     <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
      QUANTITATIVE DEVELOPER
     </span>
    </h6>
    <div className="relative mb-4">
     <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
     </div>
     <div className="relative flex justify-center">
      <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
       duties & responsibilities
      </span>
     </div>
    </div>
    <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
     <li>Developed ML portfolio rebalancing algorithm, managing a $20,000 portfolio for Ross School of Business's premier finance club.</li>
     <li>Contributed to a outperformance over the S&P 500 while minimizing Sharpe ratio risk.</li>
     <li>Developed a synchronous limit order book simulator in Python, reducing trading education time by 3 hours per student.</li>
    </ul>
   </motion.div>
   <motion.div
    variants={{
     offscreen: { y: 150 },
     onscreen: {
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
     },
    }}
    whileHover={{ scale: 1.02 }}
    className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
   >
    <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
     <a
      //href="https://umich.edu/"
      target="_blank"
      className="hover:underline"
     >
      Michigan Private Equity and Venture Capital
     </a>
     <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
      JANUARY, 2023 - PRESENT
     </span>
     <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
      VENTURE CAPITAL ASSOCIATE
     </span>
    </h6>
    <div className="relative mb-4">
     <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
     </div>
     <div className="relative flex justify-center">
      <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
       duties & responsibilities
      </span>
     </div>
    </div>
    <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
     <li>Sourced 15 high-growth companies for technology-oriented growth equity investments.</li>
     <li>Contributed to the firm's successful deployment of $6.2 billion in capital.</li>
     <li>Evaluated investment potential on key criteria, resulting in two successful investments.</li>
    </ul>
   </motion.div>
   <motion.div
    variants={{
     offscreen: { y: 150 },
     onscreen: {
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
     },
    }}
    whileHover={{ scale: 1.02 }}
    className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
   >
    <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
     <a
      //href="https://mideca.org/"
      target="_blank"
      className="hover:underline"
     >
      Michigan DECA
     </a>
     <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
      APRIL, 2022 - APRIL, 2023
     </span>
     <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
      VICE PRESIDENT OF CAREER DEVELOPMENT
     </span>
    </h6>
    <div className="relative mb-4">
     <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
     </div>
     <div className="relative flex justify-center">
      <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
       duties & responsibilities
      </span>
     </div>
    </div>
    <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
     <li>Represented 8,000 members across Michigan and organized 11 conferences with 5,000+ attendees.</li>
     <li>Led the creation of Michigan’s debut “Michigan DECA Training Handbook,” improving competition preparation.</li>
     <li>Achieved a 4% increase in average Michigan DECA test scores from 2022 across 10,000 taken tests.</li>
    </ul>
   </motion.div>
   <motion.div
    variants={{
     offscreen: { y: 150 },
     onscreen: {
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
     },
    }}
    whileHover={{ scale: 1.02 }}
    className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
   >
    <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
     <a
      //href="https://mideca.org/"
      target="_blank"
      className="hover:underline"
     >
      Sugar Events and Entertainment
     </a>
     <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
      JUNE, 2023 - PRESENT
     </span>
     <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
      <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
      WEDDING AND EVENT MC
     </span>
    </h6>
    <div className="relative mb-4">
     <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
     </div>
     <div className="relative flex justify-center">
      <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
       duties & responsibilities
      </span>
     </div>
    </div>
    <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
     <li>Successfully MC’d, 15 weddings, parties, and professional events across Michigan.</li>
     <li>Recieved all 5-star reviews on Google and Yelp for event hosting and entertainment.</li>
     <li>Built skills of public speaking, communication, improvisation, event management, and crowd control.</li>
    </ul>
   </motion.div>
  </motion.div>
 );
};

export default TwoColumnCard;
