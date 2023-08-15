import tw, { styled } from 'twin.macro';

export const CategoryDropdownContainer = styled.div`
	${tw`
    absolute
    mt-[2.15em]
    w-[90%] md:w-[40vw]
    bg-white
    text-black
    p-4

  `}

	display: ${props => (props.hovered ? 'block' : 'hidden')};
	opacity: ${props => (props.show === true ? 1 : 0)};
	height: ${props => (props.show === true ? '12em' : 0)};

	transition: all 0.5s ease-in-out;
`;
