import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const TwitterIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_662_8310)">
        <path
          d="M8.99845 5.97883L14.0982 0.0507812H12.8897L8.46161 5.19802L4.92489 0.0507812H0.845703L6.19392 7.83432L0.845703 14.0508H2.05425L6.73045 8.61512L10.4655 14.0508H14.5447L8.99815 5.97883H8.99845ZM7.34318 7.90289L6.80129 7.12783L2.4897 0.960552H4.34596L7.82546 5.93774L8.36735 6.7128L12.8903 13.1824H11.034L7.34318 7.90319V7.90289Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_662_8310">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0.695312 0.0507812)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TwitterIcon;
