import React from "react";

interface EditIconProps {
  className?: string;
}

const EditIcon: React.FC<EditIconProps> = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.33325 1.51733H5.99992C2.66659 1.51733 1.33325 2.85067 1.33325 6.184V10.184C1.33325 13.5173 2.66659 14.8507 5.99992 14.8507H9.99992C13.3333 14.8507 14.6666 13.5173 14.6666 10.184V8.85067"
        stroke="#FB4156"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6933 2.19746L5.43992 7.4508C5.23992 7.6508 5.03992 8.04413 4.99992 8.3308L4.71325 10.3375C4.60659 11.0641 5.11992 11.5708 5.84659 11.4708L7.85325 11.1841C8.13325 11.1441 8.52659 10.9441 8.73325 10.7441L13.9866 5.4908C14.8933 4.58413 15.3199 3.5308 13.9866 2.19746C12.6533 0.864128 11.5999 1.2908 10.6933 2.19746Z"
        stroke="#FB4156"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.93994 2.95093C10.3866 4.54426 11.6333 5.79093 13.2333 6.24426"
        stroke="#FB4156"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
