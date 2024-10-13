import SettNav from "../components/SettNav";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Layout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    
    <div className=" flex justify-end min-h-screen">
       {isSidebarVisible && <Sidebar />}
      <div className="w-full p-4 dark:bg-gray-800 dark:text-white">
      <header className="text-2xl font-bold text-customBlue900 dark:text-white ml-40 mt-10">
          Settings
        </header>
        <SettNav />
        <main>
          <Outlet context={{ isSidebarVisible,toggleSidebarVisibility }}/>
        </main>
      </div>
    </div>
  );
}
