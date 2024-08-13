import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CiSearch } from "react-icons/ci";

import SearchInput from "@components/SearchInput";

import { searchQueryInterface } from "models/interfaces";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  background-color: rgb(var(--accent-clr));

  @media (min-width: ${({ theme }) => theme.screenSizes.sm}) {
     flex-direction: row;
     justify-content: center;
  }
`;

const StyledSearchButton = styled.button`
  color: rgba(var(--text-alt-clr));
  display: flex;
  align-items: center;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState<searchQueryInterface>({
    artistName: "",
    songTitle: "",
  });

  const navigate = useNavigate();

  function handleOnSubmit(event: any) {
    event.preventDefault();
    navigate(`/${searchQuery.songTitle}/${searchQuery.artistName}`);
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery({
      ...searchQuery,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <SearchInput
        type="text"
        placeholder="Song Title"
        name="songTitle"
        required={true}
        id="songTitle"
        handleOnChange={handleOnChange}
      />
      <SearchInput
        type="text"
        placeholder="Artist Name"
        name="artistName"
        required={true}
        id="artistName"
        handleOnChange={handleOnChange}
      />
      <StyledSearchButton><CiSearch></CiSearch></StyledSearchButton>
    </StyledForm>
  );
};

export default SearchForm;
