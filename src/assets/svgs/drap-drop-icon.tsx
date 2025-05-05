import React from "react";

interface CustomIconProps {
  className?: string;
}

const DragDropIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="24"
      // height="24"
      // viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M16.8 9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9Z"
        fill="#FB4156"
      />
      <path
        d="M15.8798 5.57006L12.5298 2.22006C12.2398 1.93006 11.7598 1.93006 11.4698 2.22006L8.11984 5.57006C7.82984 5.86006 7.82984 6.34006 8.11984 6.63006C8.40984 6.92006 8.88984 6.92006 9.17984 6.63006L11.2498 4.56006V15.2501C11.2498 15.6601 11.5898 16.0001 11.9998 16.0001C12.4098 16.0001 12.7498 15.6601 12.7498 15.2501V4.56006L14.8198 6.63006C14.9698 6.78006 15.1598 6.85006 15.3498 6.85006C15.5398 6.85006 15.7298 6.78006 15.8798 6.63006C16.1798 6.34006 16.1798 5.87006 15.8798 5.57006Z"
        fill="#FB4156"
      />
    </svg>
  );
};
export default DragDropIcon;
