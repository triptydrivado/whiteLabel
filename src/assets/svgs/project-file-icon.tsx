import React from "react";

interface CustomIconProps {
  className?: string;
}

const ProjectFileIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      // width="14"
      // height="14"
      // viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.3332 5.93491V8.60158C12.3332 11.2682 11.2665 12.3349 8.59984 12.3349H5.39984C2.73317 12.3349 1.6665 11.2682 1.6665 8.60158V5.40158C1.6665 2.73491 2.73317 1.66824 5.39984 1.66824H8.0665"
        stroke="#606060"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3331 5.93491H10.1997C8.59974 5.93491 8.06641 5.40158 8.06641 3.80158V1.66824L12.3331 5.93491Z"
        stroke="#606060"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ProjectFileIcon;
