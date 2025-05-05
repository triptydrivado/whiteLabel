import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const UpdatePasswordIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      //   width="20"
      //   height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.7418 1.85732L4.58346 3.42399C3.62513 3.78232 2.8418 4.91566 2.8418 5.93232V12.124C2.8418 13.1073 3.4918 14.399 4.28346 14.9907L7.8668 17.6657C9.0418 18.549 10.9751 18.549 12.1501 17.6657L15.7335 14.9907C16.5251 14.399 17.1751 13.1073 17.1751 12.124V5.93232C17.1751 4.90732 16.3918 3.77399 15.4335 3.41566L11.2751 1.85732C10.5668 1.59899 9.43346 1.59899 8.7418 1.85732Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99967 10.4168C10.9201 10.4168 11.6663 9.67064 11.6663 8.75016C11.6663 7.82969 10.9201 7.0835 9.99967 7.0835C9.0792 7.0835 8.33301 7.82969 8.33301 8.75016C8.33301 9.67064 9.0792 10.4168 9.99967 10.4168Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 10.4165V12.9165"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UpdatePasswordIcon;
