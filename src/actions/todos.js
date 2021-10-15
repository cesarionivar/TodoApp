import { types } from '../types/types';

export const setCompleteTodo = (id) => ({
  type: types.setCompleteTodo,
  payload: {
    id,
  },
});
