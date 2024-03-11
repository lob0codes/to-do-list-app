import classes from "@/components/TodoItem.module.css";

import SquareButton from "./ui/SquareButton";
import NormalButton from "./ui/NormalButton";

import { ButtonType } from "@/enums";

export default function TodoItem({ description }: { description: string }) {
  return (
    <article className={classes["todo-item"]}>
      <SquareButton className={classes["square-button"]} />
      <p className={classes.description}>{description}</p>
      <NormalButton type={ButtonType.DELETE}>Delete</NormalButton>
    </article>
  );
}
