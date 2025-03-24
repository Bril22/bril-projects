import React from "react";
import { Icons } from "../icons"
import { IconNames } from "../icons/interface"
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
interface IButtons {
    className?: string;
    label: string;
    textColor?: string;
}

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonBorderOnlyAngle = ({
    className,
    label,
    textColor
}: IButtons) => {
    return (
        <div className="relative w-fit px-4 py-3">
            <Icons name={IconNames["angle-border"]} size={12} className={`absolute top-0 left-0 rotate-90 text-font-primary ${className}`} />
            <Icons name={IconNames["angle-border"]} size={12} className={`absolute bottom-0 left-0 -rotate-90 rotate-x-180  ${className}`} />
            <Icons name={IconNames["angle-border"]} size={12} className={`absolute top-0 right-0 rotate-90 rotate-x-180  ${className}`} />
            <Icons name={IconNames["angle-border"]} size={12} className={`absolute bottom-0 right-0 -rotate-90  ${className}`} />
            <p className={`text-lg capitalize font-semibold ${textColor}`}>{label}</p>
        </div>
    )
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-sixth/10 transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
