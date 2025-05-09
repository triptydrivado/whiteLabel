import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const PickupDropoffIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="7.37255" stroke="#FB4156" strokeWidth="1.2549" />
      <circle cx="8" cy="8" r="4" fill="#FB4156" />
    </svg>
  );
};

export default PickupDropoffIcon;
