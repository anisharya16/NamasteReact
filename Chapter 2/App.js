import React from "react";
import ReactDOM from "react-dom/client";

// Create React elements
const heading1 = React.createElement(
  "h1",
  {
    style: {
      color: "red",
    },
    id: "heading1",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    style: {
      color: "blue",
    },
    id: "heading 2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

// Create React Root element where everything will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside root
root.render(container);
