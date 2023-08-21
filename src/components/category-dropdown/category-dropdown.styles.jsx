import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const CategoryDropdownContainer = styled.div`
  ${tw`
    relative
    w-[90%] md:w-[60vw]
    bg-white/40
    backdrop-blur
    text-black
    p-4
    pb-12
    rounded-[1em]
    shadow-lg shadow-black
    // shadow-[#650809]
    mt-[-.35em]
  `}

  z-index: 100000;

  transform: ${(props) =>
    props.show === "true" ? "translateY(-100)" : "translateX(0)"};
  height: ${(props) => (props.show === "true" ? "18em" : 0)};
  opacity: ${(props) => (props.show === "true" ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;
