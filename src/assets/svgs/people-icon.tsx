import React from "react";

interface PeopleIconProps {
  className?: string;
}

const PeopleIcon: React.FC<PeopleIconProps> = ({ className }) => {
  return (
    <svg
      width="70"
      height="67"
      viewBox="0 0 70 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // ✅ Allows dynamic styling
    >
      <path
        d="M26.7184 30.3251C26.4268 30.2972 26.0768 30.2972 25.7559 30.3251C18.8143 30.1019 13.3018 24.6617 13.3018 17.9661C13.3018 11.1309 19.0768 5.5791 26.2518 5.5791C33.3976 5.5791 39.2018 11.1309 39.2018 17.9661C39.1726 24.6617 33.6601 30.1019 26.7184 30.3251Z"
        stroke="#FB4156"
        strokeWidth="6.08696"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47.8606 11.1602C53.5189 11.1602 58.0689 15.5402 58.0689 20.9246C58.0689 26.1975 53.6939 30.4939 48.2398 30.6891C48.0064 30.6612 47.7439 30.6612 47.4814 30.6891"
        stroke="#FB4156"
        strokeWidth="6.08696"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1355 40.6211C5.07721 45.1406 5.07721 52.5059 12.1355 56.9975C20.1564 62.1309 33.3105 62.1309 41.3314 56.9975C48.3897 52.478 48.3897 45.1127 41.3314 40.6211C33.3397 35.5156 20.1855 35.5156 12.1355 40.6211Z"
        stroke="#FB4156"
        strokeWidth="6.08696"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.4912 55.7958C55.5912 55.3773 57.5745 54.5682 59.2079 53.3686C63.7579 50.1045 63.7579 44.72 59.2079 41.4559C57.6037 40.2842 55.6495 39.503 53.5787 39.0566"
        stroke="#FB4156"
        strokeWidth="6.08696"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PeopleIcon;
