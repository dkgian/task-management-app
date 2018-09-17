import { combineReducers } from 'redux';
// reducers list
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';

const myReducer = combineReducers({
  tasks,
  isDisplayForm,
});

export default myReducer;
