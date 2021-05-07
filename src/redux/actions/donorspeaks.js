import * as ActionTypes from "../ActionTypes";
import { baseUrl } from "../../shared/baseUrl";

export const postDonorSpeak = (donorspeak) => (dispatch) => {
	const newDonorspeak = donorspeak;
	newDonorspeak.dateNum = Date.now();
	console.log("hello");
    console.log(newDonorspeak);
	console.log("bye")
	return fetch(baseUrl + 'donorspeaks', {
		method: "POST",
		body: JSON.stringify(newDonorspeak),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
		//credentials: "same-origin"
	})
		.then(
			(response) => {
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
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) => dispatch(addDonorSpeak(response)))
		.catch((error) => {
			console.log("post donorSpeaks", error.message);
			alert("Your donorspeak could not be posted\nError: " + error.message);
		});
};

export const fetchDonorSpeaks = () => (dispatch) => {

	dispatch(donorSpeaksLoading(true));
	return fetch(baseUrl + 'donorspeaks')
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
		.then((donorSpeaks) => dispatch(addDonorSpeaks(donorSpeaks)))
		.catch((error) => dispatch(donorSpeaksFailed(error.message)));
}


export const donorSpeaksLoading = () => ({
	type: ActionTypes.DONORSPEAKS_LOADING,
});
export const donorSpeaksFailed = (errmess) => ({
	type: ActionTypes.DONORSPEAKS_FAILED,
	payload: errmess,
});
export const addDonorSpeaks = (donorSpeaks) => ({
	type: ActionTypes.ADD_DONORSPEAKS,
	payload: donorSpeaks,
});

export const addDonorSpeak = (donorSpeak) => ({
	type: ActionTypes.ADD_DONORSPEAK,
	payload: donorSpeak,
});