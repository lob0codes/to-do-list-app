import { TodoModel } from "@/utils/classes";
import TodoItem from "./TodoItem";
import classes from "@/components/TodoList.module.css";
import { TodoListType } from "@/enums";

import { EllipsisVertical } from "lucide-react";
import { cn } from "@/lib/utils";

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
  let noTodosContent;
  if (type === TodoListType.COMPLETED) {
    todosFiltered = todos.filter((todo) => todo.completed);
    noTodosContent = (
      <p className={classes["empty-todos"]}>
        There are no completed todos to show.
      </p>
    );
  } else {
    todosFiltered = todos.filter((todo) => !todo.completed);
    noTodosContent = (
      <p className={classes["empty-todos"]}>There are no todos to show.</p>
    );
  }
  return (
    <article className={cn(className, classes["todo-list"])}>
      <section className={classes.header}>
        <div className={classes["header-icon"]}>
          <EllipsisVertical size={22} />
        </div>
      </section>
      <section className={classes.main}>
        {todosFiltered.length === 0
          ? noTodosContent
          : todosFiltered.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onCompleted={onCompleted}
                crossedOut={type === TodoListType.COMPLETED ? true : false}
              />
            ))}
      </section>
    </article>
  );
}
