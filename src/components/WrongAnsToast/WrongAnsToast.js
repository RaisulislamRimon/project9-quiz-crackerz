import React, { useEffect, useState } from "react";

const WrongAnsToast = () => {
  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);
  return (
    <div className="toast toast-top toast-end">
      {showElement && (
        <div className="alert alert-info">
          <span>Your answer is wrong. Try the next one.</span>
        </div>
      )}
    </div>
  );
};

export default WrongAnsToast;
