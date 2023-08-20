import tw, { styled } from "twin.macro";

export const CharactersPageWrapper = styled.div`
  ${tw`
    pt-[0.5em]
    w-screen h-screen
  `}

  /* position: relative; */
  margin-left: -6em;
  top: -0.5em;
`;

export const CharactersPageContainer = styled.div`
  ${tw`
        h-full w-[85vw]
    `}

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  justify-content: center;
  margin: 0 auto;
`;
