"use client";

import classes from "@/components/ui/SquareButton.module.css";
import { cn } from "@/lib/utils";

import { useState } from "react";

import { Check } from "lucide-react";

interface SquareButtonProps {
  className: string;
  onClick: () => void;
  isPressed: boolean;
}

export default function SquareButton({
  className,
  onClick,
  isPressed,
}: SquareButtonProps) {
  function buttonPressedHandler() {
    onClick();
  }

  return (
    <article
      className={cn(
        className,
        classes["square-button"],
        isPressed && classes.pressed
      )}
      onClick={buttonPressedHandler}
    >
      <Check className={cn(isPressed ? undefined : "hidden", classes.icon)} />
    </article>
  );
}
