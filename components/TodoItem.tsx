import classes from "@/components/TodoItem.module.css";

import SquareButton from "./ui/SquareButton";
import NormalButton from "./ui/NormalButton";

import { ButtonType } from "@/enums";
import { TodoModel } from "@/utils/classes";

interface TodoItemProps {
  todo: TodoModel;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onDelete }: TodoItemProps) {
  function itemDeleteHandler() {
    onDelete(todo.id);
  }

  return (
    <article className={classes["todo-item"]}>
      <SquareButton className={classes["square-button"]} />
      <p className={classes.description}>{todo.description}</p>
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
