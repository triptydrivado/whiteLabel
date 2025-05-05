import { TSVG } from "@/lib/types/svg";

const ReceiptSearch: React.FC<TSVG> = ({ className }) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M27.3346 15.067V9.387C27.3346 4.01367 26.0813 2.66699 21.0413 2.66699H10.9613C5.9213 2.66699 4.66797 4.01367 4.66797 9.387V24.4003C4.66797 27.947 6.61465 28.787 8.97465 26.2537L8.98796 26.2403C10.0813 25.0803 11.748 25.1736 12.6946 26.4403L14.0413 28.2403" 
        stroke="#FB4156" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M24.2667 28.5333C26.6231 28.5333 28.5333 26.6231 28.5333 24.2667C28.5333 21.9103 26.6231 20 24.2667 20C21.9103 20 20 21.9103 20 24.2667C20 26.6231 21.9103 28.5333 24.2667 28.5333Z" 
        stroke="#FB4156" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M29.3333 29.3333L28 28" 
        stroke="#FB4156" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M10.668 9.33301H21.3346" 
        stroke="#FB4156" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M12 14.667H20" 
        stroke="#FB4156" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default ReceiptSearch;
