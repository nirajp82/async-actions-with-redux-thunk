import * as constants from '../util/constants';

export const posts = (state = [], action) => {
    switch (action.type) {
        case constants.FETCH_POSTS:
            return action.payload;
        default:
            return state;
    }
};

