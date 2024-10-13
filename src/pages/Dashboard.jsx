import React from "react";
import Card from "../components/WelcomeCard";
import RCard from "../components/RecentCard";
import Calendar from "../components/Calendar";
export default function Dashboard() {
  return (
    <>
      {/* Grid */}
      <div className="flex flex-col sm:flex-row gap-6 m-3">
        <div className=" items-center grow relative z-0">
          <Card />
        </div>
        <div className="grow">
          <RCard />
        </div>
      </div>
      <div className="flex flex-col gap-6 m-3 sm:flex-col md:flex-col lg:flex-row">
        <div>       
          <Calendar />
        </div>

        <div className="relative flex flex-col p-3 bg-lightyellow text-darkest border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:w-2/5 sm:w-1/2">
        <div className="flex flex-row p-1">
            <svg
              class="w-5 mt-2 h-5 text-darkest dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
              <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
            </svg>
            <h5 className="mb-2 ml-2 p-1 text-lg font-bold  dark:text-white">
              Someone Assigned you this task
            </h5>
          </div>

          <div>
          <p className="font-normal p-1 ml-4  dark:text-gray-400">
            Task description and date
          </p>
          </div>
          <div className="lg:absolute lg:bottom-0 lg:right-0 ">
            <button
              type="button"
              className="text-darkest bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Accept
            </button>
            <button
              type="button"
              className="text-darkest bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Decline
            </button>
          </div>
        </div>
        
        
      </div>
    </>
  );
}
