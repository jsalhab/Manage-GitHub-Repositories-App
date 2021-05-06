import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchRepo, unset } from "../../store/actions";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner/LoadingSpinner";
import "./SearchPage.css";

const SearchPage = (props) => {
  useEffect(() => {
    props.unset();
    return () => {
      props.unset();
    };
  }, []);

  const fetchData = (searchTerm) => {
    props.searchRepo(searchTerm);
  };

  if (props.search.loading) {
    return (
      <div className="loading-spinner">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <SearchBar onFetchRepos={fetchData} />
      <SearchResults searchList={props.search.repos} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

export default connect(mapStateToProps, { searchRepo, unset })(SearchPage);
