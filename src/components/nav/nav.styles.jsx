import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

export const NavContainer = styled.section`
	${tw`
        flex flex-col items-center
        w-full
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
        flex flex-col items-center
    `}
`;

export const ArrowContainer = styled.span`
	transition: all 0.5s ease-in-out;

	&.arrow {
		text-align: center;
		color: white;
		border: none;
		outline: none;
		opacity: ${props => (props.show === true ? 1 : 0)};
	}
`;

export const PreviewContainer = styled.section`
	${tw`
    flex justify-evenly
    `}
`;
