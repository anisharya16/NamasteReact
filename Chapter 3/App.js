import React from "react";
import ReactDOM from "react-dom/client";

// USING BASIC REACT CONCEPTS
// const heading1 = React.createElement(
//   "h1",
//   {
//     style: {
//       color: "yellow",
//     },
//   },
//   "Heading 1"
// );
// const heading2 = React.createElement("h2", {}, "Heading 2");
// const heading3 = React.createElement("h3", {}, "Heading 3");

// const container = React.createElement("div", {}, [
//   heading1,
//   heading2,
//   heading3,
// ]);

// USING JSX
// const Heading1 = (
//   <h1 id="title1" key="h1">
//     Heading 1
//   </h1>
// );
// const Heading2 = (
//   <h2 id="title2" key="h2">
//     Heading 2
//   </h2>
// );
// const Heading3 = (
//   <h3 id="title3" key="h3">
//     Heading 3
//   </h3>
// );

// const Container = () => (
//   <>
//     {Heading1}
//     {Heading2}
//     {Heading3}
//   </>
// );

// USING FUNCTIONAL COMPONENT
const Heading1 = () => (
  <h1 id="title1" key="h1">
    Heading 1
  </h1>
);

const Heading2 = () => {
  return (
    <h2 id="title2" key="h2">
      Heading 2
    </h2>
  );
};

const Heading3 = () => {
  return (
    <h3 id="title3" key="h3">
      Heading 3
    </h3>
  );
};

const Container = () => {
  return (
    <div>
      <Heading1 />
      <Heading2 />
      <Heading3 />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container />);
