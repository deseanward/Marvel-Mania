import tw, { styled } from 'twin.macro';

export const StyledLinkContainer = styled.section`
	${tw`w-fit hover:bg-[tan] hover:text-black py-2 px-4 rounded-md`}

    :hover {cursor: pointer}
`;

export const BackButtonContainer = styled.section`
	${tw`w-fit hover:bg-black hover:text-[tan] py-2 px-4 rounded-md`}

	border: 1px solid;

	:hover {
		cursor: pointer;
	}
`;