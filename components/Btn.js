import React from "react";

const Btn = ({ icon, btnText, handleClick }) => {
  return (
    <div>
      <button
        className="border border-gray-300 rounded p-2  hover:text-white hover:bg-blue-500 form-input"
        onClick={handleClick}
      >
        <div className="flex gap-1 items-center">
          {icon} {btnText}
        </div>
      </button>
    </div>
  );
};

export default Btn;
