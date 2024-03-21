import { TodoModel } from "@/utils/classes";
import TodoItem from "./TodoItem";
import classes from "@/components/TodoList.module.css";
import { TodoListType } from "@/enums";

import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import TodoListHeader from "./TodoListHeader";

export default function TodoList({
  todos,
  onDelete,
  onCompleted,
  onDeleteAll,
  className,
  type,
}: {
  todos: TodoModel[];
  onDelete: (id: number) => void;
  onCompleted: (id: number) => void;
  onDeleteAll: (listType: TodoListType) => void;
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

  function deleteAllTodosHandler() {
    onDeleteAll(type);
  }

  return (
    <article className={cn(className, classes["todo-list"])}>
      <TodoListHeader todos={todosFiltered} />
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
