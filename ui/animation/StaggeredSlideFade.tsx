import {Children, isValidElement} from "react";
import {motion} from "framer-motion";
import {Stack, StackProps} from "@chakra-ui/react";

const StaggeredSlideFade: React.FC<StackProps> = ({children, ...props}) => {
  return (
    <Stack {...props}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;

        return (
          <motion.div
            initial={{y: 24, opacity: 0, scale: 0.98}}
            transition={{delay: 0.25, duration: 0.5, ease: [0, 0, 0.2, 1]}}
            viewport={{once: true}}
            whileInView={{y: 0, opacity: 1, scale: 1}}
          >
            {child}
          </motion.div>
        );
      })}
    </Stack>
  );
};

export default StaggeredSlideFade;
