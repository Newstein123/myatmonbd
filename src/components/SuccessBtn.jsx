import React from "react";

const SuccessBtn = () => {
  return (
    <button className="success-btn">
      Send
      <span>
        <img src="images/svg/double-tick.svg" alt="double-tick" width={30} />
      </span>
    </button>
  );
};

export default SuccessBtn;
