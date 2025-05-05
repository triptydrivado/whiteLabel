import React from "react";

interface CustomIconProps {
  className?: string;
}

const EditManageIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z"
        stroke="#606060"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.6454 9.08795L9.01229 12.7202C8.8686 12.8639 8.73516 13.1307 8.70437 13.3256L8.50937 14.7108C8.43753 15.2136 8.78649 15.5625 9.28938 15.4906L10.6749 15.2957C10.8699 15.2649 11.147 15.1315 11.2804 14.9878L14.9136 11.3556C15.5396 10.7297 15.8373 10.0012 14.9136 9.07771C14.0002 8.16451 13.2715 8.46205 12.6454 9.08795Z"
        stroke="#606060"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.1204 9.60938C12.4283 10.7175 13.2904 11.5794 14.3988 11.8872"
        stroke="#606060"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EditManageIcon;
