import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const CalendarIcon: React.FC<TSVG> = ({
  className,
  color = "stroke-current",
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover:${hoverColor}`, className)}
      // width="14"
      // height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.30762 0.680115V3.37242"
        stroke="currentColor"
        strokeWidth="1.34615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.69238 0.680115V3.37242"
        stroke="currentColor"
        strokeWidth="1.34615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 1.68774H2.33333C1.59695 1.68774 1 2.2847 1 3.02108V12.3544C1 13.0908 1.59695 13.6877 2.33333 13.6877H11.6667C12.403 13.6877 13 13.0908 13 12.3544V3.02108C13 2.2847 12.403 1.68774 11.6667 1.68774Z"
        stroke="currentColor"
        strokeWidth="1.34615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 5.68774H13"
        stroke="currentColor"
        strokeWidth="1.34615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.30762 7.75702H4.31387"
        stroke="currentColor"
        strokeWidth="1.34615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7.75702H7.00625"
        stroke="currentColor"
        strokeWidth="1.34615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.69238 7.75702H9.69863"
        stroke="currentColor"
        strokeWidth="1.34615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.30762 10.4493H4.31387"
        stroke="currentColor"
        strokeWidth="1.34615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10.4493H7.00625"
        stroke="currentColor"
        strokeWidth="1.34615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.69238 10.4493H9.69863"
        stroke="currentColor"
        strokeWidth="1.34615"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarIcon;
