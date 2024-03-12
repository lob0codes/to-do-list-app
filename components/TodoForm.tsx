import classes from "@/components/TodoForm.module.css";

import NormalButton from "./ui/NormalButton";
import { ButtonType } from "@/enums";

interface TodoFormProps {
  onSubmit: (todoDescription: string | undefined) => void;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  function test(formData: FormData) {
    const todoDescription = formData.get("todo")?.toString();
    onSubmit(todoDescription);
  }

  return (
    <section className={classes["todo-form"]}>
      <form action={test} className={classes.form}>
        <label htmlFor="todo" className={classes.label}>
          Type new task:
        </label>
        <input type="text" id="todo" name="todo" className={classes.input} />
        <NormalButton customType={ButtonType.STANDARD} type="submit">
          Add
        </NormalButton>
      </form>
    </section>
  );
}
