import React, { useEffect, useState } from "react";

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10); // trigger animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed left-1/2 top-[250px] z-50 w-[90%] max-w-md -translate-x-1/2 transform rounded-xl border border-[var(--brand-theme-color)] bg-white px-6 py-5 shadow-xl transition-all duration-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} `}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1 text-sm text-gray-800">{message}</div>
        <button
          onClick={onClose}
          className="mt-1 inline-flex items-center rounded-md bg-[var(--brand-theme-color)] px-4 py-1.5 text-sm font-medium text-white shadow-sm transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
