"use client";

import classes from "@/app/page.module.css";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { TodoModel } from "@/utils/classes";
import { useState } from "react";

const todos: TodoModel[] = [
  new TodoModel("Lorem ipsum, dolor sit amet consectetur adipisicing.", 1),
  new TodoModel(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, architecto.",
    2
  ),
  new TodoModel("Lorem ipsum, dolor sit amet consectetur adipisicing.", 3),
];

export default function Home() {
  const [todoList, setTodos] = useState(todos);

  function addNewTodo(todoDescription: string | undefined) {
    if (!todoDescription) {
      return;
    }

    let newTodo: TodoModel;

    if (todoList.length === 0) {
      newTodo = new TodoModel(todoDescription, 1);
    } else {
      const latestId = todoList[todoList.length - 1].id;

      newTodo = new TodoModel(todoDescription, latestId + 1);
    }
    setTodos((prevState) => [...prevState, newTodo]);
  }

  function deleteTodo(id: number) {
    //Is not required to create a new object with the data of prevState to avoid mutating prevState, because function "Filter"
    //returns a new object and doesn't mutate the orignal state.
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1 className={classes.header}>Awesome TO-DO List</h1>
      <div className="block--horizontal">
        <TodoForm onSubmit={addNewTodo} />
        <TodoList todos={todoList} onDelete={deleteTodo} />
      </div>
    </>
  );
}
