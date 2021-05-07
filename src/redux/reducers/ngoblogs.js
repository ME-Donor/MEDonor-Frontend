import * as ActionTypes from '../ActionTypes';

export const NgoBlogs = (
  state = { isLoading: true, errMess: null, ngoblogs: [], ngoblog: null },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_NGOBLOGS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        ngoblogs: action.payload,
      };

    case ActionTypes.NGOBLOGS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.NGOBLOGS_LOADING:
      return { ...state, isLoading: true, errMess: null, ngoblogs: [] };

    case ActionTypes.ADD_NGOBLOG:
      var ngoblog = action.payload;
      return { ...state, ngoblogs: state.ngoblogs.concat(ngoblog) };

    case ActionTypes.DELETE_NGOBLOG:
      var ngoblogId = action.payload;
      var index = state.ngoblogs.indexOf(
        state.ngoblogs.filter((ngoblog) => ngoblog._id === ngoblogId)[0]
      );
      state.ngoblogs.splice(index, 1);
      return { ...state, ngoblogs: state.ngoblogs };
    case ActionTypes.FETCH_NGOBLOG:
      //  var ngoblogId = action.payload;
      return {
        ...state,
        ngoblog: action.payload,
      };

    default:
      return state;
  }
};
