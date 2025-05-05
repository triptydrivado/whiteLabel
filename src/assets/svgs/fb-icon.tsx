import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const FbIcon: React.FC<TSVG> = ({ className, color, hoverColor, ...props }) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="10"
      height="17"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.91009 9.62952H6.4895V16.859H3.26204V9.62952H0.61552V6.66026H3.26204V4.36876C3.26204 1.78679 4.81122 0.334438 7.16726 0.334438C8.29687 0.334438 9.49103 0.56036 9.49103 0.56036V3.11005H8.16778C6.87679 3.11005 6.4895 3.88464 6.4895 4.72378V6.66026H9.36194L8.91009 9.62952Z"
        fill="white"
      />
    </svg>
  );
};

export default FbIcon;
