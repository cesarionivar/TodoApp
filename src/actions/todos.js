import { types } from '../types/types';

export const addNewTodo = (todo) => ({
  type: types.addNewTodo,
  payload: todo,
});

export const setCompleteTodo = (id) => ({
  type: types.setCompleteTodo,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: types.deleteTodo,
  payload: id,
});
