import tw, { styled } from "twin.macro";

export const CharactersPageWrapper = styled.div`
  ${tw`
    pt-[0.5em]
    w-[100vw] h-screen
  `}

  /* position: relative; */
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

export const SearchContainer = styled.div`
  ${tw`
      w-[80vw]
  `}
`;
