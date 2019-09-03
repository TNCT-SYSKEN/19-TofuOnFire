import * as actionTypes from "../utils/actionTypes.js";
import axios from "axios";

export const getListRequest = () => ({
    type: actionTypes.GET_LIST_REQUEST,
    items: [],
});

export const getListSuccess = (json) => ({
    type: actionTypes.GET_LIST_SUCCESS,
    items: json,
});

export const getListFailure = (error) => ({
    type: actionTypes.GET_LIST_FAILURE,
    error: error,
});

export const getList = () => {
    return (dispatch) => {
        dispatch(getListRequest());
        return axios.get('http://locahost:3000/posts/')
            .then(response => dispatch(getListSuccess(response.data)))
            .catch(error => dispatch(getListFailure(error)))
    };
};

export const getPresenRequest = (postid) => ({
    type: actionTypes.GET_PRESEN_REQUEST,
    postid: postid,
});

export const getPresenSuccess = (json) => ({    
    type: actionTypes.GET_PRESEN_SUCCESS,
    items: json,
});

export const getPresenFailure = (error) => ({
    type: actionTypes.GET_PRESEN_FAILURE,
    error: error,
});

export const getPresen = (postid) => {
    return (dispatch) => {
        dispatch(getPresenRequest(postid));
        return axios.get("http://localhost:3000/posts/" + postid)
            .then(response => dispatch(getPresenSuccess(response.data)))
            .catch(error => dispatch(getListFailure(error)))
    };
};
// export const postPresenRequest = (json) => ({
//     type: actionTypes.POST_PRESEN_REQUEST,
//     items: json,
// });

// export const postPresenSuccess = () => ({
//     type: actionTypes.POST_PRESEN_SUCCESS,
// });

// export const postPresenFailure = (error) => ({
//     type: actionTypes.POST_PRESEN_FAILURE,
//     error: error,
// });

// export const postPresen = () => {
//     return (dispatch) => {
//         dispatch(postPresenRequest);
//         return axios.post("")
//     };
// }; 
