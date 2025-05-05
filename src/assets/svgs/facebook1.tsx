

interface Facebook1IconProps {
  className?: string;
}

const Facebook1Icon: React.FC<Facebook1IconProps> = ({ className }) => {
  return (
    <svg
      width="67"
      height="66"
      viewBox="0 0 67 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Allows external styles
    >
      <path
        d="M66.5 33C66.5 49.4716 54.4318 63.1241 38.6562 65.5991V42.5391H46.3455L47.8086 33H38.6562V26.8099C38.6562 24.1996 39.935 21.6562 44.0342 21.6562H48.1953V13.5352C48.1953 13.5352 44.4184 12.8906 40.8077 12.8906C33.2705 12.8906 28.3438 17.4591 28.3438 25.7297V33H19.9648V42.5391H28.3438V65.5991C12.5682 63.1241 0.5 49.4716 0.5 33C0.5 14.7752 15.2752 0 33.5 0C51.7248 0 66.5 14.7752 66.5 33Z"
        fill="#1877F2"
      />
    </svg>
  );
};

export default Facebook1Icon;
