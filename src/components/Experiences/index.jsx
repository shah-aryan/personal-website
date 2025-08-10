import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const cardData = [
  {
    company: "Susquehanna International Group",
    period: "2025",
    role: "Software Engineering Intern",
    duties: [
      "Performant Trade Execution Services",
    ]
  }, 
  {
    company: "Scale AI",
    period: "2025",
    role: "Technical Advisor Intern",
    duties: [
      "Large Language Models",
    ]
  }, 
  {
    company: "Fidelity Investments",
    period: "2024-2025",
    role: "SOFTWARE ENGINEERING INTERN",
    duties: [
      "Statistical Modeling",
    ]
  }, 
  {
  company: "Stealth Startup",
  period: "2024",
  role: "SOFTWARE ENGINEERing intern",
  duties: [
   "HR Technology"
  ]
 },
 {
  company: "TECH5AI",
  period: "2023",
  role: "MACHINE LEARNING INTERN",
  duties: [
   "Self Vaccination Technology",
  ],
  link: "https://tech5.ai/"
 },
 {
  company: "University of Michigan College of Engineering",
  period: "2025",
  role: "EECS 281 INSTRUCTIONAL AIDE",
  duties: [
   "Data Structures and Algorithms Instructional Aide"
  ]
 },
 {
  company: "Michigan Investment Group - Quant Division",
  period: "2024",
  role: "QUANTITATIVE DEVELOPER",
  duties: [
   "Limit Order Book and Portfolio Rebalancing"
  ],
  link: "https://www.michiganinvestmentgroup.com/"
 },
 {
  company: "V1@Michigan",
  period: "2024",
  role: "SOFTWARE ENGINEER",
  duties: [
   "Building ride batching service powered by Uber - batchme.app",
  ],
  link: "https://www.michiganinvestmentgroup.com/"
 },
 {
  company: "Sugar Events and Entertainment",
  period: "2023-2024",
  role: "WEDDING AND EVENT MC",
  duties: [
   "25+ Weddings, Parties, and Professional Events completed",
  ],
  link: "https://sugareventsent.com/"
 },
 {
  company: "Michigan Private Equity and Venture Capital",
  period: "2023",
  role: "Associate",
  duties: [
   "Growth Equity Sourcing",
  ],
  link: "https://www.michiganpevc.org/"
 },
//  {
//   company: "Michigan DECA",
//   period: "2022-2023",
//   role: "State Officer",
//   duties: [
//    "Shine with Shah"
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
     <h6 className="text-3xl text-primary mb-4 dark:text-white font-display">
      <a href={card.link ? card.link : "#"} target="_blank" className="hover:underline">
       {card.company}
      </a>
      <span className="mt-4 text-sm flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300 font-default">
       <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
       {card.period}
      </span>
      <span className="mt-2 text-sm flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300 font-default">
       <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
       {card.role}
      </span>
     </h6>
     {/* <div className="relative mb-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
       <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
       <span className="uppercase px-2 bg-gray-100 text-sm text-gray-500 dark:bg-primary-500">
        duties & responsibilities
       </span>
      </div>
     </div> */}
     <ul className="mt-2 text-sm  text-neutral-600 dark:text-neutral-300">
      {card.duties.map((duty, idx) => (
       <li key={idx}>{duty}</li>
      ))}
     </ul>
    </motion.div>
   ))}

  </motion.div>
  <p className="text-center text-neutral-600 dark:text-neutral-300 text-md mt-8 w-full">
    For details on my experiences, please contact me for my official resume.
  </p>
  </>


 );
};

export default TwoColumnCard;
