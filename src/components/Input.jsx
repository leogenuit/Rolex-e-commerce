import React from "react";

const Input = ({ text }) => {
  return (
    <div>
      <label htmlFor="firstname">{text}</label>
      <input
        type="text"
        placeholder="yo"
        className="border  border-2"
        for="firstname"
      />
    </div>
  );
};

export default Input;
