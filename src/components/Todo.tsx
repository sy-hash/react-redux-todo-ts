import * as React from "react";
interface TodoProps {
  completed: boolean;
  text: string;
  onClick: () => void;
}

class Todo extends React.Component<TodoProps, {}> {
  render() {
    const { completed, text, onClick } = this.props;
    return (
      <li
        className="todo-item"
        onClick={onClick}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {completed && completed ? "👌" : "👋"} {text}
      </li>
    );
  }
}

export default Todo;
