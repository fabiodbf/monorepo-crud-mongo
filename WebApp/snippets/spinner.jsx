import React from "react";

const Spinner = ({ size, color }) => {
  const spinnerStyle = {
    width: size,
    height: size,
    borderTopColor: color,
    borderLeftColor: "transparent",
    animation: "spin 1s linear infinite",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "50%",
  };

  return <div className="inline-block animate-spin" style={spinnerStyle}></div>;
};

Spinner.defaultProps = {
  size: "6",
  color: "rgba(59, 130, 246, 1)",
};

export default Spinner;
