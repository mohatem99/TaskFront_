import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import Loading from '../Loading';

const EditTaskForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleCancel = () => {
        navigate('/tasks');
    };


    return loading ? (
        <div className="py-10">
            <Loading />
        </div>
    ) : (<>
        <h1 className="text-customBlue900 font-montserrat text-2xl md:text-3xl font-bold mb-4 text-center">
            Edit Task
        </h1>
        <form

            className="bg-customBlue100 p-6 rounded-xl w-full max-w-[600px] mx-auto space-y-4"
        >
            <div>
                <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
                    required
                />
            </div>

            <div>
                <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
                    Category
                </label>
                <select
                    name="category"
                    className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
                    required
                >
                    <option value="" disabled>Select a category</option>
                </select>
            </div>

            <div>
                <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
                    Description
                </label>
                <textarea
                    name="description"
                    className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
                    required
                />
            </div>

            <div>
                <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
                    Deadline
                </label>
                <input
                    type="date"
                    name="deadline"
                    className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
                    required
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
                        Current Status
                    </label>
                    <select
                        name="status"
                        className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
                        required
                    >
                        <option value="all">All</option>
                        <option value="to-do">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
                        Priority
                    </label>
                    <select
                        name="priority"
                        className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
                        required
                    >
                        <option value="all">All</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
                    Team Members (Optional)
                </label>
                <input
                    type="text"
                    name="teamMembers"
                    className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
                />
            </div>

            <div className="flex justify-center space-x-4 mt-6">
                <button
                    type="button"
                    className="w-5/12 bg-customBlue900 text-white font-montserrat text-base font-bold py-2 rounded-xl hover:bg-[#0b1366] transition-all"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="w-5/12 bg-customBlue900 text-white font-montserrat text-base font-bold py-2 rounded-xl hover:bg-[#0b1366] transition-all"
                >
                    Update Task
                </button>
            </div>
        </form>
    </>
    );


};

export default EditTaskForm;
