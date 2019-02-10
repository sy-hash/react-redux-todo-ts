import { ActionTypes } from "../actionTypes";
import { Actions } from "../actions";
import Todo from "../../models/todo";

export type Todos = Todo[];

function todos(state: Todos = [], action: Actions): Todos {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    case ActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

export default todos;
