import React from "react";
import timetable from "../assets/timetable.svg"
import work from "../assets/work.svg"

export default function Dcard() {
  return (
    <>
    
      <div className="relative p-4  bg-darkest text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
          <h5 className="mb-2 p-1 text-lg font-bold   dark:text-white">
            Welcome back
          </h5>
        <p className="mb-3 font-normal  dark:text-gray-400">
          I hope you are doing well,<br/> Ready to complete the latest task?
        </p>
        <a
          href="#"
          className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <div className="relative md:absolute md:bottom-0 md:right-0 md:z-0"> 
            <img src={timetable} className="w-full md:w-auto" />
        </div>
      </div>
    </>
  );
}

