import React from "react";

const Button = ({ text, color }) => {
  return <button className={color}>{text}</button>;
};

export default Button;
