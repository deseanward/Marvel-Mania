import tw, { styled } from "twin.macro";

export const DetailsPageWrapper = styled.div`
  ${tw`
    pt-[0.5em]
    w-[100vw] h-screen
    bg-white
  `}

  /* position: relative; */
  top: -0.5em;
`;

export const DetailsPageContainer = styled.div`
  ${tw`
        flex justify-center
    `}

  margin: 0 auto;
`;
