//---------------------------------------NGOBLOG DEMANDS------------------------------------------------//
import * as ActionTypes from '../ActionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const addNgoBlogs = (ngoblogs) => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_NGOBLOGS,
    payload: ngoblogs,
  });
};

export const postNgoBlog = (ngoblog) => (dispatch) => {
  const newNgoBlog = ngoblog;

  return fetch(baseUrl + 'ngoblogs', {
    method: 'POST',
    body: JSON.stringify(newNgoBlog),
    headers: {
      'Content-Type': 'application/json',
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
            'Error ' + response.status + ': ' + response.statusText
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
    .then((response) => dispatch(addNgoBlog(response)))
    .catch((error) => {
      console.log('post ngoblog', error.message);
      alert('Your ngoblog could not be posted\nError: ' + error.message);
    });
};

export const fetchNgoBlogs = () => (dispatch) => {
  dispatch(ngoblogsLoading(true));

  return fetch(baseUrl + 'ngoblogs', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(
      (response) => {
        console.log('res!', response);
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
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
    .then((ngoblogs) => dispatch(addNgoBlogs(ngoblogs)))
    .catch((error) => dispatch(ngoblogsFailed(error.message)));
};

export const fetchNgoBlogById = (ngoblogId) => (dispatch) => {
  return fetch(baseUrl + 'ngoblogs/' + ngoblogId, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
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
    .then((ngoblogId) => {
      dispatch(fetchNgoblog(ngoblogId));
    })
    .then(() => console.log('Ngoblog fetched!!'))
    .catch((error) => console.log(error));
};

export const deleteNgoBlog = (ngoblogId) => (dispatch) => {
  return fetch(baseUrl + 'ngoblog/' + ngoblogId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    //credentials: "same-origin"
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
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
    .then(() => dispatch(removeNgoBlog(ngoblogId)))
    .then(() => console.log('NgoBlog deleted!!'))
    .catch((error) => dispatch(ngoblogsFailed(error.message)));
};

export const removeNgoBlog = (ngoblogId) => ({
  type: ActionTypes.DELETE_NGOBLOG,
  payload: ngoblogId,
});

export const ngoblogsLoading = () => ({
  type: ActionTypes.NGOBLOGS_LOADING,
});

export const ngoblogsFailed = (errmess) => ({
  type: ActionTypes.NGOBLOGS_FAILED,
  payload: errmess,
});

export const addNgoBlog = (ngoblog) => ({
  type: ActionTypes.ADD_NGOBLOG,
  payload: ngoblog,
});

export const fetchNgoblog = (ngoblog) => ({
  type: ActionTypes.FETCH_NGOBLOG,
  payload: ngoblog,
});
