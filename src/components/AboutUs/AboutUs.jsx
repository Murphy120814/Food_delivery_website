import React from "react";
// import UserClass from "./UserClass";
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent -->  constructor");
  }

  componentDidMount() {
    console.log("Parent --->  Component DId Mount ");
  }
  render() {
    console.log("Parent ---> render ");
    return (
      <>
        <h1> this is about us </h1>
      </>
    );
  }
}

export default AboutUs;
