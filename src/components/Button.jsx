import React from "react";

const Button = ({ text, type = "" }) => {
  return (
    <div>
      <button
        type={type}
        className="btn w-full px-6 bg-[#d35400] text-white border-none  hover:text-blue-500 hover:bg-orange-400"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
