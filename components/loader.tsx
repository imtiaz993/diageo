import React, { useState } from "react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 3000);
  return showLoader ? (
    <div>
      <div id="overlayer"></div>
      <div className="loader">
        <div className="loader-inner">
          <div className="spinner-square">
            <div className="square-1 square"></div>
            <div className="square-2 square"></div>
            <div className="square-3 square"></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Loader;
