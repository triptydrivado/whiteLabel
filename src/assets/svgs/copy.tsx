

type CopyIconProps = {
  className?: string;
  width?: number;
  height?: number;
  strokeColor?: string;
};

const CopyIcon: React.FC<CopyIconProps> = ({
  className = "",
  width = 20,
  height = 21,
  strokeColor = "#979797",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.3333 10.8207V14.3207C13.3333 17.2373 12.1667 18.404 9.25 18.404H5.75C2.83333 18.404 1.66667 17.2373 1.66667 14.3207V10.8207C1.66667 7.904 2.83333 6.73734 5.75 6.73734H9.25C12.1667 6.73734 13.3333 7.904 13.3333 10.8207Z"
        stroke={strokeColor}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 5.82067V9.32067C18.3333 12.2373 17.1667 13.404 14.25 13.404H13.3333V10.8207C13.3333 7.904 12.1667 6.73734 9.25 6.73734H6.66666V5.82067C6.66666 2.904 7.83333 1.73734 10.75 1.73734H14.25C17.1667 1.73734 18.3333 2.904 18.3333 5.82067Z"
        stroke={strokeColor}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CopyIcon;
