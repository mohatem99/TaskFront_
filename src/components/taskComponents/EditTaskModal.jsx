import { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";

import { useFormik } from "formik";
import { fetchTaskById, updateTask } from "../../store/reducers/tasksSlice";
import notify from "../../hooks/useNotification";
import { fetchCategories } from "../../store/reducers/categoriesSlice";
import { allUsers } from "../../store/reducers/userSlice";
import ConfirmModal from "../Confirm/ConfirmModal";
import * as Yup from "yup";

const EditTaskForm = () => {
  const { id: taskId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { task, loading, error } = useSelector((state) => state.tasks);
  const { user } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoriesFromRedux = useSelector(
    (store) => store.categories.categories
  );

  useEffect(() => {
    if (taskId) {
      dispatch(fetchTaskById(taskId));
    }
  }, [dispatch, taskId]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const allUsersFromRedux = useSelector((store) => store.users.users);

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .trim()
      .required("Title is required")
      .min(2, "Title must be at least 2 characters")
      .max(100, "Too Long to be Title !"),
    category: Yup.string().required("Category is required"),
    description: Yup.string()
      .trim()
      .required("Description is required")
      .min(15, "Discription must be at least 15 characters")
      .max(1000, "Discription is Too Long!"),
    dueDate: Yup.date().required("Due date is required"),
    status: Yup.string().required("Status is required"),
    priority: Yup.string().required("Priority is required"),
    assignedTo: Yup.string().required("User is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (values.dueDate) {
        values.dueDate = moment(values.dueDate).toISOString();
      }
      if (values.category) {
        values.categoryId = values.category;
      }
      const result = await dispatch(updateTask({ taskId, task: values }));

      if (result) {
        navigate("/tasks");
        notify("Task Updated Successfully!", "success");
      }
    } catch (error) {
      notify("Task update failed", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(true); // Open the confirmation modal
  };
  const confirmCancel = () => {
    navigate("/tasks");
    notify("Edit task  cancelled", "success");
  };
  // Cancel the cancel action
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: task?.title || "",
      category: task?.category?._id || "",
      description: task?.description || "",
      dueDate: task?.dueDate ? moment(task?.dueDate).format("YYYY-MM-DD") : "",
      status: task?.status || "pending",
      priority: task?.priority || "low",
      assignedTo: task?.assignedTo?._id || "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const isTaskCreator = task?.createdBy._id === user?._id;

  if (loading) {
    return (
      <div className="py-10">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error loading task: {error}</div>;
  }

  return (
    <>
      <h1 className="text-customBlue900 font-montserrat text-2xl md:text-3xl font-bold mb-4 text-center">
        Edit Task
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
            disabled={!isTaskCreator}
            type="text"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className={`w-full p-3 rounded-md border 
              ${
                formik.touched.title && formik.errors.title
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]`}
          />
          {formik.errors.title && formik.touched.title && (
            <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
              {formik.errors.title}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
            Category
          </label>
          <select
            disabled={!isTaskCreator}
            name="category"
            className={`w-full p-3 rounded-md border 
              ${
                formik.touched.category && formik.errors.category
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]`}
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Category</option>
            {categoriesFromRedux.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          {formik.errors.category && formik.touched.category && (
            <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
              {formik.errors.category}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
            Description
          </label>
          <textarea
            disabled={!isTaskCreator}
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className={`w-full p-3 rounded-md border 
              ${
                formik.touched.description && formik.errors.description
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]`}
          />
          {formik.errors.description && formik.touched.description && (
            <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
              {formik.errors.description}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
            Deadline
          </label>
          <input
            disabled={!isTaskCreator}
            type="date"
            name="dueDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dueDate}
            min={new Date().toISOString().split("T")[0]}
            className={`w-full p-3 rounded-md border ${
              formik.touched.dueDate && formik.errors.dueDate
                ? "border-red-500 focus:ring-red-500"
                : "border-neutral-50 focus:ring-[#a6b7ef]"
            } outline-none`}
          />
          {formik.errors.dueDate && formik.touched.dueDate && (
            <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
              {formik.errors.dueDate}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
              Current Status
            </label>
            <select
              name="status"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.status}
              className={`w-full p-3 rounded-md border ${
                formik.touched.status && formik.errors.status
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-50 focus:ring-[#a6b7ef]"
              } outline-none`}
            >
              <option value="">Select Current Status</option>
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            {formik.errors.status && formik.touched.status && (
              <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
                {formik.errors.status}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
              Priority
            </label>
            <select
              disabled={!isTaskCreator}
              name="priority"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.priority}
              className={`w-full p-3 rounded-md border ${
                formik.touched.priority && formik.errors.priority
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-50 focus:ring-[#a6b7ef]"
              } outline-none`}
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {formik.errors.priority && formik.touched.priority && (
              <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
                {formik.errors.priority}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-2 text-customBlue900 font-montserrat text-lg font-bold">
            Assign User
          </label>
          <select
            disabled={!isTaskCreator}
            name="assignedTo"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.assignedTo}
            className={`w-full p-3 rounded-md border 
              ${
                formik.touched.assignedTo && formik.errors.assignedTo
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-2 focus:ring-[#a6b7ef] outline-[#7b92dd]`}
          >
            <option value="">Select User</option>
            {allUsersFromRedux?.map((element) => (
              <option key={element._id} value={element._id}>
                {user?._id == element._id ? "To me" : element.name}
              </option>
            ))}
          </select>
          {formik.errors.assignedTo && formik.touched.assignedTo && (
            <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
              {formik.errors.assignedTo}
            </p>
          )}
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
            disabled={loading}
            className="w-5/12 bg-customBlue900 text-white font-montserrat text-base font-bold py-2 rounded-xl hover:bg-[#0b1366] transition-all"
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin mx-2 white-icon"></i>
              </>
            ) : (
              <span>Update Task</span>
            )}
          </button>
        </div>
      </form>
      {/* Add the ConfirmModal */}
      <ConfirmModal
        message="Are you sure you want to cancel the task Edit?"
        onConfirm={confirmCancel}
        onCancel={closeModal}
        isOpen={isModalOpen}
      />
    </>
  );
};

export default EditTaskForm;
