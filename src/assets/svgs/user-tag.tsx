import React from "react";

interface CustomIconProps {
  className?: string;
}

const ManageAccount: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="20"
      // height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 16.2191H14.3667C13.7 16.2191 13.0667 16.4857 12.6 16.9673L11.175 18.4207C10.525 19.0828 9.46668 19.0828 8.81668 18.4207L7.39166 16.9673C6.925 16.4857 6.28333 16.2191 5.625 16.2191H5C3.61667 16.2191 2.5 15.0754 2.5 13.665V4.28262C2.5 2.87226 3.61667 1.72852 5 1.72852H15C16.3833 1.72852 17.5 2.87226 17.5 4.28262V13.665C17.5 15.0668 16.3833 16.2191 15 16.2191Z"
        stroke="#606060"
        stroke-width="1.22024"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.0003 8.59976C11.0726 8.59976 11.942 7.70263 11.942 6.59599C11.942 5.48936 11.0726 4.59229 10.0003 4.59229C8.92792 4.59229 8.05859 5.48936 8.05859 6.59599C8.05859 7.70263 8.92792 8.59976 10.0003 8.59976Z"
        stroke="#606060"
        stroke-width="1.22024"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3346 13.4672C13.3346 11.9192 11.843 10.6637 10.0013 10.6637C8.15964 10.6637 6.66797 11.9192 6.66797 13.4672"
        stroke="#606060"
        stroke-width="1.22024"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ManageAccount;
