import React, { useState, useEffect, useContext } from "react";
import Btn from "../Btn/Btn";
import Input from "../Input/Input";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
  padding: 1rem;
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
