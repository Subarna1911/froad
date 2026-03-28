// components/Container.jsx fro reusability
import React from "react";

export default function Container({ children, className }) {
  return (
    <div className={`container mx-auto max-w-7xl md:px-6 px-8 ${className || ""}`}>
      {children}
    </div>
  );
}
