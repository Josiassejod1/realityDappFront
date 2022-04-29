import React from "react";
import "./StyledButton.css";

export const StyledButton = ({ primary, label, ...props }) => {
    return (
      <button
        type="button"
        className="styled_button"
        {...props}
      >
        {label}
      </button>
    );
  };