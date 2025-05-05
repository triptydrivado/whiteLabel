import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const GooglePlayIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5645 11.6504L4.77344 0.810547L18.4941 8.7207L15.5645 11.6504ZM1.99023 0.175781L14.4902 12.6758L1.99023 25.1758C1.35547 24.8828 0.916016 24.248 0.916016 23.4668V1.93359C0.916016 1.15234 1.35547 0.517578 1.99023 0.175781ZM22.7422 11.2109C23.6699 11.8945 23.6699 13.5059 22.791 14.1895L19.8613 15.8496L16.6387 12.6758L19.8613 9.55078L22.7422 11.2109ZM4.77344 24.541L15.5645 13.75L18.4941 16.6797L4.77344 24.541Z"
        fill="white"
      />
    </svg>
  );
};

export default GooglePlayIcon;
