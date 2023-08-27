import React from "react";
import { Link, Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }
  componentDidMount() {
    console.log("Parent - componentDidMount");
  }

  render() {
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is Namaste React live course Chapter 7 - Finding the path 😁</p>
        <Link to="profile">Profile Page</Link>
        <Outlet />
        {/* <ProfileClass name="Anish ClassComponent" /> */}
        <Profile name="Anish" />
        <ProfileClass name="First Child" />
        {/* <ProfileClass name="Second Child" /> */}
      </div>
    );
  }
}
export default About;
