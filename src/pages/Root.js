import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";
import classes from "./Root.module.css";

// komponenta za prikaz nav vrstice

const Root = () => {
  return (
    <>
      <Navigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
