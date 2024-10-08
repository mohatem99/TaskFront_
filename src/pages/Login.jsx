import { Link } from 'react-router-dom';
import taskManagement from '../assets/Task-Management.png';

export default function Login() {
  return (
    <>
    <div className='grid grid-cols-4'>
      <div className="flex min-h-screen">
        <div className="w-full bg-customBlue900 text-white relative">

        <div className="flex-1 ">
          <img
            className="absolute left-[20%] bottom-[10%] lg:max-w-[500px] md:max-w-[400px] sm:max-w-[300px] min-w-[300px] h-auto"
            src={taskManagement}
            alt="login-img"
          />
        </div>
        </div>
        </div>
        <div className=' col-span-3 flex justify-center items-center'>
        <div className="flex flex-col items-center justify-center w-full bg-white p-8 lg:max-w-[600px] md:max-w-[400px] sm:max-w-[200px]">
          <h1 className='text-customBlue900 font-bold mb-12 text-2xl'>Login</h1>
          <form className=" w-full">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-customBlue900 text-sm rounded-lg focus:ring-blue-500 focus:border-customBlue700 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-customBlue700 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <div className='flex justify-between w-full'>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-customBlue900"
                >
                  Remember me
                </label>
                <Link className='text-customBlue900 font-semibold'>
                  Forget Password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-customBlue900 hover:bg-customBlue600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 w-full"
            >
              Login
            </button>
          </form>
          <p className='text-gray-500 mt-10'>Don't Have an account? <Link to={"/signup"} className='text-customBlue900 font-bold'>Sign Up</Link></p>
        </div>
      </div>
      </div>
    </>
  );
}
