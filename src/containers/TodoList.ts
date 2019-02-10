import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ToggleTodoAction, toggleTodo } from "../redux/actions";
import TodoList from "../components/TodoList";
import { State } from "../redux/reducers";
import { Todos } from "../redux/reducers/todos";

interface StateFromProps {
  todos: Todos;
}

interface DispatchFromProps {
  onTodoClick: (id: number) => void;
}

function mapStateToProps(state: State): StateFromProps {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<ToggleTodoAction>
): DispatchFromProps {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
