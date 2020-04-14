import * as constants from '../util/constants';
import { jsonAPI } from '../api/jsonholderAPI';

export const fetchPosts = () => {
    return async function (dispatch, getState) {
        const response = await jsonAPI.get("/posts");
        const action = {
            type: constants.FETCH_POSTS,
            payload: response.data
        };
        return dispatch(action);
    }
};

export const fetchUser = (userId) => {
    return async (dispatch, getState) => {
        const response = await jsonAPI.get(`/users/${userId}`);
        const action = {
            type: constants.FETCH_USER,
            payload: response.data
        };
        return dispatch(action);
    };    
}