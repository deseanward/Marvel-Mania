import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
	${tw`
        flex flex-col items-center justify-between
        bg-black
        w-full
        pt-4
    `}
`;

export const LogoContainer = styled(Link)`
	${tw`
        flex justify-center
    `}
`;

export const Logo = styled.img`
	${tw`
        w-[50%]
        hover:opacity-[0.7]
    `}
`;
