import * as actionTypes from "../utils/actionTypes.js";
import axios from "axios";

export const getListRequest = () => ({
    type: actionTypes.GET_LIST_REQUEST,
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
        return axios.get('locahost:3000/posts/')
            .then(response => dispatch(getListSuccess(response.data)))
            .catch(error => dispatch(getListFailure(error)))
    };
};