import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        // "w-full px-5 sm:px-10 md:px-10 lg:px-16 xl:px-36 2xl:px-52 3xl:px-[15.625rem] 4xl:px-[400px]",
        "w-full px-5 sm:px-10 md:px-10 lg:px-16 xl:px-32 2xl:px-48 3xl:px-[15.625rem] 4xl:px-[400px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);

Container.displayName = "Container";
export default Container;
