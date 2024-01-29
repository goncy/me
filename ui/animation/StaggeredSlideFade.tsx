"use client";

import {Children, isValidElement} from "react";
import {motion} from "framer-motion";

type Props = {
  children: React.ReactNode;
};

function StaggeredSlideFade({children}: Props) {
  return (
    <div className="flex flex-col gap-16">
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;

        return (
          <motion.div
            initial={{y: 24, opacity: 0, scale: 0.98}}
            transition={{duration: 0.5, ease: [0, 0, 0.2, 1]}}
            viewport={{once: true, margin: "-200px 0px"}}
            whileInView={{y: 0, opacity: 1, scale: 1}}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}

export default StaggeredSlideFade;
