import styled from "styled-components";

import SearchForm from "@components/SearchForm/SearchForm";
import PageBg from "@components/Pagebg/PageBg";

const StyledHome = styled.div`
  display: grid;
  gap: 2rem;
`;

const Home = () => {
  return (
    <StyledHome>
      <SearchForm />
      <PageBg/>
    </StyledHome>
  );
};

export default Home;
