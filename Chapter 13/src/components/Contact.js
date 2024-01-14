import React from "react";

const Contact = () => {
  return (
    <div className="m-2 p-2">
      <p className="font-bold text-xl m-2">Contact Us</p>
      <form>
        <input
          type="text"
          className="border border-gray-200 rounded-md p-2 m-2 shadow-lg"
          placeholder="Your Name"
        />
        <input
          type="text"
          className="border border-gray-200 rounded-md p-2 m-2 shadow-lg"
          placeholder="Your Message to Us"
        />
        <button className=" bg-gray-200 p-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
