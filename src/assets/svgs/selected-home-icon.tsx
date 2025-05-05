import React from "react";

interface CustomIconProps {
  className?: string;
}

const SelectedHomeIcon: React.FC<CustomIconProps> = ({ className }) => {
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
        opacity="0.4"
        d="M20.0422 6.82006L14.2822 2.79006C12.7122 1.69006 10.3022 1.75006 8.79219 2.92006L3.78219 6.83006C2.78219 7.61006 1.99219 9.21006 1.99219 10.4701V17.3701C1.99219 19.9201 4.06219 22.0001 6.61219 22.0001H17.3922C19.9422 22.0001 22.0122 19.9301 22.0122 17.3801V10.6001C22.0122 9.25006 21.1422 7.59006 20.0422 6.82006Z"
        fill="white"
      />
      <path
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="white"
      />
    </svg>
  );
};
export default SelectedHomeIcon;
