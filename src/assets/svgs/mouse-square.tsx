import React from "react";

interface Props extends React.SVGAttributes<SVGSVGElement> {}

export default function MouseSquare({ ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      {...props}
    >
      <path
        d="M100.833 55V41.25C100.833 18.3333 91.6667 9.16666 68.75 9.16666H41.25C18.3334 9.16666 9.16669 18.3333 9.16669 41.25V68.75C9.16669 91.6667 18.3334 100.833 41.25 100.833H55"
        stroke="#FB4156"
        strokeWidth="6.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M96.0666 81.7666L88.5958 84.2875C86.5333 84.975 84.8833 86.5792 84.1958 88.6875L81.675 96.1583C79.5208 102.621 70.4458 102.483 68.4291 96.0208L59.95 68.75C58.3 63.3416 63.2958 58.2999 68.6583 59.9958L95.975 68.475C102.392 70.4916 102.483 79.6124 96.0666 81.7666Z"
        stroke="#FB4156"
        strokeWidth="6.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
