import Card from "../../shared/UIElements/Card/Card";
import "./SearchResults.css";

const SearchResults = ({ searchList }) => {
  return (
    <div className="row">
      {searchList &&
        searchList.map((item) => <Card {...item} key={item.id} hasIcon />)}
    </div>
  );
};

export default SearchResults;
