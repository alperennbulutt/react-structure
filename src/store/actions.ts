import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';

let nextTodoId = 0;

export const addTodo: any = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo: any = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter: any = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
