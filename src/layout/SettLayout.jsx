import { Outlet } from "react-router-dom";
import SettNav from "../components/SettNav";
export default function Layout() {
  return (
    <div className="grid grid-cols-6">
          <div className="w-full min-h-screen bg-gray-800 text-white dark:bg-gray-600">
    <p>Sidebar content here</p>
  </div>
    <div className=" w-full p-4 flex-grow col-span-5 dark:bg-gray-800 dark:text-white">
        <header className="text-2xl font-bold text-customBlue900 dark:text-white">Settings</header>
    <SettNav/>
    <main className="">
        <Outlet/>
    </main>
    </div>
    </div>
  )
}
