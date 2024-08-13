import styled from "styled-components";

import SearchForm from "@components/SearchForm";
import PageBg from "@components/PageBg";
import Header from "@components/Header";

const StyledHome = styled.div`
 
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <SearchForm />
      <PageBg />
    </StyledHome>
  );
};

export default Home;
