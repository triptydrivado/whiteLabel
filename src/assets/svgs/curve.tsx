import { TSVG } from "@/lib/types/svg";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Curve: React.FC<TSVG> = ({ className, color, hoverColor, ...props }) => {
  return (
    <svg
      {...props}
      className={cn(`${color} group-hover/edit:${hoverColor} `, className)}
      // width="1449"
      // height="159"
      viewBox="0 0 1449 159"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_567_8332)">
        <motion.path
          whileInView={{ pathLength: 1 }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.9 }}
          d="M25 55C141.583 -15 258.167 -15 374.75 55C491.333 125 607.917 125 724.5 55C841.083 -15 957.667 -15 1074.25 55C1190.83 125 1307.42 125 1424 55"
          stroke="#FB4156"
          stroke-width="5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_567_8332"
          x="0.712891"
          y="0"
          // width="1447.57"
          // height="159"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="26" />
          <feGaussianBlur stdDeviation="11.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_567_8332"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_567_8332"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Curve;
