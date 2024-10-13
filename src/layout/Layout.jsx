import Navbar from "./Navbar";
import { SideBarComponent } from "./SidbarComponent";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
        <SideBarComponent />{" "}
      <main className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700 sm:ml-60 w-auto h-auto">
      <Navbar />
        <Outlet />
      </main>
      
    </div>
  );
}

export default Layout;
