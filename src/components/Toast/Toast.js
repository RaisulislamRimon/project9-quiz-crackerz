import React from "react";

const Toast = () => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success">
        <div>
          <span>You have subscribed successfully.</span>
          {/* <span>Take a quiz and get a chance to get a job.</span> */}
        </div>
      </div>
    </div>
  );
};

export default Toast;
