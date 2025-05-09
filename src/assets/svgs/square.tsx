import React from "react";

interface Props extends React.SVGAttributes<SVGSVGElement> {}

export function SquareIcon({ className, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M9 22.1348H15C20 22.1348 22 20.1348 22 15.1348V9.13477C22 4.13477 20 2.13477 15 2.13477H9C4 2.13477 2 4.13477 2 9.13477V15.1348C2 20.1348 4 22.1348 9 22.1348Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
