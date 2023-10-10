import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <>
   
      <h1>My Home Page</h1>
      <p>
        Go to list of <Link to="/products">Products</Link>
      </p>
    </>
  );
};

export default Home;
