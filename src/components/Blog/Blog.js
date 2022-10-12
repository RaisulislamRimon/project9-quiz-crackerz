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
            current location , or URL. <br />
            It keeps track of the location and renders different Routes as it
            changes, and it also gives you tools to update the location using
            Links and the history API.React Router is an API for React
            applications.React Router, and dynamic, client-side routing, allows
            us to build a single-page web application with navigation without
            the page refreshing as the user navigates. <br />
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
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. <br />
            Context provides a way to pass data through the component tree
            without having to pass props down manually at every level.In a
            typical React application, data is passed top-down (parent to child)
            via props, but such usage can be cumbersome for certain types of
            props (e.g. locale preference, UI theme) that are required by many
            components within an application. Context provides a way to share
            values like these between components without having to explicitly
            pass a prop through every level of the tree.Using context, we can
            avoid passing props through intermediate elements
          </p>
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
          <p>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.If we
            tried to count how many times our application renders using the
            useState Hook, we would be caught in an infinite loop since this
            Hook itself causes a re-render. To avoid this, we can use the useRef
            Hook. <br />
            useRef() only returns one item. It returns an Object called current.
            When we initialize useRef we set the initial value:
            useRef(0).However, useRef() is useful for more than the ref
            attribute. It's handy for keeping any mutable value around similar
            to how you'd use instance fields in classes.useRef is like a “box”
            that can hold a mutable value in its .current property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
