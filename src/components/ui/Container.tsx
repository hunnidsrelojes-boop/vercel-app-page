import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("mx-auto w-full max-w-6xl px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
