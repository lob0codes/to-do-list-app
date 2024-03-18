import classes from "@/components/TodoItem.module.css";

import SquareButton from "./ui/SquareButton";
import NormalButton from "./ui/NormalButton";

import { ButtonType } from "@/enums";
import { TodoModel } from "@/utils/classes";

import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: TodoModel;
  onDelete: (id: number) => void;
  onCompleted: (id: number) => void;
  crossedOut: boolean;
}

export default function TodoItem({
  todo,
  onDelete,
  onCompleted,
  crossedOut,
}: TodoItemProps) {
  function itemDeleteHandler() {
    onDelete(todo.id);
  }

  function completedStatusChangeHandler() {
    onCompleted(todo.id);
  }

  return (
    <article className={classes["todo-item"]}>
      <SquareButton
        className={classes["square-button"]}
        isPressed={todo.completed}
        onClick={completedStatusChangeHandler}
      />
      <p className={cn(crossedOut ? "crossed-out" : "", classes.description)}>
        {todo.description}
      </p>
      <NormalButton
        customType={ButtonType.DELETE}
        onClick={itemDeleteHandler}
        className={classes["delete-button"]}
      >
        Delete
      </NormalButton>
    </article>
  );
}
