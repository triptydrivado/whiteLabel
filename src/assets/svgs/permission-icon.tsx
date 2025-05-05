import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const PermissionIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      // width="20"
      // height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 14.5835H12.5"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.16699 14.5835H1.66699"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.333 5.4165H15.833"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.50033 5.4165H1.66699"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.83366 12.0835H10.8337C11.7503 12.0835 12.5003 12.5002 12.5003 13.7502V15.4168C12.5003 16.6668 11.7503 17.0835 10.8337 17.0835H5.83366C4.91699 17.0835 4.16699 16.6668 4.16699 15.4168V13.7502C4.16699 12.5002 4.91699 12.0835 5.83366 12.0835Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.16667 2.9165H14.1667C15.0833 2.9165 15.8333 3.33317 15.8333 4.58317V6.24984C15.8333 7.49984 15.0833 7.9165 14.1667 7.9165H9.16667C8.25 7.9165 7.5 7.49984 7.5 6.24984V4.58317C7.5 3.33317 8.25 2.9165 9.16667 2.9165Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PermissionIcon;
