import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Wrapper>
        <App />
      </Wrapper>
    </Router>
  </React.StrictMode>
);
