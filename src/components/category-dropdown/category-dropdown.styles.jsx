import tw, { styled } from "twin.macro";

export const CategoryDropdownContainer = styled.div`
  ${tw`
    relative
    w-[90%] md:w-[80vw]
    bg-white
    text-black
    p-4
    rounded-[1em]
    shadow-lg shadow-black
    // shadow-[#650809]
    mt-[-.35em]
  `}

  transform: ${(props) =>
    props.show === "true" ? "translateX(-100)" : "translateX(0)"};
  height: ${(props) => (props.show === "true" ? "9em" : 0)};
  opacity: ${(props) => (props.show === "true" ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;
