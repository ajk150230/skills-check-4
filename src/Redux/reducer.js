import axios from "axios";
const initialState = {
  user_id: "",
  username: "",
  profilePic: "",
  post: []
};

const REGISTER = "REGISTER";
const LOGIN_USER = "LOGIN_USER";

export function login(username, password) {
  return {
    type: LOGIN_USER,
    payload: axios.post("/auth/login", { username, password }),
  };
}
export function register(username, password) {
  return {
    type: REGISTER,
    payload: axios.post("/auth/", { username, password }),
  };
}
export function search(userpost, title) {
  return {
    type: search,
    payload: axios.get(`/api/post?userpost=${userpost}&title=${title}`),
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER + "_FULFILLED":
      return {
        ...state,
        user_id: action.payload.data.user_id,
        username: action.payload.data.username,
        profilePic: action.payload.data.profilePic,
      };
    case REGISTER + "_FULFILLED":
      return {
        ...state,
        user_id: action.payload.data.user_id,
        username: action.payload.data.username,
        profilePic: action.payload.data.profilePic,
      };
    case SEARCH + "_FULFILLED":
      console.log(action.payload);
      return {
        ...state,
        post: action.payload.data,
      };
    default:
      return state;
  }
}
