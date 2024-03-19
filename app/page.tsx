"use client";

import classes from "@/app/page.module.css";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { TodoModel } from "@/utils/classes";
import { useState } from "react";
import { TodoListType } from "@/enums";

import { cn } from "@/lib/utils";

const todos: TodoModel[] = [
  new TodoModel("Lorem ipsum, dolor sit amet consectetur adipisicing.", 1),
  new TodoModel(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, architecto.",
    2
  ),
  new TodoModel("Lorem ipsum, dolor sit amet consectetur adipisicing.", 3),
];

export default function Home() {
  const [todoList, setTodos] = useState<TodoModel[]>(todos);

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

  function changeCompletedStatus(id: number) {
    setTodos((prevTodoList) => {
      const updatedTodoList = prevTodoList.map((todo) => {
        if (todo.id === id) {
          return {
            description: todo.description,
            id: todo.id,
            completed: !todo.completed,
          } as TodoModel;
        }
        return todo;
      });
      return updatedTodoList;
    });
  }

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.title}>Awesome TO-DO List</h1>
        <TodoForm onSubmit={addNewTodo} className="block--horizontal" />
      </header>
      <section className={cn("block--horizontal", classes.content)}>
        <TodoList
          todos={todoList}
          onDelete={deleteTodo}
          onCompleted={changeCompletedStatus}
          type={TodoListType.NORMAL}
        />
        <TodoList
          todos={todoList}
          onDelete={deleteTodo}
          onCompleted={changeCompletedStatus}
          type={TodoListType.COMPLETED}
        />
      </section>
    </>
  );
}
