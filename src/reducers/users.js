import * as constants from '../util/constants';

export const users = (state = [], action) => {
    switch (action.type) {
        case constants.FETCH_USER:
            return [...state, action.payload];
        default:
            return state;
    }
};