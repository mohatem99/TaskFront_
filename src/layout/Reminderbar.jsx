import React from "react";
import { useState } from "react";

export default function sidebar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
        {/* Toggle button for small screens */}
        <button
    className="fixed top-4 right-4 z-50 sm:hidden"
    onClick={toggleSidebar}
  >
    <svg
      className="w-8 h-8 text-darkest"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 5h14M3 10h14M3 15h14"
        clipRule="evenodd"
      />
    </svg>
  </button>



    <aside
      id="default-sidebar"
      className={`fixed w-52 h-screen inset-y-0 right-0 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } sm:translate-x-0 sm:block bg-white shadow-lg z-40`}
      aria-label="Sidebar"
    >
      <div className="flex flex-col items-center m-5 ml-0" >
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 dark:bg-gray-600" style={{ borderRadius: '18px' }}>
        <svg className="absolute w-12 h-12 text-darkest -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>
        <div className="m-2 font-bold text-darkest"> Jessica Smith</div>
        <div className=" text-gray-500">Jessica@gmail.com</div>
      </div>

      {/* <div className="flex flex-col font-semibold text-darkest m-4 p-4 ">job title
        <div className="text-gray-500 font-normal">UI / UX designer</div>
      </div> */}

        <div className="rounded-lg bg-gray-50 p-2 m-1">
            <div className="flex text-darkest font-bold ml-2 p-1">Today's Remiders 
                <div>
                    <svg className="ml-3 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15.133 10.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.944.944 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.39A1.001 1.001 0 1 1 4.854 3.8a7.431 7.431 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 15.146 3.8a1 1 0 0 1 1.471-1.354 9.425 9.425 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z"/>
                    </svg>
                </div>
            </div>

            <div className="gap-4 grid grid-cols-1 grid-rows-5 font-normal text-gray-800 mt-2 ">
            <div className="border-gray-200 rounded-lg shadow p-3 bg-lightyellow">Your Task (Title) is due soon <br/><span className="bg-gray-300 text-dark text-xs font-medium me-2 px-2.5 py-0.5 rounded">8-Oct-2024</span></div>
            <div className="border-gray-200 rounded-lg shadow p-3 bg-lightyellow">Your Task (Title) is due soon <br/><span className="bg-gray-300 text-dark text-xs font-medium me-2 px-2.5 py-0.5 rounded">8-Oct-2024</span></div>
            <div className="border-gray-200 rounded-lg shadow p-3 bg-lightyellow">Your Task (Title) is due soon <br/><span className="bg-gray-300 text-dark text-xs font-medium me-2 px-2.5 py-0.5 rounded">8-Oct-2024</span></div>
            </div>

        </div>


    </aside>
    </>

  );
}
