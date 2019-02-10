import { combineReducers } from "redux";
import todos, { Todos } from "./todos";

export interface State {
  todos: Todos;
}

export const rootReducers = combineReducers({ todos });
