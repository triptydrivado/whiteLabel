import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const LanguageIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8271 5.98096H5.17383"
        stroke="currentColor     "
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 4.86084V5.98083"
        stroke="currentColor     "
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.167 5.96729C10.167 8.83395 7.92699 11.1539 5.16699 11.1539"
        stroke="currentColor     "
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8341 11.154C10.6341 11.154 9.56745 10.514 8.80078 9.50732"
        stroke="currentColor     "
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.49967 14.6742H10.4997C13.833 14.6742 15.1663 13.3408 15.1663 10.0075V6.00749C15.1663 2.67415 13.833 1.34082 10.4997 1.34082H6.49967C3.16634 1.34082 1.83301 2.67415 1.83301 6.00749V10.0075C1.83301 13.3408 3.16634 14.6742 6.49967 14.6742Z"
        stroke="currentColor     "
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LanguageIcon;
