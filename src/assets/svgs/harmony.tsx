import { TSVG } from "@/lib/types/svg";

const HarmonyIcon: React.FC<TSVG> = ({ className }) => {
  return (
    <svg
      className={className}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M17.315 2.94699C16.835 2.57366 16.1684 2.57366 15.6884 2.94699C13.1551 4.88033 5.675 11.187 5.715 18.5337C5.715 24.4803 10.5551 29.3337 16.5151 29.3337C22.4751 29.3337 27.315 24.4937 27.315 18.547C27.3284 11.307 19.835 4.89366 17.315 2.94699Z" 
        stroke="#FB4156" 
        strokeWidth="2" 
        strokeMiterlimit="10" 
      />
      <path 
        d="M16.5 2.66699V29.3337" 
        stroke="#FB4156" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M16.5 25.2796L26.7667 20.293" 
        stroke="#FB4156" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M16.5 18.6132L26.3267 13.8398" 
        stroke="#FB4156" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M16.5 11.9464L23.2067 8.67969" 
        stroke="#FB4156" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default HarmonyIcon;
