import * as types from '../constants/ActionTypes';

const { localStorage } = global;

const data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data || [];

const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

const genId = () => `${s4()}-${s4() }-${s4() }-${s4()}`;


const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      // console.log(index)
      result = index;
    }
  });
  return result;
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.ADD_TASK:
      // console.log(action)
      const newTask = {
        id: genId(),
        name: action.task.name,
        status: action.task.status,
      };
      state.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];

    case types.UPDATE_STATUS_TASK:
      var id = action.id;
      // console.log(action)
      var index = findIndex(state, id);
      // state[index].status = !state[index].status
      // var cloneTask = {...state[index]}
      // cloneTask.status = !cloneTask.status
      state[index] = {
        ...state[index],
        status: !state[index].status,
      };
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
  return state;
};

export default myReducer;
