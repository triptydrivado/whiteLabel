import React, { forwardRef } from "react";

const EditIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  function EditIcon({ className, ...props }, ref) {
    return (
      <svg
        ref={ref} // ✅ Ensures compatibility with Lucide-style icons
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className} // ✅ Allows Tailwind styling
        {...props} // ✅ Ensures props like stroke, fill, etc., are supported
      >
        <g id="vuesax/linear/edit-2">
          <g id="edit-2">
            <path
              d="M7.73561 2.59996L2.94644 7.66913C2.76561 7.86163 2.59061 8.2408 2.55561 8.5033L2.33977 10.3933C2.26394 11.0758 2.75394 11.5425 3.43061 11.4258L5.30894 11.105C5.57144 11.0583 5.93894 10.8658 6.11977 10.6675L10.9089 5.5983C11.7373 4.7233 12.1106 3.7258 10.8214 2.50663C9.5381 1.29913 8.56394 1.72496 7.73561 2.59996Z"
              stroke="currentColor"
              strokeWidth="0.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.9375 3.44592C7.18833 5.05592 8.495 6.28676 10.1167 6.45009"
              stroke="currentColor"
              strokeWidth="0.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.75 13.3334H12.25"
              stroke="currentColor"
              strokeWidth="0.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    );
  },
);

EditIcon.displayName = "EditIcon"; // ✅ Prevents React warnings in development

export default EditIcon;
