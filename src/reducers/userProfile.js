import * as constants from '../util/constants';

export const userProfile = (state = null, action) => {
    switch (action.type) {
        case constants.FETCH_USER:
            return action.payload;
        default:
            return state;
    }
};