import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
} from "../../constant/user/userConstant";

export const userReducer = (
  state = { user: null },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, message: "Wait...." };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        message: action.payload.message,
      };

    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
        message: action.payload.message,
      };

    case USER_LOGOUT_REQUEST:
      return { loading: true, message: "Wait...." };

    case USER_LOGOUT_SUCCESS:
      return { loading: false };

    case USER_LOGOUT_FAIL:
      return {
        loading: false,
        error: action.payload,
        message: action.payload.message,
      };

    case REGISTER_USER_REQUEST:
      return { loading: true, message: "Wait...." };

    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        message: action.payload.message,
      };

    case REGISTER_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
        message: action.payload.message,
      };

    default:
      return state;
  }
};
