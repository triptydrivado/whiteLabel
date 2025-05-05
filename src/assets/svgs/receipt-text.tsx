import React, { forwardRef } from "react";

const ReceiptIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
        d="M12.832 3.99984V5.4115C12.832 6.33317 12.2487 6.9165 11.327 6.9165H9.33203V2.839C9.33203 2.1915 9.86288 1.6665 10.5104 1.6665C11.1462 1.67234 11.7295 1.929 12.1495 2.349C12.5695 2.77484 12.832 3.35817 12.832 3.99984Z"
        stroke="#606060"
        stroke-width="0.875"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.16797 4.58317V12.7498C1.16797 13.234 1.71629 13.5082 2.10129 13.2165L3.0988 12.4698C3.33213 12.2948 3.65881 12.3182 3.86881 12.5282L4.83712 13.5023C5.06462 13.7298 5.43798 13.7298 5.66548 13.5023L6.64548 12.5223C6.84964 12.3182 7.1763 12.2948 7.4038 12.4698L8.40132 13.2165C8.78632 13.5023 9.33464 13.2282 9.33464 12.7498V2.83317C9.33464 2.1915 9.85964 1.6665 10.5013 1.6665H4.08464H3.5013C1.7513 1.6665 1.16797 2.71067 1.16797 3.99984V4.58317Z"
        stroke="#606060"
        stroke-width="0.875"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.5 5.75H7"
        stroke="#606060"
        stroke-width="0.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.9375 8.0835H6.5625"
        stroke="#606060"
        stroke-width="0.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
);

export default ReceiptIcon;
