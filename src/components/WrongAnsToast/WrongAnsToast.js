import React from "react";

const WrongAnsToast = () => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-info">
        <div>
          <span>Your answer is correct.</span>
        </div>
      </div>
      <div className="alert alert-success">
        <div>
          <span>Try the next one.</span>
        </div>
      </div>
    </div>
  );
};

export default WrongAnsToast;
