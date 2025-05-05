import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const GstVatIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      //   width="16"
      //   height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.667 5.3335C13.7716 5.3335 14.667 4.43807 14.667 3.3335C14.667 2.22893 13.7716 1.3335 12.667 1.3335C11.5624 1.3335 10.667 2.22893 10.667 3.3335C10.667 4.43807 11.5624 5.3335 12.667 5.3335Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.66699 8.6665H8.00033"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.66699 11.3335H10.667"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.33301 1.3335H5.99967C2.66634 1.3335 1.33301 2.66683 1.33301 6.00016V10.0002C1.33301 13.3335 2.66634 14.6668 5.99967 14.6668H9.99967C13.333 14.6668 14.6663 13.3335 14.6663 10.0002V6.66683"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default GstVatIcon;
