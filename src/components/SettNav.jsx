import { NavLink } from "react-router-dom";

export default function SettNav() {
  return (
    <nav>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-10 md:py-1 px-8 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-customGray dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-center items-center">
            
            <li>
              <NavLink
                to="/profilesetting"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-customBlue300 border-b-2 rounded"
                    : "block py-2 px-3 text-customBlue900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customBlue600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Profile
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/passwordsetting"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-5 text-white bg-customBlue300 border-b-2 rounded"
                    : "block py-2 px-3 text-customBlue900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customBlue600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Password
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/appearancesetting"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-customBlue300 border-b-2 rounded"
                    : "block py-2 px-3 text-customBlue900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customBlue600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Appearance
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
