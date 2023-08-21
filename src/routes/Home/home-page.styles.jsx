import tw, { styled } from "twin.macro";

export const HomePageContainer = styled.div`
  ${tw`
        w-full h-[90vh]
        flex flex items-center justify-between
        
    `}

  #mania {
    ${tw`
      text-gray-400
      self-end
    `}
    font-size: 12rem;
    opacity: 0.6;
  }

  overflow: hidden;
`;
