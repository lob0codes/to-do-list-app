import classes from "@/components/TodoListHeader.module.css";

import * as Popover from "@radix-ui/react-popover";

import { Trash2 } from "lucide-react";
import { TodoModel } from "@/utils/classes";
import NormalButton from "./ui/NormalButton";
import { ButtonType } from "@/enums";

interface TodoListHeaderProps {
  todos: TodoModel[];
  onDeleteAll: () => void;
}

export default function TodoListHeader({
  todos,
  onDeleteAll,
}: TodoListHeaderProps) {
  return (
    <section className={classes.header}>
      {todos.length !== 0 && (
        <Popover.Root>
          <Popover.Trigger asChild>
            <div className={classes["header__icon-container"]}>
              <Trash2 className={classes.header__icon} size={22} />
            </div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              side="top"
              sideOffset={-1}
              align="start"
              alignOffset={40}
              className={classes["delete-confirmation"]}
            >
              <p className={classes["confirmation-description"]}>
                Would you like to delete all the items in this list?
              </p>
              <div className={classes["confirmation-buttons"]}>
                <Popover.Close className={classes["popover-close"]}>
                  No
                </Popover.Close>
                <NormalButton
                  customType={ButtonType.DELETE}
                  onClick={onDeleteAll}
                >
                  Yes
                </NormalButton>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      )}
    </section>
  );
}
