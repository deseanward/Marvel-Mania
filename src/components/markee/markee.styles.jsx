import tw, { styled } from "twin.macro";

export const MarkeeContainer = styled.div`
  ${tw`
  absolute
  left-0 top-[30vh]
    flex items-center
	w-screen
    text-[#590707]
    p-2
	mt-4
  `}

  opacity: 0.5;
  border-radius: 0.25em;
  overflow: hidden;

  span {
    position: relative;
    white-space: nowrap;
    display: inline-block;
    font-size: 12rem;

    &.scrolling {
      animation: scrollText 20s linear infinite;
    }
  }

  @keyframes scrollText {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
