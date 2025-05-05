import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const GooglePlayBigIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      // width="84"
      // height="93"
      viewBox="0 0 84 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.1894 46.5153L1.01263 84.4357C0.896042 83.8127 0.835721 83.164 0.83795 82.4938L0.844581 46.6072L0.925116 10.7206C0.927316 10.0738 0.98837 9.44748 1.10311 8.8457L39.1894 46.5153Z"
        fill="#4285F4"
      />
      <path
        d="M58.8864 26.9578L39.1938 46.5181L1.10742 8.84851C2.35194 2.29719 9.88852 -1.41005 15.9997 2.12806L47.1665 20.1726L58.8864 26.9578Z"
        fill="#34A853"
      />
      <path
        d="M78.2744 55.4996L59.2481 66.3512L39.1914 46.5134L58.884 26.9531L78.331 38.212C85.0038 42.0752 84.9725 51.6796 78.2744 55.4996Z"
        fill="#FCBC03"
      />
      <path
        d="M59.2443 66.3573L46.9867 73.3482L15.7029 91.1907C9.5892 94.6775 2.22915 90.9582 1.01074 84.4399L39.1876 46.5195L59.2443 66.3573Z"
        fill="#DB4437"
      />
    </svg>
  );
};

export default GooglePlayBigIcon;
