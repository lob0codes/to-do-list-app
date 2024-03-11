import classes from "@/components/ui/NormalButton.module.css";

import { cn } from "@/lib/utils";

import { ButtonType } from "@/enums";

interface NormalButtonProps {
  type: ButtonType;
  className?: string;
  children: React.ReactNode;
}

function getButtonType(style: string) {
  switch (style) {
    case ButtonType.STANDARD:
      return "standard";
    case ButtonType.DELETE:
      return "delete";
    default:
      return "";
  }
}

export default function NormalButton({
  type,
  className,
  children,
}: NormalButtonProps) {
  const buttonType: string = getButtonType(type);

  return (
    <button className={cn(classes.button, className, classes[buttonType])}>
      {children}
    </button>
  );
}
