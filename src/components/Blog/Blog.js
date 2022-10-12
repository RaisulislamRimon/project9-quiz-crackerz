import React from "react";

const Blog = () => {
  return (
    <div className="mt-20">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the purpose of react router ?
        </div>
        <div className="collapse-content">
          <p>
            React Router is a standard library for routing in React.It enables
            the navigation among the views of various components in a React
            Application and allows changing the URL of the browser and keeps the
            UI in sync with the URL.React Router is a state container for the
            current location , or URL. <br /> <br />
            It keeps track of the location and renders different Routes as it
            changes, and it also gives you tools to update the location using
            Links and the history API.React Router is an API for React
            applications.React Router, and dynamic, client-side routing, allows
            us to build a single-page web application with navigation without
            the page refreshing as the user navigates. <br /> <br />
            By preventing a page refresh, and using Router or Link,the flash of
            a white screen or blank page is prevented. This is one increasingly
            common way of having a more seamless user experience. React router
            also allows the user to utilize browser functionality like the back
            button and the refresh page while maintaining the correct view of
            the application.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does Context API works ?
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What do you know about useRef hook ?
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
