import * as React from "react";
import Todo from "./Todo";
import { Todos } from "../redux/reducers/todos";

export interface TodoListProps {
  todos: Todos;
  onTodoClick: (id: number) => void;
}

class TodoList extends React.Component<TodoListProps, {}> {
  render() {
    const { todos, onTodoClick } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
