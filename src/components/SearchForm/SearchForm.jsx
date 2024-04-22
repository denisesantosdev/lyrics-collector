import React, { useState } from "react";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState({});

  function handleOnSubmit(event) {
    event.preventDefault();
    setFormIsSubmitted(true);
  }

  if (formIsSubmitted) {
    setFormIsSubmitted(false);
    setSearchQuery({});
  }

  const handleOnChange = (event) => {
    setSearchQuery({
      ...searchQuery,
      [event.target.name]: event.target.value,
    });
  };

  //console.log(searchQuery);

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Song Name"
        name="songTitle"
        onChange={handleOnChange}
        required={true}
      />
      <input
        type="text"
        placeholder="Artist Name"
        name="artistName"
        onChange={handleOnChange}
        required={true}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
