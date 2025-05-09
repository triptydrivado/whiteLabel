import React from "react";

interface CustomIconProps {
  className?: string;
}

const SpecialRequestIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.4832 9.49167V12.825C15.4832 13.0417 15.4748 13.25 15.4498 13.45C15.2582 15.7 13.9332 16.8167 11.4915 16.8167H11.1582C10.9498 16.8167 10.7498 16.9167 10.6248 17.0833L9.62485 18.4167C9.18318 19.0083 8.4665 19.0083 8.02484 18.4167L7.02483 17.0833C6.91649 16.9417 6.67484 16.8167 6.49151 16.8167H6.15818C3.49984 16.8167 2.1665 16.1583 2.1665 12.825V9.49167C2.1665 7.05001 3.29151 5.72501 5.53318 5.53334C5.73318 5.50834 5.94151 5.5 6.15818 5.5H11.4915C14.1498 5.5 15.4832 6.83334 15.4832 9.49167Z"
        stroke="#171717"
        strokeWidth="1.25"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8165 6.15867V9.492C18.8165 11.942 17.6915 13.2587 15.4499 13.4503C15.4749 13.2503 15.4832 13.042 15.4832 12.8253V9.492C15.4832 6.83367 14.1499 5.50033 11.4915 5.50033H6.1582C5.94154 5.50033 5.7332 5.50867 5.5332 5.53367C5.72487 3.292 7.04987 2.16699 9.49154 2.16699H14.8249C17.4832 2.16699 18.8165 3.50033 18.8165 6.15867Z"
        stroke="#171717"
        strokeWidth="1.25"
        stroke-miterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7464 11.5417H11.7539"
        stroke="#171717"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.82942 11.5417H8.83692"
        stroke="#171717"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.91292 11.5417H5.92042"
        stroke="#171717"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SpecialRequestIcon;
