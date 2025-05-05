import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const EditUserIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99967 9.99984C12.3009 9.99984 14.1663 8.13436 14.1663 5.83317C14.1663 3.53198 12.3009 1.6665 9.99967 1.6665C7.69849 1.6665 5.83301 3.53198 5.83301 5.83317C5.83301 8.13436 7.69849 9.99984 9.99967 9.99984Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.0066 13.1167L13.0566 16.0667C12.9399 16.1834 12.8316 16.4 12.8066 16.5584L12.6482 17.6833C12.5899 18.0917 12.8732 18.375 13.2816 18.3167L14.4066 18.1583C14.5649 18.1333 14.7899 18.025 14.8982 17.9084L17.8482 14.9584C18.3566 14.45 18.5982 13.8583 17.8482 13.1083C17.1066 12.3667 16.5149 12.6083 16.0066 13.1167Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.582 13.541C15.832 14.441 16.532 15.141 17.432 15.391"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.8418 18.3333C2.8418 15.1083 6.05015 12.5 10.0002 12.5C10.8668 12.5 11.7001 12.625 12.4751 12.8583"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EditUserIcon;
