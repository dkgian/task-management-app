import * as types from '../constants/ActionTypes';

export const listAll = () => ({
  type: types.LIST_ALL,
});

export const addTask = task => ({
  type: types.ADD_TASK,
  task,
});

export const toggleForm = () => ({
  type: types.TOGGLE_FORM,
});

export const closeForm = () => ({
  type: types.CLOSE_FORM,
});

export const openForm = () => ({
  type: types.OPEN_FORM,
});

export const updateStatus = id => ({
  type: types.UPDATE_STATUS_TASK,
  id,
});
