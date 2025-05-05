import React from "react";

interface DistanceIconProps {
  className?: string; // Optional className for styling
  color?: string; // Optional stroke color
  width?: number; // Optional width
  height?: number; // Optional height
}

const MapRootIcon: React.FC<DistanceIconProps> = ({
  className,
  color = "#A2A2A2", // Default color for the stroke
  width = 16, // Default width
  height = 15, // Default height
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M5.51942 9.70543C5.51942 11.2779 3.25973 13.3877 3.25973 13.3877C3.25973 13.3877 1 11.2779 1 9.70543C1 8.45744 2.01171 7.44573 3.25973 7.44573C4.50771 7.44573 5.51942 8.45744 5.51942 9.70543Z"
        stroke={color}
        strokeWidth="0.9975"
        strokeMiterlimit="10"
      />
      <path
        d="M3.69347 9.7049C3.69347 9.94446 3.49926 10.1387 3.2597 10.1387C3.02014 10.1387 2.82593 9.94446 2.82593 9.7049C2.82593 9.46534 3.02014 9.27113 3.2597 9.27113C3.49926 9.27113 3.69347 9.46534 3.69347 9.7049Z"
        stroke={color}
        strokeWidth="0.9975"
        strokeMiterlimit="10"
      />
      <path
        d="M15.1229 3.25914C15.1229 4.83156 12.8632 6.94141 12.8632 6.94141C12.8632 6.94141 10.6035 4.83156 10.6035 3.25914C10.6035 2.01115 11.6152 0.999444 12.8632 0.999444C14.1112 0.999444 15.1229 2.01115 15.1229 3.25914Z"
        stroke={color}
        strokeWidth="0.9975"
        strokeMiterlimit="10"
      />
      <path
        d="M13.297 3.25959C13.297 3.49915 13.1028 3.69336 12.8632 3.69336C12.6237 3.69336 12.4294 3.49915 12.4294 3.25959C12.4294 3.02003 12.6237 2.82582 12.8632 2.82582C13.1028 2.82582 13.297 3.02003 13.297 3.25959Z"
        stroke={color}
        strokeWidth="0.9975"
        strokeMiterlimit="10"
      />
      <path
        d="M5.01758 13.3877H11.2518C12.1417 13.3877 12.8632 12.6662 12.8632 11.7763V11.7763C12.8632 10.8863 12.1417 10.1648 11.2518 10.1648H8.79389C7.90394 10.1648 7.18247 9.44337 7.18247 8.55342C7.18247 7.66344 7.90394 6.94197 8.79389 6.94197H11.1053"
        stroke={color}
        strokeWidth="0.9975"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default MapRootIcon;
