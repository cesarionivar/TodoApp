import { types } from '../types/types';

const initialState = {
  activeTodo: null,
  todos: [],
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

    case types.setEditTodo:
      return {
        ...state,
        activeTodo: action.payload,
      };

    case types.editTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
        activeTodo: null,
      };

    default:
      return state;
  }
};
