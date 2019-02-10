import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodoButton from "./containers/AddTodoButton";
import TodoList from "./containers/TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <AddTodoButton />
        <TodoList />
      </div>
    );
  }
}

export default App;
