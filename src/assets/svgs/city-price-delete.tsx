import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const CityPriceDeleteIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      //   width="20"
      //   height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 5.5837C14.725 5.3087 11.9333 5.16704 9.15 5.16704C7.5 5.16704 5.85 5.25037 4.2 5.41704L2.5 5.5837"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.08301 4.74165L7.26634 3.64998C7.39967 2.85831 7.49967 2.26665 8.90801 2.26665H11.0913C12.4997 2.26665 12.608 2.89165 12.733 3.65831L12.9163 4.74165"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7087 8.21716L15.167 16.6088C15.0753 17.9172 15.0003 18.9338 12.6753 18.9338H7.32533C5.00033 18.9338 4.92533 17.9172 4.83366 16.6088L4.29199 8.21716"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.6084 14.35H11.3834"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.91699 11.0166H12.0837"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CityPriceDeleteIcon;
