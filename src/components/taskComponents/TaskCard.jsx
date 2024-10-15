import toast from 'react-hot-toast';
import editImg from '../../assets/edit.svg';
import trashImg from '../../assets/trash.svg';
import { removeTask } from '../../store/reducers/tasksSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdCalendar } from 'react-icons/io'

export default function TaskCard({ task }) {
  const dispatch = useDispatch();

  const getPeriorityColor = (priority) => {
    switch (priority) {
      case 'low':
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'high':
        return 'text-red-500';
      default:
        return 'text-red-500';
    }
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
    toast.success('Task successfully deleted');
  };

  return (
    <div className={`h-fit px-4 py-3 gap-4 shadow-lg rounded-md flex flex-col`}>
      <div className="flex flex-col gap-3 ">

        <div className="font-semibold font-montserrat text-[14px] text-customBlue900 px-2 py-1 rounded-2xl bg-[#F4F4F4] w-fit">
          # Website
        </div>

        <h4 className="text-lg font-bold text-customBlue900">Website App</h4>
        <p className="font-montserrat font-medium text-[15px] text-customBlue900">Website and Design</p>

        <div className="flex flex-row items-center justify-between gap-2 mt-auto rounded-lg bg-white">
          <div className="flex items-center">
            <IoMdCalendar className="w-5 h-5 text-customBlue900 mr-1" /> 
            <p className="font-bold text-customBlue900">24/10/2024</p>
          </div>
          <p className={`text-md font-bold ${getPeriorityColor(task.priority)}`}>
            High
          </p>

          <div className="flex items-center gap-2">
            <button className="px-1 rounded-md text-slate-100 ">
              <Link to={`/edit-task/${task.id}`}>
                <img src={editImg} className="w-5 h-5" alt="Edit" />
              </Link>

            </button>
            <button >
              <img src={trashImg} className="w-5 h-5" alt="Delete" />
            </button>
                {/* For showing Team members */}
            {/* {task.teamMembers && task.teamMembers.split(" ").length >= 2 && (
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-customBlue900 rounded-full">
                <span className="font-medium text-white">
                  {`${task.teamMembers.split(" ")[0][0]}${task.teamMembers.split(" ")[1][0]}`}
                </span>
              </div>
            )} */}


          </div>
        </div>
      </div>

    </div>
  );
}

