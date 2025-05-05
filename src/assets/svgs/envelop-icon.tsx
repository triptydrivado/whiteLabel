import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const EnvelopIcon: React.FC<TSVG> = ({
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
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3356 13.6767L4.66892 13.6708C2.66892 13.669 1.33648 12.6678 1.33856 10.3345L1.34273 5.6678C1.34481 3.33447 2.67904 2.33566 4.67904 2.33745L11.3457 2.3434C13.3457 2.34518 14.6781 3.34637 14.6761 5.6797L14.6719 10.3464C14.6698 12.6797 13.3356 13.6785 11.3356 13.6767Z"
        stroke="#606060"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.3424 6.01034L9.25429 7.67515C8.56713 8.2212 7.44047 8.2202 6.75429 7.67292L4.67578 6.00439"
        stroke="#606060"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EnvelopIcon;
