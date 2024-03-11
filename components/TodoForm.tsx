import classes from "@/components/TodoForm.module.css";

import NormalButton from "./ui/NormalButton";
import { ButtonType } from "@/enums";

export default function TodoForm() {
  return (
    <section className={classes["todo-form"]}>
      <form action="" className={classes.form}>
        <label htmlFor="todo" className={classes.label}>
          Type new task:
        </label>
        <input type="text" id="todo" name="todo" className={classes.input} />
        <NormalButton type={ButtonType.STANDARD}>Add</NormalButton>
      </form>
    </section>
  );
}
