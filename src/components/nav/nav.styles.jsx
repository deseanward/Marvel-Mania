import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

export const NavContainer = styled.section`
	${tw`
        flex items-center justify-center justify-self-end
        w-full
        bg-black
        pt-3
        
    `}
`;

export const NavContent = styled.section`
	${tw`
        flex justify-between 
        w-[90%] md:w-[40vw]
    `}
`;

export const NavItem = styled(Link)`
	${tw`
        hover:text-[#FFCF6F]
    `}
`;
