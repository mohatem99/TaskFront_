import React from "react";
import Landingimg from "../assets/LandingIMG.svg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <div className="flex gap-10">
        <div className="flex flex-col m-4">
          <h1 className="text-darkest text-7xl mt-16 ml-6">
            Task <br /> Management
          </h1>
          <div
            className="text-darkest ml-7 mt-4 text-2xl"
            style={{ color: "#00477F" }}
          >
            All time management begins with planning
          </div>
          <div className=" flex gap-8 mt-24 ml-6 text-lg">
            <button
              className="bg-darkest text-white border rounded-lg p-3"
              style={{ borderRadius: "17px" }}
            >
              <Link to={"/login"}>Login</Link>
            </button>
            <button
              className="bg-darkest text-white border rounded-lg p-3"
              style={{ borderRadius: "17px" }}
            >
              <Link to={"/signup"}>Signup</Link>
            </button>
          </div>
        </div>
        <img src={Landingimg} />
      </div>
    </>
  );
}
