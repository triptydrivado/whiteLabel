interface SafetyIconProps {
  className?: string;
}

const SafetyIcon: React.FC<SafetyIconProps> = ({ className }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 71 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // ✅ Allows dynamic styling
    >
      <path
        d="M58.8332 37.9167C58.8332 52.5 48.6248 59.7917 36.4915 64.0208C35.8561 64.2361 35.166 64.2258 34.5373 63.9917C22.3748 59.7917 12.1665 52.5 12.1665 37.9167V17.5C12.1665 16.7265 12.4738 15.9846 13.0208 15.4376C13.5678 14.8906 14.3096 14.5833 15.0832 14.5833C20.9165 14.5833 28.2082 11.0833 33.2832 6.65001C33.9011 6.12209 34.6871 5.83203 35.4998 5.83203C36.3126 5.83203 37.0986 6.12209 37.7165 6.65001C42.8207 11.1125 50.0832 14.5833 55.9165 14.5833C56.69 14.5833 57.4319 14.8906 57.9789 15.4376C58.5259 15.9846 58.8332 16.7265 58.8332 17.5V37.9167Z"
        stroke="#FB4156"
        strokeWidth="5.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.75 34.9993L32.5833 40.8327L44.25 29.166"
        stroke="#FB4156"
        strokeWidth="5.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SafetyIcon;
