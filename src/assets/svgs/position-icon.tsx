import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const PositionIcon: React.FC<TSVG> = ({
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
        d="M12.5 12.5808H11.9933C11.46 12.5808 10.9533 12.7875 10.58 13.1608L9.43998 14.2875C8.91998 14.8008 8.07334 14.8008 7.55334 14.2875L6.41333 13.1608C6.04 12.7875 5.52667 12.5808 5 12.5808H4.5C3.39333 12.5808 2.5 11.6942 2.5 10.6008V3.32082C2.5 2.22749 3.39333 1.34082 4.5 1.34082H12.5C13.6067 1.34082 14.5 2.22749 14.5 3.32082V10.5942C14.5 11.6875 13.6067 12.5808 12.5 12.5808Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.54671 5.97402C8.52005 5.97402 8.48003 5.97402 8.4467 5.97402C7.7467 5.94736 7.19336 5.38069 7.19336 4.67402C7.19336 3.95402 7.77337 3.37402 8.49337 3.37402C9.21337 3.37402 9.79338 3.96069 9.79338 4.67402C9.80004 5.38069 9.24671 5.95402 8.54671 5.97402Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66695 7.98047C5.78029 8.5738 5.78029 9.54047 6.66695 10.1338C7.67362 10.8071 9.32695 10.8071 10.3336 10.1338C11.2203 9.54047 11.2203 8.5738 10.3336 7.98047C9.32695 7.3138 7.68029 7.3138 6.66695 7.98047Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PositionIcon;
