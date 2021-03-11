import {combineReducers} from 'redux';
import userReducer from './userReducer'; // importing reducer
export default combineReducers({
  user: userReducer, // combine the reducers as much as we can
});
