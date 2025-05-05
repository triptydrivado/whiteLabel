
interface InstagramIconProps {
  className?: string; // ✅ Allows custom classes
}

const InstagramIcon: React.FC<InstagramIconProps> = ({ className }) => {
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
        <rect width="1440" height="2671" transform="translate(-674 -2020)" fill="white" />
        <path
          d="M45.109 77.8909C63.2742 77.8909 78 63.1651 78 45C78 26.8348 63.2742 12.109 45.109 12.109C26.9439 12.109 12.2181 26.8348 12.2181 45C12.2181 63.1651 26.9439 77.8909 45.109 77.8909Z"
          fill="url(#paint0_linear_590_1030)"
        />
        <path
          d="M52.0965 26.7272H38.1362C31.9088 26.7272 26.8509 31.7851 26.8509 38.0125V51.9729C26.8509 58.2002 31.9088 63.2581 38.1362 63.2581H52.0965C58.3239 63.2581 63.3818 58.2002 63.3818 51.9729V38.0125C63.3818 31.7851 58.3239 26.7272 52.0965 26.7272ZM59.3033 51.9875C59.3033 55.9636 56.0727 59.2089 52.0819 59.2089H38.1215C34.1454 59.2089 30.9001 55.9783 30.9001 51.9875V38.0271C30.9001 34.051 34.1308 30.8057 38.1215 30.8057H52.0819C56.0581 30.8057 59.3033 34.0363 59.3033 38.0271V51.9875Z"
          fill="white"
        />
        <path
          d="M45.109 35.6591C39.9634 35.6591 35.768 39.8545 35.768 45.0001C35.768 50.1457 39.9634 54.3411 45.109 54.3411C50.2546 54.3411 54.4501 50.1457 54.4501 45.0001C54.4501 39.8545 50.2546 35.6591 45.109 35.6591ZM45.109 50.672C41.9807 50.672 39.4372 48.1284 39.4372 45.0001C39.4372 41.8718 41.9807 39.3282 45.109 39.3282C48.2373 39.3282 50.7809 41.8718 50.7809 45.0001C50.7809 48.1284 48.2373 50.672 45.109 50.672Z"
          fill="white"
        />
        <path
          d="M55.1615 36.6831C56.0221 36.5436 56.6066 35.7328 56.4671 34.8722C56.3276 34.0117 55.5169 33.4271 54.6563 33.5666C53.7957 33.7061 53.2111 34.5169 53.3507 35.3775C53.4902 36.238 54.3009 36.8226 55.1615 36.6831Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_590_1030" x1="20.065" y1="70.044" x2="66.8067" y2="23.3023" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEE411" />
          <stop offset="0.0518459" stopColor="#FEDB16" />
          <stop offset="0.1381" stopColor="#FEC125" />
          <stop offset="0.2481" stopColor="#FE983D" />
          <stop offset="0.3762" stopColor="#FE5F5E" />
          <stop offset="0.5" stopColor="#FE2181" />
          <stop offset="1" stopColor="#9000DC" />
        </linearGradient>
        <clipPath id="clip0_590_1030">
          <rect width="1440" height="2671" fill="white" transform="translate(-674 -2020)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InstagramIcon;
