import {
  START_SEARCHING,
  SEARCH_REPO,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  FETCH_BOOKMARKS,
  FETCH_REPOS_FAILD,
  RESET_SEARCH,
} from "../actions/types";

const INITAL_STATE = {};
export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case START_SEARCHING:
      return { ...state, loading: true };
    case SEARCH_REPO:
      return { ...state, repos: action.payload, loading: false };
    case ADD_BOOKMARK:
      return { ...state, addedToBookmark: action.payload };
    case DELETE_BOOKMARK:
      return { ...state, removed: action.payload };
    case FETCH_BOOKMARKS:
      return { ...state, bookmarks: action.payload };
    case FETCH_REPOS_FAILD:
      return { ...state, loading: false };
    case RESET_SEARCH:
      return { ...state, repos: [] };
    default:
      return state;
  }
};
