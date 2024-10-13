import { NavLink } from "react-router-dom";

export default function SettNav() {
  return (
    <div className="flex justify-center items-center">
    <nav className="bg-gray-50 dark:bg-gray-800 w-full lg:w-[50%] md:w-[70%] sm:w-full">

      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="w-full" id="navbar-default">
          <ul className="font-medium flex flex-row items-center justify-between p-4 border-b border-gray-200 md:border-0 dark:border-gray-700">
            
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
    </div>
  );
}
