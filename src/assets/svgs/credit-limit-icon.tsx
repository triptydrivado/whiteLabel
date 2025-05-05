import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const TotalCreditLimitIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      // width="48"
      // height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M4 17.5098H44"
          stroke="white"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 33.5098H16"
          stroke="white"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 33.5098H29"
          stroke="white"
          stroke-width="3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.88 7.50977H35.1C42.22 7.50977 44 9.26977 44 16.2898V32.7098C44 39.7298 42.22 41.4898 35.12 41.4898H12.88C5.78 41.5098 4 39.7498 4 32.7298V16.2898C4 9.26977 5.78 7.50977 12.88 7.50977Z"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default TotalCreditLimitIcon;
