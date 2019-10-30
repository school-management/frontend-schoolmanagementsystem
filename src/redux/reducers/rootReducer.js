import { combineReducers } from "redux";
import parentReducer from './student/parentReducer';
import studentReducer from './student/studentReducer';
export default combineReducers({
    parentReducer: parentReducer,
    studentReducer: studentReducer
})