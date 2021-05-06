import api from "../../apis/api";
import history from "../../history";

import {
  START_SEARCHING,
  SEARCH_REPO,
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  FETCH_BOOKMARKS,
  FETCH_REPOS_FAILD,
  LOGIN,
  SIGNUP,
  FAILD_REQUEST,
  SET_TOKEN,
  LOGOUT,
  RESET_SEARCH,
} from "./types";

export const searchRepo = (searchterm) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_SEARCHING });
    const response = await api.get(`/search/${searchterm}`);
    dispatch({ type: SEARCH_REPO, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_REPOS_FAILD });
  }
};

export const addBookmark = (id) => async (dispatch, getState) => {
  const response = await api.get(`/bookmark/${id}`);
  dispatch({ type: ADD_BOOKMARK, payload: response });
};

export const deleteBookmark = (id) => async (dispatch, getState) => {
  const response = await api.delete(`/remove-bookmark/${id}`);
  dispatch({ type: DELETE_BOOKMARK, payload: response });
};

export const fetchBookmarks = () => async (dispatch, getState) => {
  const response = await api.get(`/bookmarks`);
  dispatch({ type: FETCH_BOOKMARKS, payload: response.data });
};

export const login = (formData) => async (dispatch, getState) => {
  try {
    const response = await api.post(`/login`, formData);
    dispatch({ type: LOGIN, payload: response.data });
    dispatch({ type: SET_TOKEN, payload: response.data.token });
    history.push("/search");
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: response.data.userId,
        token: response.data.token,
      })
    );
  } catch (err) {
    dispatch({ type: FAILD_REQUEST, payload: err.response.data });
  }
};

export const signup = (formData) => async (dispatch, getState) => {
  try {
    const response = await api.post(`/signup`, formData);
    dispatch({ type: SIGNUP, payload: response.data });
    dispatch({ type: SET_TOKEN, payload: response.data.token });
    history.push("/search");
  } catch (err) {
    dispatch({ type: FAILD_REQUEST, payload: err.response.data });
  }
};

export const setToken = () => async (dispatch, getState) => {
  const storedData = JSON.parse(localStorage.getItem("userData"));
  if (storedData && storedData.token) {
    dispatch({ type: SET_TOKEN, payload: storedData.token });
  }
};

export const removeToken = () => async (dispatch, getState) => {
  localStorage.removeItem("userData");
  dispatch({ type: LOGOUT });
  history.push("/");
};

export const unset = () => async (dispatch, getState) => {
  dispatch({ type: RESET_SEARCH });
};
