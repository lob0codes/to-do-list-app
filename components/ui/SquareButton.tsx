"use client";

import classes from "@/components/ui/SquareButton.module.css";
import { cn } from "@/lib/utils";

import { useState } from "react";

import { Check } from "lucide-react";

export default function SquareButton({ className }: { className: string }) {
  const [isPressed, setIsPressed] = useState(false);

  function buttonPressedHandler() {
    setIsPressed((prevState) => !prevState);
  }

  return (
    <article
      className={cn(className, classes["square-button"])}
      onClick={buttonPressedHandler}
    >
      <Check className={cn(isPressed ? undefined : "hidden", classes.icon)} />
    </article>
  );
}
