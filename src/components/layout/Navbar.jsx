import { MdOutlineSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setOpenSidebar } from "../../store/reducers/authSlice";
import SearchAdd from "../SearchAdd";
import NotificationPanel from "./NotificationPanel";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0">
      <div className="flex gap-4">
        <button
          className="block md:hidden"
          onClick={() => dispatch(setOpenSidebar(true))}
        >
          ☰
        </button>
        <div className="basis-1/4 ml-2">
          <strong className="text-gray-400">Hello ,Jessica</strong>
        </div>
        <div >
          <SearchAdd />
        </div>
      </div>{" "}
      <div className="flex flex-cols-2 gap-1 sticky top-0 bg-white ">
        <div className="flex flex-row items-center">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-[19px] dark:bg-gray-600">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <div className="font-bold text-darkest">Jessica Smith</div>
            <div className="text-gray-500 text-sm">Jessica@gmail.com</div>
          </div>
        </div>

        {/* notifications */}
        <div className="flex-shrink-0 mt-2">
          <NotificationPanel />
        </div>
      </div>
      {/* <div className="flex gap-2 items-center">
        <NotificationPanel />
        user
      </div> */}
    </div>
  );
}

export default Navbar;
