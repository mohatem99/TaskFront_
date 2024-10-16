import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import notify from "../../hooks/useNotification";
import { fetchCategories } from "../../store/reducers/categoriesSlice";
import { useFormik } from "formik";
import { addTask } from "../../store/reducers/tasksSlice";
import { allUsers } from "../../store/reducers/allusersSlice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    navigate("/tasks");
    notify("Task creation cancelled", "success");
  };

  const categoriesFromRedux = useSelector(
    (store) => store.categories.categories
  );

  const allUsersFromRedux = useSelector(
    (store) => store.users
  );


  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    console.log("Form submitted!", values);
    try {
      const taskData = {
        title: values.title,
        categoryId: values.category,
        description: values.description,
        dueDate: values.dueDate,
        status: values.status,
        priority: values.priority,
        assignedTo: values.assignedTo,
      };
      


      const result = await dispatch(addTask(taskData));

      if (result) {
        navigate("/tasks");
        notify("Task Added Successfully!", "success");

      } else {
        notify("Task creation failed", "error");
      }
    } catch (error) {
      notify(error.message, "error");
      console.log(error)
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };


  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
      dueDate: "",
      status: "",
      priority: "",
      assignedTo: "",
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return loading ? (
    <div className="py-10">
      <Loading />
    </div>
  ) : (
    <>
      <h1 className="text-customBlue900 font-montserrat text-2xl md:text-3xl font-bold mb-4 text-center">
        Add New Task
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-customBlue100 p-6 rounded-xl w-full max-w-[600px] mx-auto space-y-4"
      >
        <div>
          <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {categoriesFromRedux.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
            Description
          </label>
          <textarea
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            value={formik.values.dueDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="date"
            name="dueDate"
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
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="status"
              className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
              required
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
              Priority
            </label>
            <select
              name="priority"
              value={formik.values.priority}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
            Assigned To: (Optional)
          </label>
          {/* <input
            value={formik.values.assignedTo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="assignedTo"
            className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
          /> */}
          <select
            name="assignedTo"
            className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]"
            required
            value={formik.values.assignedTo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {allUsersFromRedux?.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
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
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
