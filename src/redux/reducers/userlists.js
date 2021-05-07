import * as ActionTypes from "../ActionTypes";

export const UserLists = (
	state = { isLoading: true, errMess: null, userlists: [] },
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_USERLISTS:
			return {
				...state,
				isLoading: false,
				errMess: null,
				userlists: action.payload,
			};

		case ActionTypes.USERLISTS_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };

		case ActionTypes.USERLISTS_LOADING:
			return { ...state, isLoading: true, errMess: null, userlists: [] };

		case ActionTypes.ADD_USERLIST:
				var userlist = action.payload;
				return { ...state, userlists: state.userlists.concat(userlist)};	
		
		case ActionTypes.DELETE_USERLIST: 
				var userlistId = action.payload;
				var index = state.userlists.indexOf(state.userlists.filter(userlist => userlist._id === userlistId)[0]);
				state.userlists.splice(index, 1);
				return {...state, userlists: state.userlists}
	
		default:
			return state;
	}
};