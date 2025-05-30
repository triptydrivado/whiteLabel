import React from "react";

interface Instagram1IconProps {
  className?: string;
}

const Instagram1Icon: React.FC<Instagram1IconProps> = ({ className }) => {
  return (
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Allows external styles
    >
      <path
        d="M33.109 65.8909C51.2742 65.8909 66 51.1651 66 33C66 14.8348 51.2742 0.109009 33.109 0.109009C14.9439 0.109009 0.218079 14.8348 0.218079 33C0.218079 51.1651 14.9439 65.8909 33.109 65.8909Z"
        fill="url(#paint0_linear_610_1624)"
      />
      <path
        d="M40.0965 14.7272H26.1362C19.9088 14.7272 14.8509 19.7851 14.8509 26.0125V39.9729C14.8509 46.2002 19.9088 51.2581 26.1362 51.2581H40.0965C46.3239 51.2581 51.3818 46.2002 51.3818 39.9729V26.0125C51.3818 19.7851 46.3239 14.7272 40.0965 14.7272ZM47.3033 39.9875C47.3033 43.9636 44.0727 47.2089 40.0819 47.2089H26.1215C22.1454 47.2089 18.9001 43.9783 18.9001 39.9875V26.0271C18.9001 22.051 22.1308 18.8057 26.1215 18.8057H40.0819C44.0581 18.8057 47.3033 22.0363 47.3033 26.0271V39.9875Z"
        fill="white"
      />
      <path
        d="M33.109 23.6591C27.9634 23.6591 23.768 27.8545 23.768 33.0001C23.768 38.1457 27.9634 42.3411 33.109 42.3411C38.2546 42.3411 42.4501 38.1457 42.4501 33.0001C42.4501 27.8545 38.2546 23.6591 33.109 23.6591ZM33.109 38.672C29.9807 38.672 27.4372 36.1284 27.4372 33.0001C27.4372 29.8718 29.9807 27.3282 33.109 27.3282C36.2373 27.3282 38.7809 29.8718 38.7809 33.0001C38.7809 36.1284 36.2373 38.672 33.109 38.672Z"
        fill="white"
      />
      <path
        d="M43.1615 24.6831C44.0221 24.5436 44.6066 23.7328 44.4671 22.8722C44.3276 22.0117 43.5169 21.4271 42.6563 21.5666C41.7957 21.7061 41.2111 22.5169 41.3507 23.3775C41.4902 24.238 42.3009 24.8226 43.1615 24.6831Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_610_1624"
          x1="8.06499"
          y1="58.044"
          x2="54.8067"
          y2="11.3023"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEE411" />
          <stop offset="0.0518459" stopColor="#FEDB16" />
          <stop offset="0.1381" stopColor="#FEC125" />
          <stop offset="0.2481" stopColor="#FE983D" />
          <stop offset="0.3762" stopColor="#FE5F5E" />
          <stop offset="0.5" stopColor="#FE2181" />
          <stop offset="1" stopColor="#9000DC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Instagram1Icon;
