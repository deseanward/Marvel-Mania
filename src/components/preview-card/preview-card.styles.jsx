import tw, { styled } from 'twin.macro';

export const PreviewCardContainer = styled.div`
	${tw`
    h-[100px]
    w-[100px]
    bg-[tan]
    flex flex-col items-center
    shadow-lg shadow-gray-700
  `}

	opacity: ${props => (props.show === true ? 1 : 0)};
	scale: ${props => (props.show === true ? 1 : 0)};
	transition: scale 0.3s ease-in-out 0.3s;
	/* transition: opacity 0.3s ease-in-out; */
`;
