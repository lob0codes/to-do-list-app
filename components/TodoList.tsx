import { TodoModel } from "@/utils/classes";
import TodoItem from "./TodoItem";
import classes from "@/components/TodoList.module.css";

export default function TodoList({
  todos,
  onDelete,
}: {
  todos: TodoModel[];
  onDelete: (id: number) => void;
}) {
  return (
    <article className={classes["todo-list"]}>
      <section className={classes.main}>
        {todos.length === 0 ? (
          <p className={classes["empty-todos"]}>There are no todos to show.</p>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))
        )}
      </section>
    </article>
  );
}
