import React from "react";

type IconProps = {
  className?: string;
};

const DocketIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21.6601 10.7491L20.6801 14.9291C19.8401 18.5391 18.1801 19.9991 15.0601 19.6991C14.5601 19.6591 14.0201 19.5691 13.4401 19.4291L11.7601 19.0291C7.59006 18.0391 6.30006 15.9791 7.28006 11.7991L8.26006 7.60909C8.46006 6.75909 8.70006 6.01909 9.00006 5.40909C10.1701 2.98909 12.1601 2.33909 15.5001 3.12909L17.1701 3.51909C21.3601 4.49909 22.6401 6.56909 21.6601 10.7491Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.06 19.6992C14.44 20.1192 13.66 20.4692 12.71 20.7792L11.13 21.2992C7.15998 22.5792 5.06997 21.5092 3.77997 17.5392L2.49997 13.5892C1.21997 9.61918 2.27997 7.51918 6.24997 6.23918L7.82997 5.71918C8.23997 5.58918 8.62997 5.47918 8.99997 5.40918C8.69997 6.01918 8.45997 6.75918 8.25997 7.60918L7.27997 11.7992C6.29997 15.9792 7.58998 18.0392 11.76 19.0292L13.44 19.4292C14.02 19.5692 14.56 19.6592 15.06 19.6992Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.64 8.83984L17.49 10.0698"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.66 12.71L14.56 13.45"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DocketIcon;
