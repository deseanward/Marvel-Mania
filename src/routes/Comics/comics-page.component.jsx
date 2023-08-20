import { useSelector } from "react-redux";

import { ComicsPageContainer } from "./comics-page.styles";

const ComicsPage = () => {
  const comics = useSelector((state) => state.comics.comicsData);

  console.log('FROM COMICS PAGE: ', comics);

  return (
    <ComicsPageContainer>
      <h1>Comics</h1>
    </ComicsPageContainer>
  );
};

export default ComicsPage;
