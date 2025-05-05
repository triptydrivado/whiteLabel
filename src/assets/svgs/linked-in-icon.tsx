import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const LinkedInIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.24374 13.8008H0.519133V5.04102H3.24374V13.8008ZM1.86679 3.86914C1.01718 3.86914 0.314054 3.13672 0.314054 2.25781C0.314054 1.4082 1.01718 0.705078 1.86679 0.705078C2.7457 0.705078 3.44882 1.4082 3.44882 2.25781C3.44882 3.13672 2.7457 3.86914 1.86679 3.86914ZM13.4098 13.8008H10.7144V9.55273C10.7144 8.52734 10.6851 7.23828 9.2789 7.23828C7.87265 7.23828 7.66757 8.32227 7.66757 9.46484V13.8008H4.94296V5.04102H7.55038V6.24219H7.57968C7.96054 5.56836 8.83945 4.83594 10.1578 4.83594C12.9117 4.83594 13.4391 6.65234 13.4391 8.99609V13.8008H13.4098Z"
        fill="white"
      />
    </svg>
  );
};

export default LinkedInIcon;
