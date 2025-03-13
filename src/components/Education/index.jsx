import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    section: "University of Michigan, Computer Science and Engineering",
    location: "Ann Arbor, MI",
    degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
    year: "2027",
    scholarships: [
      "DECA Scholarship - DECA Inc's largest and most prestigious scholarship. 5 selected out of 10,000+ applicants for positive impact.",
      "CFCU Scholarship",
      "Local Scholarship",
      "Regents Scholarships",
      "William J. Branstrom Freshman Prize",
    ],
    coursework: {
      computerScience: [
        "EECS 281 - Data Structures & Algorithms",
        "EECS 482 + 498: Advanced Operating Systems",
        "EECS 445 - Machine Learning",
        "EECS 489 - Computer Networks",
        "EECS 485 - Web Systems",
        "EECS 370 - Computer Organization",
        "EECS 203 - Discrete Mathematics",
        "EECS 280 - Programming and Data Structures",
        "EECS 201 - Linux Programming",
      ],
      mathematics: [
        "MATH 425 - Probability",
        "MATH 215 - Multivariable & Vector Calculus",
        "MATH 214 - Linear Algebra",
      ],
    },
  },
  {
    section: "University of Michigan, Stephen M. Ross School of Business",
    location: "Ann Arbor, MI",
    degree: "Bachelor of Business Administration",
    year: "2027",
    activities: [
      "Phi Beta Lambda Professional Business Fraternity - Standards Board Member",
      "Michigan Investment Group - Quant Division",
      "Michigan Private Equity and Venture Capital Club",
      "V1@Michigan Product Studio, Strategy Team",
      "MHacks Sponsorships"
    ],
    coursework: {
      economics: [
        "ECON 398 - Game Theory & Strategy",
        "ECON 310 - Money & Banking",
        "ECON 101 - Microeconomics",
        "ECON 102 - Macroeconomics",
      ],
      business: [
        "TO 301 - Business Analytics",
        "ACC 300 - Financial Accounting",
        "BCOM 250 - Business Communication",
        "BA 100, 200 - Foundations in Business",
      ],
    },
  },
];

const EducationList = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
    >
      {educationData.map((section, index) => (
        <motion.div
          key={index}
          variants={{
            offscreen: { y: 150 },
            onscreen: {
              y: 0,
              transition: { type: "spring", bounce: 0.4, duration: 1 },
            },
          }}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer bg-gray-100 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500 mb-12"
        >
          <h6 className="text-xl font-bold text-primary mb-4 dark:text-white font-display ">
            {section.section}
            <span className="mt-4 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300 font-normal">
              {section.location}
            </span>
            {/* <span className="mt-2 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300">
              GPA: {section.gpa}
            </span> */}
            <span className="mt-2 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300 font-normal">
              {section.degree}
            </span>
            {/* {(
              <span className="mt-2 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300">
                {section.minor ? `${section.minor}` : "     \u3000"}
              </span>
            )} */}
          </h6>
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
                Relevant Coursework
              </span>
            </div>
          </div>
          {section.coursework && (
            <>
              {section.coursework.computerScience && (
                <>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2 font-display">
                    Computer Science
                  </h3>
                  <ul className="text-sm text-primary-400 list-inside list-disc dark:text-neutral-200 mb-4">
                    {section.coursework.computerScience.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {section.coursework.mathematics && (
                <>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2 font-display">
                    Mathematics
                  </h3>
                  <ul className="text-sm text-primary-400 list-inside list-disc dark:text-neutral-200 mb-4">
                    {section.coursework.mathematics.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {section.coursework.economics && (
                <>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2 font-display">
                    Economics
                  </h3>
                  <ul className="text-sm text-primary-400 list-inside list-disc dark:text-neutral-200 mb-4">
                    {section.coursework.economics.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {section.coursework.business && (
                <>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2 font-display">
                    Business
                  </h3>
                  <ul className="text-sm text-primary-400 list-inside list-disc dark:text-neutral-200 mb-4">
                    {section.coursework.business.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}

          {section.activities && (
            <>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2 font-display">
                Activities
              </h3>
              <ul className="text-sm text-primary-400 list-inside list-disc dark:text-neutral-200 mb-4">
                {section.activities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {section.scholarships && (
            <>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2 font-display">
                Scholarships
              </h3>
              <ul className="text-sm text-primary-400 list-inside list-disc dark:text-neutral-200 mb-4">
                {section.scholarships.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EducationList;
