import React from "react";

export type AddTodoProps = {
  addTodo: (text: string) => void;
};

class AddTodo extends React.Component<AddTodoProps, { input: string }> {
  constructor(props: AddTodoProps) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input: string) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default AddTodo;
