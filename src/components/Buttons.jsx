import React from "react";

const Buttons = ({ text }) => {
  return (
    <div>
      <button className="btn px-6 border-none bg-[#d35400] text-white  hover:text-blue-500 hover:bg-orange-400">
        {text}
      </button>
    </div>
  );
};

export default Buttons;
