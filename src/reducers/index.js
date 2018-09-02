import { combineReducers } from 'redux'
// reducers list
import tasks from './tasks'

const myReducer = combineReducers({
    tasks : tasks
});

export default myReducer;