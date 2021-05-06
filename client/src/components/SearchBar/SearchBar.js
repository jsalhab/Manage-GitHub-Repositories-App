import { useState } from "react";

import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
    setEnteredNameIsValid(false);
    setEnteredNameIsValid(true);
  };
  const fetchRepos = (event) => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      setEnteredNameIsTouched(true);
      if (event.target.value.trim() === "") {
        setEnteredNameIsValid(false);
        return;
      }

      props.onFetchRepos(event.target.value);
    }
  };
  return (
    <div className="Search">
      <input
        className="SearchInput"
        type="text"
        onChange={handleOnChange}
        onKeyPress={fetchRepos}
        value={searchTerm}
        placeholder="Search by repository name"
      />
      {!enteredNameIsValid && enteredNameIsTouched && (
        <div className="error-msg">Please enter a valid repository name</div>
      )}
    </div>
  );
};

export default SearchBar;
