import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full max-w-[1240px] my-0 mx-auto px-4 md:px-6">
      {children}
    </div>
  );
};

export default Wrapper;
