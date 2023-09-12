import React from "react";

const Input = (props) => {
  const { type, name, value, onChange, placeholder, className } = props;

  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;
