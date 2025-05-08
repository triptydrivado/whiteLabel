import React from "react";

interface IconProps {
  className?: string;
}

const ReceiptIcon: React.FC<IconProps> = ({ className }) => {
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
        d="M13.6666 7.533V4.69301C13.6666 2.00635 13.0399 1.33301 10.5199 1.33301H5.47992C2.95992 1.33301 2.33325 2.00635 2.33325 4.69301V12.1997C2.33325 13.973 3.30659 14.393 4.48659 13.1263L4.49325 13.1197C5.03991 12.5397 5.87324 12.5863 6.34658 13.2197L7.01992 14.1197"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33325 4.66699H10.6666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 7.33301H10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1408 9.84685L9.78077 12.2069C9.68743 12.3002 9.60075 12.4735 9.58075 12.6002L9.45409 13.5002C9.40742 13.8269 9.63409 14.0535 9.96076 14.0069L10.8608 13.8802C10.9874 13.8602 11.1674 13.7735 11.2541 13.6802L13.6141 11.3202C14.0208 10.9135 14.2141 10.4402 13.6141 9.8402C13.0208 9.24686 12.5474 9.44018 12.1408 9.84685Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7998 10.1875C11.9998 10.9075 12.5598 11.4675 13.2798 11.6675"
        stroke="currentColor"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ReceiptIcon;
