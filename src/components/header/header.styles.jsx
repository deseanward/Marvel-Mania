import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  ${tw`
        
        flex flex-col items-center justify-between
        bg-black
        w-full
        pt-4
    `}
  position: relative;
  z-index: 100;
`;

export const LogoContainer = styled(Link)`
  ${tw`
        flex justify-center
        mb-4
        `}
`;

export const Logo = styled.img`
  ${tw`
        w-[30%]
        hover:opacity-[0.7]
        shadow shadow-gray-700
    `}
`;
