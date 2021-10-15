import { types } from '../types/types';

const initialState = {
  todos: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setCompleteTodo:
      return {
        ...state,
      };

    default:
      return state;
  }
};
