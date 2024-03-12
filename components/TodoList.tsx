import TodoItem from "./TodoItem";
import classes from "@/components/TodoList.module.css";

export default function TodoList({ todos }: { todos: string[] }) {
  return (
    <article className={classes["todo-list"]}>
      <section className={classes.main}>
        {todos.map((todo) => (
          <TodoItem key={todo} description={todo} />
        ))}
      </section>
    </article>
  );
}
