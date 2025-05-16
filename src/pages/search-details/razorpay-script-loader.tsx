import { useEffect, useState } from "react";

const RazorpayScriptLoader = ({
  onScriptLoad,
}: {
  onScriptLoad: (loaded: boolean) => void;
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      console.log("Razorpay script loaded");
      onScriptLoad(true);
    };

    script.onerror = () => {
      console.error("Failed to load Razorpay script");
      onScriptLoad(false);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [onScriptLoad]);

  return null;
};

export default RazorpayScriptLoader;
