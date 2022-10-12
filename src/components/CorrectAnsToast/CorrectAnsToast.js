import React, { useEffect, useState } from "react";

const CorrectAnsToast = () => {
  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);
  return (
    <div className="toast toast-top toast-end">
      {showElement && (
        <div className="alert alert-success">
          <span>Your answer is correct.</span>
        </div>
      )}
    </div>
  );
};

export default CorrectAnsToast;
