import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const CityPriceEditIcon: React.FC<TSVG> = ({
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
        d="M11.0504 3.59934L4.20878 10.841C3.95045 11.116 3.70045 11.6577 3.65045 12.0327L3.34211 14.7327C3.23378 15.7077 3.93378 16.3743 4.90045 16.2077L7.58378 15.7493C7.95878 15.6827 8.48378 15.4077 8.74211 15.1243L15.5838 7.88267C16.7671 6.63267 17.3004 5.20767 15.4588 3.466C13.6254 1.741 12.2338 2.34934 11.0504 3.59934Z"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.9082 4.80896C10.2665 7.10896 12.1332 8.86729 14.4499 9.10063"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 18.9333H17.5"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CityPriceEditIcon;
