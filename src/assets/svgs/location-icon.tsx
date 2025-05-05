import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const LocationIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      // width="100"
      // height="100"
      viewBox="0 0 23 22"
      fill="none"
    >
      <path
        d="M11.5006 12.3108C13.0802 12.3108 14.3606 11.0304 14.3606 9.45082C14.3606 7.87129 13.0802 6.59082 11.5006 6.59082C9.92109 6.59082 8.64062 7.87129 8.64062 9.45082C8.64062 11.0304 9.92109 12.3108 11.5006 12.3108Z"
        stroke="currentColor" // Use currentColor to inherit color from the parent
        strokeWidth="2"
      />
      <path
        d="M3.81823 7.78218C5.62406 -0.156157 17.3849 -0.14699 19.1816 7.79134C20.2357 12.448 17.3391 16.3897 14.7999 18.828C12.9574 20.6063 10.0424 20.6063 8.19073 18.828C5.66073 16.3897 2.76406 12.4388 3.81823 7.78218Z"
        stroke="currentColor" // Use currentColor to inherit color from the parent
        strokeWidth="2"
      />
    </svg>
  );
};

export default LocationIcon;
