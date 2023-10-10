import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";

const Products = () => {
  return (
    <div>

      <h1>The products page</h1>
      <p>
        Back To<Link to="/"> Home</Link>
      </p>
    </div>
  );
};

export default Products;
