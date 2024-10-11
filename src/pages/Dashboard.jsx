import Card from "../components/WelcomeCard";
import RCard from "../components/RecentCard";
import Calendar from "../components/Calendar";

export default function Dashboard() {
  return (
    <>
      {/* Upper container */}
      <div className="flex flex-row mt-2">
        {/* Welcome panel */}
        <div className="flex flex-col ">
          <div className="basis-1/4">
            <strong className="text-gray-400">Hello ,Jessica</strong>
          </div>
          <div className="basis-1/4">
            <strong className="text-darkest">You’ve got 8 tasks today</strong>
          </div>
        </div>

        {/* Search */}
        <div className="flex md:order-2 basis-1/2 ">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
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
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-1 mb-2 start-5 flex items-center ps-4 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full ml-5 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <div className="ml-7">
            <button
              type="button"
              className="text-white bg-darkest hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add Task
            </button>
          </div>
        </div>

        {/* rest */}
      </div>

      {/* Grid */}
      <div className="grid gap-6 grid-cols-2 grid-rows-1 mt-4 mb-5 m-3">
        <div className="h-28 items-center">
          <Card />
        </div>
        <div>
          <RCard />
        </div>
      </div>
      <div className="flex gap-6 m-3">
        <Calendar />

        {/* rgb(254 251 136) 150 */}
        <div className="relative p-3 bg-lightyellow text-darkest border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex p-1">
            <svg
              className="w-5 mt-2 h-5 text-darkest dark:text-white"
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

          <p className="font-normal p-1 ml-4  dark:text-gray-400">
            Task description and date
          </p>
          <div className="absolute bottom-0 right-0 ">
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
