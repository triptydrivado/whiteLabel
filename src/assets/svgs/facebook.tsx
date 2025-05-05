

interface FacebookIconProps {
  className?: string; // ✅ Allows custom classes
}

const FacebookIcon: React.FC<FacebookIconProps> = ({ className }) => {
  return (
    <svg
      width="91"
      height="90"
      viewBox="0 0 91 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // ✅ Accepts dynamic className
    >
      <rect width="91" height="90" fill="#757575" />
      <g clipPath="url(#clip0_590_1030)">
        <rect width="1440" height="2671" transform="translate(-573 -2020)" fill="white" />
        <path
          d="M78.5 45C78.5 61.4716 66.4318 75.1241 50.6562 77.5991V54.5391H58.3455L59.8086 45H50.6562V38.8099C50.6562 36.1996 51.935 33.6562 56.0342 33.6562H60.1953V25.5352C60.1953 25.5352 56.4184 24.8906 52.8077 24.8906C45.2705 24.8906 40.3438 29.4591 40.3438 37.7297V45H31.9648V54.5391H40.3438V77.5991C24.5682 75.1241 12.5 61.4716 12.5 45C12.5 26.7752 27.2752 12 45.5 12C63.7248 12 78.5 26.7752 78.5 45Z"
          fill="#1877F2"
        />
        <path
          d="M58.3455 54.5391L59.8086 45H50.6562V38.8098C50.6562 36.2001 51.9347 33.6562 56.0341 33.6562H60.1953V25.5352C60.1953 25.5352 56.4189 24.8906 52.8083 24.8906C45.2704 24.8906 40.3438 29.4591 40.3438 37.7297V45H31.9648V54.5391H40.3438V77.599C42.0239 77.8626 43.7458 78 45.5 78C47.2542 78 48.9761 77.8626 50.6562 77.599V54.5391H58.3455Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_590_1030">
          <rect width="1440" height="2671" fill="white" transform="translate(-573 -2020)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
