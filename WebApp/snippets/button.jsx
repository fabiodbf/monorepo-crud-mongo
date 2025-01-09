import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, className, children, ...props }) => {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: "button",
  className: "",
};

export default Button;
