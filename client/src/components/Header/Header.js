import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <div className="jumbotron">
        <div className="heading">Git Repositories</div>
        <div className="subHeading">
          A dashboard for repositories based on repository name
        </div>
        {props.auth.token && (
          <div className="links">
            <Link to="/search">Home page</Link>
            <Link to="/bookmarks">All Bookmarks</Link>
            <button className="log-out" onClick={props.logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
