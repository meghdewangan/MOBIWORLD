import { combineReducers } from 'redux';
import adsReducer from './adsReducer';
import authReducer from './authReducer';
import filterReducer  from './filterReducer';

export default combineReducers({
    ads: adsReducer,
    auth: authReducer,
    filters: filterReducer,
});