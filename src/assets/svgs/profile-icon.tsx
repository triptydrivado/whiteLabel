import React, { forwardRef } from "react";

const ProfileIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className }) => (
    <svg
      // width="14"
      // height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.06927 7.95511C7.02844 7.94928 6.97594 7.94928 6.92927 7.95511C5.9026 7.92011 5.08594 7.08011 5.08594 6.04761C5.08594 4.99178 5.9376 4.13428 6.99927 4.13428C8.0551 4.13428 8.9126 4.99178 8.9126 6.04761C8.90677 7.08011 8.09594 7.92011 7.06927 7.95511Z"
        stroke="#606060"
        stroke-width="0.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9336 11.8052C9.89531 12.756 8.51865 13.3335 7.00198 13.3335C5.48531 13.3335 4.10865 12.756 3.07031 11.8052C3.12865 11.2568 3.47865 10.7202 4.10281 10.3002C5.70115 9.23849 8.31448 9.23849 9.90115 10.3002C10.5253 10.7202 10.8753 11.2568 10.9336 11.8052Z"
        stroke="#606060"
        stroke-width="0.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.0013 13.3332C10.223 13.3332 12.8346 10.7215 12.8346 7.49984C12.8346 4.27818 10.223 1.6665 7.0013 1.6665C3.77964 1.6665 1.16797 4.27818 1.16797 7.49984C1.16797 10.7215 3.77964 13.3332 7.0013 13.3332Z"
        stroke="#606060"
        stroke-width="0.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
);

export default ProfileIcon;
