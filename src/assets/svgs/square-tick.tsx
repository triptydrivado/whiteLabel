import React from "react";

interface Props extends React.SVGAttributes<SVGSVGElement> {}

export function SquareTickIcon({ className, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="24"
      // height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M16.19 2.26953H7.81C4.17 2.26953 2 4.43953 2 8.07953V16.4495C2 20.0995 4.17 22.2695 7.81 22.2695H16.18C19.82 22.2695 21.99 20.0995 21.99 16.4595V8.07953C22 4.43953 19.83 2.26953 16.19 2.26953Z"
        fill="text-[var(--brand-icon-color)]"
      />
      <path
        d="M10.5799 15.8496C10.3799 15.8496 10.1899 15.7696 10.0499 15.6296L7.21994 12.7996C6.92994 12.5096 6.92994 12.0296 7.21994 11.7396C7.50994 11.4496 7.98994 11.4496 8.27994 11.7396L10.5799 14.0396L15.7199 8.89957C16.0099 8.60957 16.4899 8.60957 16.7799 8.89957C17.0699 9.18957 17.0699 9.66957 16.7799 9.95957L11.1099 15.6296C10.9699 15.7696 10.7799 15.8496 10.5799 15.8496Z"
        fill="white"
      />
    </svg>
  );
}
