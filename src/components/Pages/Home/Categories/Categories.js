import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl">Categories</h1>
      <div className="flex justify-around gap-10 flex-wrap">
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Category 1</h2>
          </div>
        </Link>
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Category 1</h2>
          </div>
        </Link>
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Category 1</h2>
          </div>
        </Link>
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Category 1</h2>
          </div>
        </Link>
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Category 1</h2>
          </div>
        </Link>
        <Link to="/" class="bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-3xl">Category 1</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
