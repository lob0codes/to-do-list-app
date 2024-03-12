import classes from "@/components/ui/NormalButton.module.css";

import { cn } from "@/lib/utils";

import { ButtonType } from "@/enums";

interface NormalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customType: ButtonType;
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
  customType,
  className,
  children,
  ...rest
}: NormalButtonProps) {
  const buttonType: string = getButtonType(customType);

  return (
    <button
      className={cn(classes.button, className, classes[buttonType])}
      {...rest}
    >
      {children}
    </button>
  );
}
