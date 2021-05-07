import * as actionTypes from '../ActionTypes';
import axios from '../axios';
//npm i axios

export const LoginInit = (loginCred) => {
  return (dispatch) => {
    console.log(loginCred);
    const requestURL = 'users/login';
    axios
      .post(requestURL, loginCred)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.user.username);
        localStorage.setItem('name', res.data.user.name);
        localStorage.setItem('contact', res.data.user.contact);
        localStorage.setItem('role', res.data.user.role);
        localStorage.setItem('address', res.data.user.address);
        localStorage.setItem('description', res.data.user.description);
        localStorage.setItem('_id', res.data.user._id);

        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          payload: res.data.user,
          token: res.data.token,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: actionTypes.LOGOUT_FAILED });
      });
  };
};

export const signupInit = (signupCred) => {
  return (dispatch) => {
    console.log(signupCred);
    const requestURL = 'users/signup';
    axios
      .post(requestURL, signupCred)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    const requestURL = '/users/logout';
    axios
      .get(requestURL)
      .then((res) => {
        console.log(res);
        localStorage.removeItem('name');
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('contact');
        localStorage.removeItem('address');
        localStorage.removeItem('description');
        dispatch({
          type: actionTypes.LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: actionTypes.LOGOUT_FAILED,
        });
      });
  };
};
