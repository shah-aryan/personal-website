import React from "react";
import classnames from "classnames";
import { motion } from "framer-motion";

const SectionWrapper = ({
  heading,
  fullWidth,
  id,
  className,
  textCenter,
  ...props
}) => {
  const sectionClassNames = classnames(
    className, // className from props
    "py-16 relative lg:py-24 dark:bg-primary overflow-hidden bg-white"
  );

  return (
    <section id={id} className={sectionClassNames}>
      <div className={`container ${fullWidth && "max-w-full px-0"}`}>
        <div className="mb-8 lg:mb-16 flex justify-center">
          <motion.h1
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className={`${
              textCenter && "xl:text-center"
            }  font-display italic text-primary text-3xl text-center xl:text-left lg:text-7xl tracking-tight dark:text-white`}
          >
            {heading}
          </motion.h1>
        </div>
        {props.children}
      </div>
    </section>
  );
};

export default SectionWrapper;
