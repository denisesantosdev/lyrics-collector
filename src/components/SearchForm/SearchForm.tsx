import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Btn from "@components/Btn/Btn";
import Input from "@components/Input/Input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 700px) {
     flex-direction: row;
     justify-content: center;
  }
`;

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState({});
  const navigate = useNavigate();

  function handleOnSubmit(event) {
    event.preventDefault();
    navigate(`/${searchQuery.songTitle}/${searchQuery.artistName}`);
  }

  const handleOnChange = (event) => {
    setSearchQuery({
      ...searchQuery,
      [event.target.name]: event.target.value,
    });
  };

  //console.log(searchQuery);

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <Input
        type="text"
        placeholder="Song Title"
        name="songTitle"
        required={true}
        id="songTitle"
        handleOnChange={handleOnChange}
      />
      <Input
        placeholder="Artist Name"
        name="artistName"
        required={true}
        id="artistName"
        handleOnChange={handleOnChange}
      />
      <Btn
        btnText="Search"
        isPrimary={true}
      />
    </StyledForm>
  );
};

export default SearchForm;
