//----------------BENEFICIARY---------------------------------//
import * as ActionTypes from "../ActionTypes";
import { baseUrl } from "../../shared/baseUrl";


export const addNgoBeneficiary = (ngobeneficiary) => ({
	type: ActionTypes.ADD_NGOBENEFICIARY,
	payload: ngobeneficiary,
});

export const postNgoBeneficiary = (ngobeneficiary) => (dispatch) => {
	const newNgoBeneficiary = ngobeneficiary;
	newNgoBeneficiary.dateNum = Date.now();
	const bearer = "Bearer " + localStorage.getItem("token");
   
	return fetch(baseUrl + "ngobeneficiary", {
		method: "POST",
		body: JSON.stringify(newNgoBeneficiary),
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
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
		.then((response) => dispatch(addNgoBeneficiary(response)))
		.catch((error) => {
			console.log("post beneficiary", error.message);
			alert("Your beneficiary could not be posted\nError: " + error.message);
		});
};

export const fetchNgoBeneficiaries = () => (dispatch) => {
	dispatch(ngobeneficiariesLoading(true));

	return fetch(baseUrl + "ngobeneficiary")
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
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((ngobeneficiaries) => dispatch(addNgoBeneficiary(ngobeneficiaries)))
		.catch((error) => dispatch(ngobeneficiariesFailed(error.message)));
};


// export const deleteNgoBeneficiary = (ngobeneficiaryId) => (dispatch) => {
// 	const bearer = "Bearer " + localStorage.getItem("token");

// 	return fetch(baseUrl + "ngobeneficiary/" + ngobeneficiaryId, {
// 		method: "DELETE",
// 		headers: {
// 			"Content-Type": "application/json",
// 			Authorization: bearer,
// 		},
//         //credentials: "same-origin"
//     })
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             throw error;
//       })
//     .then(response => response.json())
//     .then(() => dispatch(removeNgoBeneficiary(ngobeneficiaryId)))
// 	.then(() => console.log('NgoBeneficiary deleted!!'))
//     .catch(error => dispatch(ngobeneficiariesFailed(error.message)));
// };

// export const removeNgoBeneficairy = (ngobeneficiaryId) => ({
// 	type: ActionTypes.DELETE_NGOBENEFICIARY,
// 	payload: ngobeneficiaryId,
// });

export const ngobeneficiariesLoading = () => ({
	type: ActionTypes.NGOBENEFICIARIES_LOADING,
});

export const ngobeneficiariesFailed = (errmess) => ({
	type: ActionTypes.NGOBENEFICIARIES_FAILED,
	payload: errmess,
});

export const addNgoBeneficiaries = (ngobeneficiaries) => ({
	type: ActionTypes.ADD_NGOBENEFICIARIES,
	payload: ngobeneficiaries,
});