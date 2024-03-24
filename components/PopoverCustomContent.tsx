import { Content, Close } from "@radix-ui/react-popover";
import classes from "@/components/PopoverCustomContent.module.css";
import NormalButton from "./ui/NormalButton";
import { ButtonType } from "@/enums";
import { useEffect, useState } from "react";

interface PopoverCustomContentProps {
  onDeleteAll: () => void;
}

export default function PopoverCustomContent({
  onDeleteAll,
}: PopoverCustomContentProps) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function screenResizeHandler() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", screenResizeHandler);

    return () => {
      window.removeEventListener("resize", screenResizeHandler);
    };
  }, []);

  const largeScreenContent = (
    <Content
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
        <Close className={classes["popover-close"]}>No</Close>
        <NormalButton customType={ButtonType.DELETE} onClick={onDeleteAll}>
          Yes
        </NormalButton>
      </div>
    </Content>
  );

  const smallScreenContent = (
    <Content
      side="top"
      sideOffset={-1}
      align="end"
      alignOffset={20}
      className={classes["delete-confirmation"]}
    >
      <p className={classes["confirmation-description"]}>
        Would you like to delete all the items in this list?
      </p>
      <div className={classes["confirmation-buttons"]}>
        <NormalButton customType={ButtonType.DELETE} onClick={onDeleteAll}>
          Yes
        </NormalButton>
        <Close className={classes["popover-close"]}>No</Close>
      </div>
    </Content>
  );

  return screenWidth > 810 ? largeScreenContent : smallScreenContent;
}
