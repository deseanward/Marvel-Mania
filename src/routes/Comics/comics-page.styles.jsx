import tw, { styled } from "twin.macro";

export const ComicsPageWrapper = styled.div`
  ${tw`
    pt-[0.5em]
    w-[100vw] h-screen
  `}

  /* position: relative; */
  top: -0.5em;
`;

export const ComicsPageContainer = styled.div`
  ${tw`
        h-full w-[85vw]
    `}

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  justify-content: center;
  margin: 0 auto;
`;
