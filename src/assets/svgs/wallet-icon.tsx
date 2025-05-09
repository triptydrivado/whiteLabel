import React, { forwardRef } from "react";

const WalletIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
        d="M7.58203 5.75H4.08203"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8318 6.89918V8.10088C12.8318 8.42171 12.5752 8.68419 12.2485 8.69585H11.1052C10.4752 8.69585 9.89767 8.23502 9.84517 7.60502C9.81017 7.23752 9.95015 6.89335 10.1952 6.65419C10.411 6.43252 10.7085 6.3042 11.0352 6.3042H12.2485C12.5752 6.31587 12.8318 6.57834 12.8318 6.89918Z"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.198 6.654C9.95296 6.89316 9.81297 7.23733 9.84797 7.60483C9.90047 8.23483 10.478 8.69566 11.108 8.69566H12.2513V9.5415C12.2513 11.2915 11.0846 12.4582 9.33464 12.4582H4.08464C2.33464 12.4582 1.16797 11.2915 1.16797 9.5415V5.45817C1.16797 3.8715 2.12464 2.76317 3.61214 2.5765C3.7638 2.55317 3.9213 2.5415 4.08464 2.5415H9.33464C9.4863 2.5415 9.63214 2.54733 9.77214 2.57066C11.2771 2.74566 12.2513 3.85984 12.2513 5.45817V6.30401H11.038C10.7113 6.30401 10.4138 6.43233 10.198 6.654Z"
        stroke="#606060"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

export default WalletIcon;
