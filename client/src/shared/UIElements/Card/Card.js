import React, { useState } from "react";
import { connect } from "react-redux";
import { addBookmark, deleteBookmark } from "../../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";

import "./Card.css";

const Card = (props) => {
  const { id, owner, name, description, hasIcon } = props;
  const [bookmark, setBookmrk] = useState(false);

  const toggleBookmark = () => {
    setBookmrk((prevState) => !prevState);
    if (!bookmark) {
      props.addBookmark(id);
    } else {
      props.deleteBookmark(id);
    }
  };

  return (
    <div className="wrapper margin-bottom-2rem">
      <div className="card">
        {hasIcon && (
          <FontAwesomeIcon
            onClick={toggleBookmark}
            icon={bookmark ? solidBookmark : regularBookmark}
            size="lg"
          />
        )}
        <i className="fa fa-spinner fa-spin"></i>
        <img src={owner.avatar_url} alt="hey" className="thumb" />
        <article>
          <h1>{name}</h1>
          <span>{description}</span>
        </article>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

export default connect(mapStateToProps, { addBookmark, deleteBookmark })(Card);
