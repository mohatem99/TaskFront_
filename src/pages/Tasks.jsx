import React, { useState } from 'react';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';
import TaskCard from '../components/taskComponents/TaskCard';
import { IoMdAdd } from 'react-icons/io';
import { TbCategoryPlus } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { getFormattedDate, getFullMonth } from '../Utils/dateUtils';

function Tasks() {
  const [loading, setLoading] = useState(false);
  const tasks = useSelector((state) => state.tasks.tasks);
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter tasks based on status, priority, and search term
  const filterTasks = (currentStatus) => {
    return tasks.filter((task) => {
      const matchesStatus = task.currentStatus === currentStatus;
      const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesStatus && matchesPriority && matchesSearch;
    });
  };

  return loading ? (
    <div className="py-10">
      <Loading />
    </div>
  ) : (
    <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 ">
      <div className="flex flex-col items-center justify-between mb-4 space-y-4 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h1 className="text-customBlue900 font-montserrat text-[20px] font-bold text-center md:text-left">
            Welcome,
          </h1>
          <p className="text-customBlue900 font-montserrat text-[14px] font-normal text-center md:text-left">
            Jessica Smith
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 relative">
            <input
              type="text"
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg outline-gray-400"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-3 w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>

      </div>

      {/* Line */}
      <div style={{ borderBottom: '2px solid #10197A', margin: '10px 0', padding: '5px' }}></div>

      {/* Board View */}
      <div className="flex-1 bg-[#F4F4F4] p-4 rounded-2xl shadow-md mt-7">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-2 border-r border-customBlue900 flex flex-col items-center justify-center">       {/* First Column */}
            <h2 className="text-customBlue900 font-montserrat font-bold text-center md:text-left">{getFullMonth()}</h2>
            <p className="text-customBlue900 font-montserrat font-medium text-center md:text-left">{getFormattedDate()}</p>
          </div>

          <div className="flex-1 p-2 border-r border-customBlue900 flex flex-col items-center justify-center">  {/* Second Column */}
            <p className="text-customBlue900 font-montserrat font-bold text-center md:text-left">
              <label className="mr-2 text-customBlue900 font-bold">Filter by Priority:</label>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="p-2 border rounded-xl"
              >
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </p>
          </div>

          <div className="flex-1 p-2 flex flex-row items-center justify-center">
            <Link to={'/create-task'}>
              <button
                type="button"
                className="flex items-center text-white bg-customBlue900 hover:bg-customBlue900 focus:ring-4 focus:ring-customBlue900 font-montserrat rounded-lg text-[15px] px-5 py-2.5 me-2 mb-2 "
              >
                <IoMdAdd className="text-2xl text-white cursor-pointer" />
                Add Task
              </button>
            </Link>
            <Link to={'/categories'}>
            <button
              type='button'
              className="flex items-center text-white bg-customBlue900 hover:bg-customBlue900 focus:ring-4 focus:ring-customBlue900 font-montserrat rounded-lg text-[16.5px] px-5 py-2.5 me-2 mb-2">
                <TbCategoryPlus className='text-2xl text-white cursor-pointer' />
              Categories
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Task Columns */}
      <div className="flex flex-col md:flex-row gap-4 py-4 ">
        {/* To Do Column */}
        <div className="flex-1 bg-white p-4">
          <div className="flex items-center justify-between mb-4 rounded-lg shadow-md h-fit p-4">
            <h2 className="text-xl font-bold text-customBlue900">To Do</h2>
            <Link to="/create-task">
              <IoMdAdd className="text-2xl text-customBlue900 cursor-pointer" />
            </Link>
          </div>
          <div style={{ borderBottom: '2px solid #10197A', margin: '10px 0' }}></div>
          <div className="space-y-4">
            {filterTasks('to-do').map((task, index) => (
              <TaskCard task={task} key={index} />
            ))}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="flex-1 bg-white p-4">
          <div className="flex items-center justify-between mb-4 rounded-lg shadow-md h-fit p-4">
            <h2 className="text-xl font-bold text-customBlue900">In Progress</h2>
            <Link to="/create-task">
              <IoMdAdd className="text-2xl text-customBlue900 cursor-pointer" />
            </Link>
          </div>
          <div style={{ borderBottom: '2px solid #10197A', margin: '10px 0' }}></div>
          <div className="space-y-4">
            {filterTasks('in-progress').map((task, index) => (
              <TaskCard task={task} key={index} />
            ))}
          </div>
        </div>

        {/* Completed Column */}
        <div className="flex-1 bg-white p-4">
          <div className="flex items-center justify-between mb-4 rounded-lg shadow-md h-fit p-4">
            <h2 className="text-xl font-bold text-customBlue900">Completed</h2>
            <Link to="/create-task">
              <IoMdAdd className="text-2xl text-customBlue900 cursor-pointer" />
            </Link>
          </div>
          <div style={{ borderBottom: '2px solid #10197A', margin: '10px 0' }}></div>
          <div className="space-y-4">
            {filterTasks('completed').map((task, index) => (
              <TaskCard task={task} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
