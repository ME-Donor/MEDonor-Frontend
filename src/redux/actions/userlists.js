//----------------NGOLIST---------------------------------//
import * as ActionTypes from "../ActionTypes";
import { baseUrl } from "../../shared/baseUrl";


export const fetchUserLists = () => (dispatch) => {

	dispatch(userlistsLoading(true));
	return fetch(baseUrl + 'users',{
		headers:{
		  Authorization: `Bearer ${localStorage.getItem('token')}`,
		}
	  })
		.then(
			
			(response) => {
                console.log(response);
				if (response.ok) {
					return response;
				} else {
					var error = new Error(
						"Error " + response.status + ": " + response.statusText
					);

					error.response = response;
                    
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((userlists) => dispatch(adduserlists(userlists)))
		.catch((error) => dispatch(userlistsFailed(error.message)));
}


export const userlistsLoading = () => ({
	type: ActionTypes.USERLISTS_LOADING,
});
export const userlistsFailed = (errmess) => ({
	type: ActionTypes.USERLISTS_FAILED,
	payload: errmess,
});
export const adduserlists = (userlists) => ({
	type: ActionTypes.ADD_USERLISTS,
	payload: userlists,
});

export const adduserlist = (userlist) => ({
	type: ActionTypes.ADD_USERLIST,
	payload: userlist,
});
