import { combineReducers } from 'redux';
import { posts } from './posts';
import { users } from './users';

const reducers = combineReducers({
    posts: posts,
    users: users
});

export default reducers;