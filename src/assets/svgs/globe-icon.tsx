
interface GlobeIconProps {
  className?: string;
}

const GlobeIcon: React.FC<GlobeIconProps> = ({ className }) => {
  return (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} 
    >
      <path
        d="M40.5 43.3337V6.66699L67.1667 20.0003L40.5 33.3337"
        stroke="#FB4156"
        strokeWidth="6.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M69.0371 34.0718C70.8109 39.5389 70.9769 45.4006 69.5152 50.9593C68.0536 56.5181 65.0259 61.5399 60.7923 65.4274C56.5587 69.3149 51.2975 71.9045 45.6345 72.8879C39.9716 73.8713 34.1453 73.2073 28.8489 70.9748C23.5525 68.7423 19.0089 65.0353 15.7587 60.2948C12.5085 55.5544 10.6884 49.98 10.5151 44.2349C10.3418 38.4898 11.8225 32.8159 14.7811 27.8881C17.7396 22.9603 22.0515 18.9862 27.2037 16.4385"
        stroke="#FB4156"
        strokeWidth="6.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.1733 33.3232C25.503 35.5467 24.4156 38.1527 24.0101 40.9039C23.6047 43.6551 23.8941 46.464 24.852 49.0747C25.8099 51.6855 27.4058 54.015 29.4944 55.8511C31.583 57.6873 34.0978 58.9716 36.8098 59.5871C39.5217 60.2026 42.3446 60.1298 45.0211 59.3752C47.6977 58.6206 50.1429 57.2083 52.134 55.2668C54.1251 53.3254 55.5988 50.9167 56.4207 48.26C57.2427 45.6033 57.3868 42.7832 56.84 40.0566"
        stroke="#FB4156"
        strokeWidth="6.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GlobeIcon;
