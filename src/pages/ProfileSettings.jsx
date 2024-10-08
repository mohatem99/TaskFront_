import avatar from '../assets/Avatar.png';
import { useState } from 'react';
import axios from 'axios';
export default function ProfileSettings() {

  const [selectedImage,setSelectedImage] = useState(avatar)

const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('/upload-image-endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading the image:', error);
    }
  }
};

const handleImageDelete = () => {
  setSelectedImage(avatar);
}
const triggerFileInput = () => {
  document.getElementById('imageUpload').click();
};

  return (
    <div className='ml-10 md:ml-5 lg:ml-10 '>
      <h2 className='text-customBlue900 font-bold mt-20 text-lg md:text-xl lg:text-2xl dark:text-customBlue100'>Profile Information</h2>
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-3 ml-0 md:ml-14 mt-4">
        <img
          className="w-14 h-14 rounded-full mb-3 md:mb-0"
          src={selectedImage}
          alt="User Avatar"
        />
                <input 
          type="file" 
          accept="image/*" 
          id="imageUpload" 
          onChange={handleImageUpload} 
          style={{ display: 'none' }} 
        />
        <button 
          type="button" 
          className="text-white mt-5 bg-customBlue900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-xs px-4 py-2.5 dark:bg-customBlue600 dark:hover:bg-customBlue300 hover:bg-customBlue300"
          onClick={triggerFileInput}
        >
          Upload Photo
        </button>
        <button 
          type="button" 
          className="text-customBlue900 mt-5 bg-customGray focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-xs px-4 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-300 dark:text-white hover:bg-gray-500 hover:text-white"
          onClick={handleImageDelete}
        >
          Delete Photo
        </button>
      </div>
      <hr className='bg-customBlue900 mt-14' />
      <div>
        <form className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-7">
          <div className="mb-5">
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-customBlue900 dark:text-customBlue100"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
              required=""
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-customBlue900 dark:text-customBlue100"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
              required=""
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-customBlue900 dark:text-customBlue100"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
              required=""
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-customBlue900 dark:text-customBlue100"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="number"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
              required=""
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-customBlue900 dark:text-customBlue100"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
              required=""
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-customBlue900 dark:text-customBlue100"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
              required=""
            />
          </div>
          <div className='col-span-2 flex justify-end mt-5'>
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
    </div>
  );
}
