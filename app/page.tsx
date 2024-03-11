import classes from "@/app/page.module.css";

import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";

const todos = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, architecto.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing.",
];

export default function Home() {
  return (
    <>
      <h1 className={classes.header}>Awesome TO-DO List</h1>
      <TodoForm />
      <section className={classes["todo-list"]}>
        {todos.map((todo) => (
          <TodoItem key={todo} description={todo} />
        ))}
      </section>
    </>
  );
}
