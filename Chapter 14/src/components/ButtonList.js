import React from "react";
import Button from "./Button";

const btnList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {btnList.map((item) => (
        <Button name={item} key={item} />
      ))}
    </div>
  );
};

export default ButtonList;
