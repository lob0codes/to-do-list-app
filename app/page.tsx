"use client";

import classes from "@/app/page.module.css";

import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";

const todos: string[] = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, architecto.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing.",
];

export default function Home() {
  const [todoList, setTodos] = useState(todos);

  function formSubmitHandler(todoDescription: string | undefined) {
    if (todoDescription) {
      setTodos((prevState) => [...prevState, todoDescription]);
    }
  }

  return (
    <>
      <h1 className={classes.header}>Awesome TO-DO List</h1>
      <TodoForm onSubmit={formSubmitHandler} />
      <section className={classes["todo-list"]}>
        {todoList.map((todo) => (
          <TodoItem key={todo} description={todo} />
        ))}
      </section>
    </>
  );
}
