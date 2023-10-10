import React from "react";
import Navigation from "../Components/Navigation";
import classes from "./Error.module.css";

const Error = () => {
  return (
    <>
      <Navigation />
      <main className={classes.content}>
        <h1>An error occurred</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default Error;
