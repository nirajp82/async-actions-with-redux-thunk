import { combineReducers } from 'redux';
import { posts } from './posts';
import { userProfile } from './userProfile';

const reducers = combineReducers({
    posts: posts,
    userProfile: userProfile
});

export default reducers;