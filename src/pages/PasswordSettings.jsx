export default function PasswordSettings() {
  return (
    <div className="ml-4 md:ml-10 ">
      <h2 className="text-customBlue900 font-bold mt-10 sm:mt-16 lg:mt-20 dark:text-customBlue100">
        Profile Information
      </h2>
      <h3 className="text-customBlue900 font-bold my-4 sm:my-5 dark:text-customBlue100">
        Do You Want To Change Your Password?
      </h3>
      <form className="w-full sm:w-3/4 md:w-1/2 lg:w-[50%]">
        <div className="mb-5">
          <label
            htmlFor="oldpassword"
            className="block mb-2 text-sm font-medium text-customBlue900 dark:text-customBlue100"
          >
            Old Password
          </label>
          <input
            type="password"
            id="oldpassword"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="newpassword"
            className="block mb-2 text-sm font-medium text-customBlue900 dark:text-customBlue100"
          >
            New Password
          </label>
          <input
            type="password"
            id="newpassword"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="confirmpassword"
            className="block mb-2 text-sm font-medium text-customBlue900 dark:text-customBlue100"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
            required=""
          />
        </div>
        <div className="flex justify-end mt-5">
          <button
            type="button"
            className="text-customBlue900 bg-customGray focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-xs px-4 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-300 dark:focus:ring-blue-800 mr-2 dark:text-white hover:bg-gray-500 hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-customBlue900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-xs px-4 py-2.5 text-center dark:bg-customBlue600 dark:hover:bg-customBlue300 dark:focus:ring-blue-800 hover:bg-customBlue300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
