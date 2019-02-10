import { ActionTypes } from "./actionTypes";

let nextTodoId = 0;

export type Actions = AddTodoAction | ToggleTodoAction | ToggleTodoAction;

export type Todo = { id: number; text: string };

export interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: Todo;
}

export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  payload: { id: number };
}

export const addTodo = (text: string): AddTodoAction => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    id: ++nextTodoId,
    text: text
  }
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: { id }
});
