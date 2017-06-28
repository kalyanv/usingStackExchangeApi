import { combineReducers } from 'redux';
import mySearchBox from './searchBox.js';
import myUserList from './userReducer.js';

const rootReducer = combineReducers({
	mySearchBox,
	myUserList
});
export default rootReducer;
