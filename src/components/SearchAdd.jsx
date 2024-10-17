import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function SearchAdd() {
  return (
    <>
      {/*Small Search Input*/}
      <div className="flex md:order-2 basis-1/2">
        <Popover className="relative sm:hidden">
          <PopoverButton>
            <svg
              className="w-5 h-5 sm:ml-2 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </PopoverButton>

          <PopoverPanel
            className="absolute z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-64"
          >
            <div className="p-4">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </PopoverPanel>
        </Popover>


        <div className="relative hidden sm:block">
          {/* Search Input */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full md:w-4/5 lg:w-full relative">
              <input
                type="text"
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg outline-gray-400"
                placeholder="Search"
              />
              <svg
                className="absolute left-3 top-3 w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
