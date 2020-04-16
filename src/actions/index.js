import * as constants from '../util/constants';
import { jsonAPI } from '../api/jsonholderAPI';
import _ from 'lodash';

export const fetchPostAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(_fetchPosts());
        const userIds = _.uniq(_.map(getState().posts, 'userId'));
        userIds.forEach((userId) => {
            dispatch(_fetchUser(userId));
        });
    };
};

const _fetchPosts = () => {
    return async function (dispatch, getState) {
        const response = await jsonAPI.get("/posts");
        const action = {
            type: constants.FETCH_POSTS,
            payload: response.data
        };
        return dispatch(action);
    }
};

const _fetchUser = userId => async dispatch => {
    const response = await jsonAPI.get(`/users/${userId}`);
    return dispatch({ type: constants.FETCH_USER, payload: response.data });
};

//export const fetchUser = (userId) => {
//    return (dispatch, getState) => {
//        return _fetchUser(userId, dispatch);
//    };
//}

//const _fetchUser = memoize(async (userId, dispatch) => {
//    const response = await jsonAPI.get(`/users/${userId}`);
//    const action = {
//        type: constants.FETCH_USER,
//        payload: response.data
//    };
//    return dispatch(action);
//});