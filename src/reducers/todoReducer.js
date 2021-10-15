import { types } from '../types/types';

const initialState = {
  todos: [
    {
      id: 123,
      title: 'Wake up early',
      complete: false,
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addNewTodo:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case types.setCompleteTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };

    case types.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload && todo),
      };

    default:
      return state;
  }
};
