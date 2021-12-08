import { combineReducers } from 'redux';

import tweets from './tweets';
import auth from './auth';
import users from './users';

export default combineReducers({
    tweets,auth,users
});