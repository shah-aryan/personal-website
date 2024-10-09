import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const cardData = [
 {
  company: "Stealth Startup",
  period: "MARCH, 2024 - PRESENT",
  role: "SOFTWARE ENGINEER",
  duties: [
   "Developed full-stack HR-technology LLM web app using React, TailwindCSS, Django, PostgreSQL, Docker, Redis, StripeAPI, OpenAI API, and AWS hosting"
  ]
 },
 {
  company: "TECH5AI",
  period: "APRIL, 2023 - AUGUST, 2023",
  role: "MACHINE LEARNING INTERN",
  duties: [
   "Developed YOLOv4 Machine Learning model for PreciPal self-vaccinator companion app, improving self-vaccinations in underserved areas",
  ],
  link: "https://tech5.ai/"
 },
 {
  company: "Michigan Investment Group - Quant Division",
  period: "JANUARY, 2023 - PRESENT",
  role: "QUANTITATIVE DEVELOPER",
  duties: [
   "Factor-Based Portfolio Rebalancing Algorithm with ML-Based Target Asset Allocation",
   "Python Limit Order Book simulator with trade matching and order optimization"
  ],
  link: "https://www.michiganinvestmentgroup.com/"
 },
 {
  company: "V1@Michigan",
  period: "SEPTEMBER, 2023 - PRESENT",
  role: "SOFTWARE ENGINEER",
  duties: [
   "Product Studio F24",
  ],
  link: "https://www.michiganinvestmentgroup.com/"
 },
 {
  company: "Sugar Events and Entertainment",
  period: "JUNE, 2023 - PRESENT",
  role: "WEDDING AND EVENT MC",
  duties: [
   "25+ Weddings, Parties, and Professional Events completed",
   "All 5 star reviews Recieved"
  ],
  link: "https://sugareventsent.com/"
 },
 {
  company: "Michigan Private Equity and Venture Capital",
  period: "JANUARY, 2023 - PRESENT",
  role: "VENTURE CAPITAL ASSOCIATE",
  duties: [
   "Sourced ventures in HR technology and Fintech verticals for $6B technology-oriented growth equity firm",
  ],
  link: "https://www.michiganpevc.org/"
 },
//  {
//   company: "Michigan DECA",
//   period: "APRIL, 2022 - APRIL, 2023",
//   role: "VICE PRESIDENT OF CAREER DEVELOPMENT",
//   duties: [
//    "Elected by 8,000 members across Michigan",
//    "VP Of Career Development; Training Handbook Lead Author"
//   ]
//  }
];

const TwoColumnCard = () => {
 return (
  <>
  <motion.div
   initial="offscreen"
   whileInView="onscreen"
   viewport={{ once: true }}
   className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
  >
   {cardData.map((card, index) => (
    <motion.div
     key={index}
     variants={{
      offscreen: { y: index % 2 === 0 ? 150 : 300 },
      onscreen: {
       y: 0,
       transition: { type: "spring", bounce: 0.4, duration: index % 2 === 0 ? 1 : 1.5 },
      },
     }}
     whileHover={{ scale: 1.02 }}
     className="cursor-pointer bg-gray-100 px-6 py-16 rounded-3xl filter shadow-md relative md:px-10 dark:bg-primary-500 h-full"
    >
     <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
      <a href={card.link ? card.link : "#"} target="_blank" className="hover:underline">
       {card.company}
      </a>
      <span className="mt-4 text-sm flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
       <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
       {card.period}
      </span>
      <span className="mt-2 text-sm flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
       <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
       {card.role}
      </span>
     </h6>
     <div className="relative mb-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
       <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
       <span className="uppercase px-2 bg-gray-100 text-sm text-gray-500 dark:bg-primary-500">
        duties & responsibilities
       </span>
      </div>
     </div>
     <ul className="mt-2 text-sm  text-neutral-600 dark:text-neutral-300">
      {card.duties.map((duty, idx) => (
       <li key={idx}>{duty}</li>
      ))}
     </ul>
    </motion.div>
   ))}

  </motion.div>
  <p className="text-center text-neutral-600 dark:text-neutral-300 text-md mt-8 w-full">
    For technical details on my experiences, please contact me for my official resume.
  </p>
  </>


 );
};

export default TwoColumnCard;
