import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";

export const NavContainer = styled.section`
  ${tw`
        flex flex-col items-center
        w-full
        h-10
        mt-16
        pt-1
        bg-black
       absolute
       shadow-xl shadow-gray-800

    `}
`;

export const NavContent = styled.section`
  ${tw`
        flex justify-between items-center
        w-[90%] md:w-[60vw]

    `}

  .inactive {
    pointer-events: none;
  }
`;

export const NavItem = styled(Link)`
  ${tw`
        hover:text-[#FFCF6F]
        flex flex-col items-center
        w-full
    `}
`;

export const ArrowContainer = styled.span`
  transition: all 0.5s ease-in-out;

  &.arrow {
    margin-top: -1em;
    text-align: center;
    color: white;
    border: none;
    outline: none;
    opacity: ${(props) => (props.show === "true" ? 1 : 0)};
  }
`;

export const PreviewContainer = styled.section`
  ${tw`
    flex justify-evenly
    `}
`;
