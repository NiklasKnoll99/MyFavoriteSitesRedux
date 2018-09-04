import { combineReducers } from 'redux';

import userList from './userList';
import fetchData from './fetchData';
import fetchSite from './fetchSites';

export default combineReducers({
    fetchSite
});
