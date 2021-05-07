import * as ActionTypes from '../ActionTypes';

export const NgoBeneficiaries = (
  state = { isLoading: true, errMess: null, ngobeneficiaries: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_NGOBENEFICIARIES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        ngoblogs: action.payload,
      };

    case ActionTypes.NGOBENEFICIARIES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.NGOBENEFICIARIES_LOADING:
      return { ...state, isLoading: true, errMess: null, ngobeneficiaries: [] };

    case ActionTypes.ADD_NGOBENEFICIARY:
      var ngobeneficiary = action.payload;
      return {
        ...state,
        isLoading: false,
        ngobeneficiaries: state.ngobeneficiaries.concat(ngobeneficiary),
      };

    case ActionTypes.DELETE_NGOBENEFICIARY:
      var ngobeneficiaryId = action.payload;
      var index = state.ngobeneficiaries.indexOf(
        state.ngobeneficiaries.filter(
          (ngobeneficiary) => ngobeneficiary._id === ngobeneficiaryId
        )[0]
      );
      state.ngobeneficiaries.splice(index, 1);
      return { ...state, ngobeneficiaries: state.ngobeneficiaries };

    default:
      return state;
  }
};
