import tw, { styled } from "twin.macro";

export const CategoryDropdownContainer = styled.div`
  ${tw`
    w-[90%] md:w-[60vw]
    bg-white
    text-black
    p-4
    rounded-[1em]
    shadow-lg shadow-black
    // shadow-[#650809]
    mt-[-.35em]
  `}

  /* display: ${(props) => (props.hovered ? "block" : "hidden")}; */
  height: ${(props) => (props.show === 'true' ? "12em" : 0)};
  opacity: ${(props) => (props.show === 'true' ? 1 : 0)};

  transition: all 0.3s ease-in-out;
`;
