import classes from "@/components/TodoForm.module.css";

import NormalButton from "./ui/NormalButton";
import { ButtonType } from "@/enums";

interface TodoFormProps {
  onSubmit: (todoDescription: string | undefined) => void;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  function formSubmitHandler(formData: FormData) {
    const todoDescription = formData.get("todo")?.toString();
    console.log(todoDescription);
    onSubmit(todoDescription);
  }

  return (
    <section className={classes["todo-form"]}>
      <form action={formSubmitHandler} className={classes.form}>
        <label htmlFor="todo" className={classes.label}>
          Type new task:
        </label>
        <input type="text" id="todo" name="todo" className={classes.input} />
        <NormalButton
          className={classes["add-button"]}
          customType={ButtonType.STANDARD}
          type="submit"
        >
          Add
        </NormalButton>
      </form>
    </section>
  );
}
