import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const GlobalAvailIconM: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="55"
      height="170"
      viewBox="0 0 55 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_627_5223)">
        <rect
          x="18.5"
          y="73.1841"
          width="18"
          height="22"
          rx="9"
          fill="#FB4156"
        />
      </g>
      <rect
        x="26.5"
        y="0.184082"
        width="2"
        height="64"
        rx="1"
        fill="url(#paint0_linear_627_5223)"
      />
      <rect
        width="2"
        height="64"
        rx="1"
        transform="matrix(1 0 0 -1 26.5 169.184)"
        fill="url(#paint1_linear_627_5223)"
      />
      <rect
        x="18.5"
        y="75.1992"
        width="21"
        height="21.0215"
        rx="2.625"
        fill="white"
      />
      <g clipPath="url(#clip0_627_5223)">
        <mask
          id="mask0_627_5223"
          mask-type="luminance"
          maskUnits="userSpaceOnUse"
          x="23"
          y="80"
          width="12"
          height="11"
        >
          <path d="M23.7485 80.46H34.2485V90.96H23.7485V80.46Z" fill="white" />
        </mask>
        <g mask="url(#mask0_627_5223)">
          <path
            d="M28.9994 89.1211C27.1178 89.1211 25.5869 87.5902 25.5869 85.7086C25.5869 83.827 27.1178 82.2961 28.9994 82.2961C30.881 82.2961 32.4119 83.827 32.4119 85.7086C32.4119 87.5902 30.881 89.1211 28.9994 89.1211Z"
            stroke="#FB4156"
            stroke-width="0.525"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.0244 88.7158C26.1846 88.876 26.1846 89.1357 26.0244 89.2959C25.8642 89.4561 25.6045 89.4561 25.4444 89.2959C25.2842 89.1357 25.2842 88.876 25.4444 88.7158C25.6045 88.5556 25.8642 88.5556 26.0244 88.7158Z"
            fill="#FB4156"
          />
          <path
            d="M25.9964 88.7131C26.1502 88.8669 26.1502 89.1162 25.9964 89.2699C25.8426 89.4237 25.5933 89.4237 25.4396 89.2699C25.2858 89.1162 25.2858 88.8669 25.4396 88.7131C25.5933 88.5593 25.8426 88.5593 25.9964 88.7131Z"
            stroke="#FB4156"
            stroke-width="0.525"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.5869 82.1533C32.7471 82.3135 32.7471 82.5732 32.5869 82.7334C32.4267 82.8936 32.167 82.8936 32.0069 82.7334C31.8467 82.5732 31.8467 82.3135 32.0069 82.1533C32.167 81.9931 32.4267 81.9931 32.5869 82.1533Z"
            fill="#FB4156"
          />
          <path
            d="M32.5589 82.1506C32.7127 82.3044 32.7127 82.5537 32.5589 82.7074C32.4051 82.8612 32.1558 82.8612 32.0021 82.7074C31.8483 82.5537 31.8483 82.3044 32.0021 82.1506C32.1558 81.9968 32.4051 81.9968 32.5589 82.1506Z"
            stroke="#FB4156"
            stroke-width="0.525"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.999 89.1211V82.2961"
            stroke="#FB4156"
            stroke-width="0.525"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30.5739 85.7086C30.5739 87.5933 29.81 89.1211 28.8676 89.1211C27.9253 89.1211 27.1614 87.5933 27.1614 85.7086C27.1614 83.8239 27.9253 82.2961 28.8676 82.2961C29.81 82.2961 30.5739 83.8239 30.5739 85.7086Z"
            stroke="#FB4156"
            stroke-width="0.525"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.2613 83.6086C33.5579 84.2338 33.7243 84.9348 33.7243 85.6747C33.7243 88.2988 31.6312 90.4336 29.0585 90.4336C27.942 90.4336 26.9158 90.0315 26.1118 89.3619"
            stroke="#FB4156"
            stroke-width="0.525"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.696 87.5474C24.4253 86.9615 24.2744 86.3106 24.2744 85.6256C24.2744 83.0667 26.3802 80.9849 28.9687 80.9849C30.0706 80.9849 31.0851 81.3622 31.8869 81.993"
            stroke="#FB4156"
            stroke-width="0.525"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.8489 86.7603H32.1489"
            stroke="#FB4156"
            stroke-width="0.525"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.8489 84.6582H32.1489"
            stroke="#FB4156"
            stroke-width="0.525"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_627_5223"
          x="0.5"
          y="55.1841"
          width="54"
          height="58"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="9"
            result="effect1_foregroundBlur_627_5223"
          />
        </filter>
        <linearGradient
          id="paint0_linear_627_5223"
          x1="27.5"
          y1="0.184082"
          x2="27.5"
          y2="64.1841"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="0.642834" stop-color="#FB4156" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_627_5223"
          x1="0.999997"
          y1="0"
          x2="0.999997"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="0.606995" stop-color="#FB4156" />
        </linearGradient>
        <clipPath id="clip0_627_5223">
          <rect
            width="10.5"
            height="10.5"
            fill="white"
            transform="translate(23.75 80.46)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GlobalAvailIconM;
