import React from "react";
import { Link } from "react-router-dom";

const BestSelling = () => {
  return (
    <div>
      <h1 className="text-5xl text-center mb-2">Products</h1>
      <div className="flex justify-around gap-10 flex-wrap">
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Product 1</h2>
          </div>
        </Link>
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Product 1</h2>
          </div>
        </Link>
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Product 1</h2>
          </div>
        </Link>
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Product 1</h2>
          </div>
        </Link>
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Product 1</h2>
          </div>
        </Link>
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Product 1</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BestSelling;
