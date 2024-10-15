import SettNav from "../SettNav";
import { Outlet } from "react-router-dom";
import { SideBarComponent } from "./SidbarComponent";
import { useState } from "react";

export default function Layout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    
    <div>
             <SideBarComponent />

      <div className=" p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700 sm:ml-60 w-auto h-auto">
      <div className="w-full p-4 dark:bg-gray-800 dark:text-white">
      <header className="text-2xl font-bold text-customBlue900 dark:text-white ml-14 mt-5">
          Settings
        </header>
        <SettNav />
        <main>
          <Outlet context={{ isSidebarVisible,toggleSidebarVisibility }}/>
        </main>
      </div>
    </div>
    </div>
  );
}
