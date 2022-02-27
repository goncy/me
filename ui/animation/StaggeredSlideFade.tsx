import {SlideFade, Stack, StackProps} from "@chakra-ui/react";
import {Children, isValidElement} from "react";

const StaggeredSlideFade: React.FC<StackProps> = ({children, ...props}) => {
  return (
    <Stack {...props}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return null;

        return (
          <SlideFade in transition={{enter: {duration: 0.6, delay: 0.1 * index}}}>
            {child}
          </SlideFade>
        );
      })}
    </Stack>
  );
};

export default StaggeredSlideFade;
