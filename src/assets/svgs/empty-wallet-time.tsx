import React from "react";

interface CustomIconProps {
  className?: string;
}

const EmptyWallet: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.0267 9.03463C11.7467 9.30796 11.5867 9.7013 11.6267 10.1213C11.6867 10.8413 12.3468 11.368 13.0668 11.368H14.3334V12.1613C14.3334 13.5413 13.2068 14.668 11.8268 14.668H5.09341C5.64675 14.1813 6.00008 13.468 6.00008 12.668C6.00008 11.1946 4.80675 10.0013 3.33341 10.0013C2.70675 10.0013 2.12675 10.2213 1.66675 10.588V7.67464C1.66675 6.29464 2.79341 5.16797 4.17341 5.16797H11.8268C13.2068 5.16797 14.3334 6.29464 14.3334 7.67464V8.63464H12.9867C12.6134 8.63464 12.2734 8.78129 12.0267 9.03463Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.66675 7.6739V5.22725C1.66675 4.43391 2.15341 3.72722 2.89341 3.44722L8.18675 1.44722C9.01341 1.14055 9.90009 1.74724 9.90009 2.6339V5.16723"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.0393 9.31278V10.6862C15.0393 11.0528 14.746 11.3528 14.3726 11.3661H13.066C12.346 11.3661 11.686 10.8395 11.626 10.1195C11.586 9.69947 11.7459 9.30613 12.0259 9.0328C12.2726 8.77946 12.6126 8.63281 12.986 8.63281H14.3726C14.746 8.64615 15.0393 8.94612 15.0393 9.31278Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.66675 8H9.33341"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.00008 12.6667C6.00008 13.4667 5.64675 14.18 5.09341 14.6667C4.62008 15.08 4.00675 15.3333 3.33341 15.3333C1.86008 15.3333 0.666748 14.14 0.666748 12.6667C0.666748 11.8267 1.05341 11.0733 1.66675 10.5867C2.12675 10.22 2.70675 10 3.33341 10C4.80675 10 6.00008 11.1933 6.00008 12.6667Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.50033 11.833V12.833L2.66699 13.333"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EmptyWallet;
