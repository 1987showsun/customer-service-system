import { combineReducers } from "redux";

//import reducer
import home                from './home';
import get                 from './get';
import post                from './post';
import put                 from './put';

export default combineReducers({
  home,
  get,
  post,
  put,
})
