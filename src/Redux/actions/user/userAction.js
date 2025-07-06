import axios from "axios";
import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
} from "../../constant/user/userConstant";

export const userloginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = { headers: { "Content-Type" : "application/json" } };

    const {data} = await axios.post(
      "/api/user/login",
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    
    localStorage.setItem("userLogin", JSON.stringify(data.user));
  } catch (error) {
    // console.log(error);
    // console.log()
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    });
  }
};

export const logOutAction = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });
    localStorage.setItem("userLogin",null);
    localStorage.removeItem('userLogin');
    dispatch({ type: USER_LOGOUT_SUCCESS});
  } catch (error) {
    // console.log(error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerNewUser = (details) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type" : "application/json" } };

    const {data} = await axios.post(
      "/api/user/new",
      details,
      config
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    
    localStorage.setItem("userLogin", JSON.stringify(data.user));
  } catch (error) {
    // console.log(error);
    // console.log()
    dispatch({
      type: REGISTER_USER_FAIL,
      payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    });
  }
}