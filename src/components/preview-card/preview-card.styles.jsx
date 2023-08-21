import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const PreviewCardWrapper = styled.div`
  ${tw`
    flex flex-col items-center
    mx-2
  `}

  transition: all 0.3s ease-in-out 0.5s;
  .preview-title {
    opacity: ${(props) => (props.show === "true" ? 1 : 0)};
  }
`;

export const PreviewCardContainer = styled(motion.div)`
  ${tw`
  
    h-fit w-fit
    flex flex-col items-center justify-center
    // shadow-xl shadow-gray-500
    cursor-pointer
  `}

  .image {
    position: absolute;
    top: -4em;
  }

  #btn-link {
    border: 2px solid black;
  }
`;
