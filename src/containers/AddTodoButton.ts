import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import AddTodo, { AddTodoProps } from "../components/AddTodo";
import { Todos } from "../redux/reducers/todos";
import { AddTodoAction, addTodo } from "../redux/actions";

const mapStateToProps = (state: Todos): {} => {
  return { input: "" };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AddTodoAction>
): AddTodoProps => {
  return {
    addTodo: (s: string) => {
      dispatch(addTodo(s));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
