import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";

const GlobalAvailIcon: React.FC<TSVG> = ({
  className,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_480_13374)">
        <mask
          id="mask0_480_13374"
          mask-type="luminance"
          maskUnits="userSpaceOnUse"
          x="-1"
          y="0"
          width="41"
          height="41"
        >
          <path
            d="M-0.00585938 0.226318H39.9941V40.2263H-0.00585938V0.226318Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_480_13374)">
          <path
            d="M19.9971 33.2217C12.8292 33.2217 6.99707 27.3896 6.99707 20.2217C6.99707 13.0538 12.8292 7.22168 19.9971 7.22168C27.165 7.22168 32.9971 13.0538 32.9971 20.2217C32.9971 27.3896 27.165 33.2217 19.9971 33.2217Z"
            stroke="#FB4156"
            strokeWidth="2"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.66346 31.6774C9.27369 32.2876 9.27369 33.2769 8.66346 33.8871C8.05322 34.4973 7.06393 34.4973 6.45377 33.8871C5.84354 33.2769 5.84354 32.2876 6.45377 31.6774C7.06393 31.0671 8.05322 31.0671 8.66346 31.6774Z"
            fill="#FB4156"
          />
          <path
            d="M8.55673 31.6674C9.14255 32.2532 9.14255 33.2029 8.55673 33.7887C7.97091 34.3745 7.0212 34.3745 6.43546 33.7887C5.84964 33.2029 5.84964 32.2532 6.43546 31.6674C7.0212 31.0816 7.97091 31.0816 8.55673 31.6674Z"
            stroke="#FB4156"
            strokeWidth="2"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.6635 6.67736C34.2737 7.2876 34.2737 8.27689 33.6635 8.88705C33.0532 9.49729 32.0639 9.49729 31.4538 8.88705C30.8435 8.27689 30.8435 7.2876 31.4538 6.67736C32.0639 6.06713 33.0532 6.06713 33.6635 6.67736Z"
            fill="#FB4156"
          />
          <path
            d="M33.5567 6.66739C34.1425 7.25321 34.1425 8.20292 33.5567 8.78866C32.9709 9.37448 32.0212 9.37448 31.4355 8.78866C30.8496 8.20292 30.8496 7.25321 31.4355 6.66739C32.0212 6.08157 32.9709 6.08157 33.5567 6.66739Z"
            stroke="#FB4156"
            strokeWidth="2"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.9951 33.2217V7.22168"
            stroke="#FB4156"
            strokeWidth="2"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.9951 20.2217C25.9951 27.4014 23.085 33.2217 19.4951 33.2217C15.9052 33.2217 12.9951 27.4014 12.9951 20.2217C12.9951 13.042 15.9052 7.22168 19.4951 7.22168C23.085 7.22168 25.9951 13.042 25.9951 20.2217Z"
            stroke="#FB4156"
            strokeWidth="2"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.2321 12.2217C37.3622 14.6034 37.9961 17.2738 37.9961 20.0924C37.9961 30.0889 30.0224 38.2217 20.2215 38.2217C15.9681 38.2217 12.0588 36.6901 8.99609 34.139"
            stroke="#FB4156"
            strokeWidth="2"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.60325 27.2261C2.57201 24.9942 1.99707 22.5148 1.99707 19.9051C1.99707 10.1568 10.0193 2.22607 19.8799 2.22607C24.0779 2.22607 27.9427 3.66347 30.9971 6.06659"
            stroke="#FB4156"
            strokeWidth="2"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.99512 24.228H31.9951"
            stroke="#FB4156"
            strokeWidth="2"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.99512 16.2197H31.9951"
            stroke="#FB4156"
            strokeWidth="2"
            stroke-miterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_480_13374">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0 0.226318)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GlobalAvailIcon;
