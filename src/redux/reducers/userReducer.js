import * as actionTypes from '../ActionTypes';

const initialState = {
  username: null || localStorage.getItem('username'),
  role: null || localStorage.getItem('role'),
  token: null || localStorage.getItem('token'),
  contact: null || localStorage.getItem('contact'),
  address: null || localStorage.getItem('address'),
  description: null || localStorage.getItem('description'),
  name: null || localStorage.getItem('name'),
  _id: null || localStorage.getItem('_id'),
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        username: null,
        role: null,
        token: null,
        contact: null,
        address: null,
        name: null,
        description: null,
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        token: action.token,
      };
    default:
      return state;
  }
};

export default UserReducer;

