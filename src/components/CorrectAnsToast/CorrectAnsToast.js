import React from "react";

const CorrectAnsToast = () => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-info">
        <span>Your answer is correct. Try the next one.</span>
      </div>
    </div>
  );
};

export default CorrectAnsToast;
