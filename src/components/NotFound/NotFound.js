import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">Oops!</h2>
          <p>Sorry, an unexpected error has occurred.</p>
          <div className="card-actions">
            <p>This page is not available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
