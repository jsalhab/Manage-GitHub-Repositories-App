import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBookmarks } from "../../store/actions";
import Card from "../../shared/UIElements/Card/Card";
import "./Bookmarks.css";

const Bookmarks = (props) => {
  useEffect(() => {
    props.fetchBookmarks();
  }, []);
  return (
    <div className="row">
      {props.bookmarks &&
        props.bookmarks.map((item) => (
          <Card {...item} key={item.id} hasIcon={false} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookmarks: state.search.bookmarks,
  };
};

export default connect(mapStateToProps, { fetchBookmarks })(Bookmarks);
