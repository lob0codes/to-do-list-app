import { TodoModel } from "@/utils/classes";
import TodoItem from "./TodoItem";
import classes from "@/components/TodoList.module.css";
import { cn } from "@/lib/utils";
import { TodoListType } from "@/enums";

export default function TodoList({
  todos,
  onDelete,
  onCompleted,
  className,
  type,
}: {
  todos: TodoModel[];
  onDelete: (id: number) => void;
  onCompleted: (id: number) => void;
  className?: string;
  type: TodoListType;
}) {
  let todosFiltered: TodoModel[];
  if (type === TodoListType.COMPLETED) {
    todosFiltered = todos.filter((todo) => todo.completed);
  } else {
    todosFiltered = todos.filter((todo) => !todo.completed);
  }
  return (
    <article className={cn(className, classes["todo-list"])}>
      <section className={classes.main}>
        {todosFiltered.length === 0 ? (
          <p className={classes["empty-todos"]}>There are no todos to show.</p>
        ) : (
          todosFiltered.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onCompleted={onCompleted}
              crossedOut={type === TodoListType.COMPLETED ? true : false}
            />
          ))
        )}
      </section>
    </article>
  );
}
