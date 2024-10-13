import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      <div className="w-64 bg-[#1f2a56] text-white h-screen flex flex-col items-start p-4 ">
        <div className="flex items-center mb-6 space-x-2">
          <div className="p-2 bg-white rounded-md">
            <img src="logo.png" alt="logo" className="w-8 h-8" />
          </div>
          <span className="text-xl font-bold">t</span>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/dashboard" className="flex items-center space-x-2">
            Dashboard
          </Link>
          <Link to="/analytics" className="flex items-center space-x-2">
            Analytics
          </Link>
          <Link to="/teams" className="flex items-center space-x-2">
            Teams
          </Link>
          <Link to="/tasks" className="flex items-center space-x-2">
            Tasks
          </Link>
          <Link className="flex items-center space-x-2" to="/">
            Home
          </Link>
          <Link to="/create-task" className="flex items-center space-x-2">
            Create Task
          </Link>
          <Link to="/settings" className="flex items-center space-x-2">
            Settings
          </Link>
        </nav>
        <div className="mt-auto">
          <Link to="/logout" className="flex items-center space-x-2">
            Log Out
          </Link>
        </div>
      </div>
    </>
  );
}
