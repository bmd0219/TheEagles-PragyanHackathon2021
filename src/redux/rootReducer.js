import { combineReducers } from 'redux';
import studentLoginReducer from './student/login/loginReducers';
import adminLoginReducer from './admin/login/loginReducers';
import hodLoginReducer from './hod/login/loginReducers';

//combineReducer
export default combineReducers({
    studentauth: studentLoginReducer,
    adminauth: adminLoginReducer,
    hodauth: hodLoginReducer
});