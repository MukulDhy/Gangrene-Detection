import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./Redux/reducers/user/userReducer";
import {
  imageMlDetailsReducer,
  imageReducer,
} from "./Redux/reducers/image/imageReducer";

// Get login data from localStorage
const loginFromStorage = localStorage.getItem("userLogin")
  ? JSON.parse(localStorage.getItem("userLogin"))
  : null;

// Combine reducers
const rootReducer = combineReducers({
  userDetail: userReducer,
  imgDet: imageReducer,
  imgMlInfo: imageMlDetailsReducer,
});

// Set initial state
const initialState = {
  userDetail: { user: loginFromStorage },
};

// Apply middleware
const middleware = [thunk];

// Create store without redux-devtools-extension
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
