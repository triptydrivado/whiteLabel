import React from "react";

interface CustomIconProps {
  className?: string;
}

const CardEdit: React.FC<CustomIconProps> = ({ className }) => {
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
        d="M1.33081 5.66699H7.66414"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.99731 11H5.33065"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.99731 11H9.66398"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6641 8.01967V10.7397C14.6641 13.0797 14.0708 13.6663 11.7041 13.6663H4.29081C1.92414 13.6663 1.33081 13.0797 1.33081 10.7397V5.25967C1.33081 2.91967 1.92414 2.33301 4.29081 2.33301H9.66414"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7176 2.75289L10.2442 5.22622C10.1509 5.31955 10.0576 5.50622 10.0376 5.63955L9.90424 6.58622C9.85757 6.92622 10.0976 7.16622 10.4376 7.11955L11.3842 6.98622C11.5176 6.96622 11.7042 6.87289 11.7976 6.77955L14.2709 4.30622C14.6976 3.87955 14.8976 3.38622 14.2709 2.75955C13.6376 2.12622 13.1442 2.32622 12.7176 2.75289Z"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.364 3.10645C12.5773 3.85978 13.164 4.44645 13.9107 4.65311"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CardEdit;
