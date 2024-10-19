import { useFormik } from "formik";
import * as Yup from "yup";
import notify from "../hooks/useNotification";
import { useDispatch, useSelector } from "react-redux";
import SettNav from "../components/layout/SettNav";
import { updateLoggedUserPassword } from "../store/reducers/userSlice";
import ConfirmModal from "../components/Confirm/ConfirmModal";
import { useState } from "react";

export default function PasswordSettings() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const handleChanges = async (values, { setSubmitting }) => {
    try {
      const result = await dispatch(
        updateLoggedUserPassword({
          password: values.password,
          confirmPassword: values.confirmPassword,
        })
      );

      if (result) {
        notify("Password is Updated Successfuly!", "success");
      } else {
        notify("Failed Update. Please Login", "error");
      }
    } catch (error) {
      notify(error.message, "error");
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleChanges,
  });

  const handleCancel = () => {
    setIsModalOpen(true); // Open the confirmation modal
  };
  const confirmCancel = () => {
    setIsModalOpen(false);

    notify("Change Password is cancelled", "success");
  };
  // Cancel the cancel action
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1 overflow-y-auto p-2 2xl:px-10  ">
      {/* <header className="text-2xl font-bold text-customBlue900 dark:text-white ml-10 mt-5"> */}
      <header className="text-2xl font-bold text-customBlue900 dark:text-white">
        Settings
      </header>
      <SettNav />
      <main>
        <div>
          {/* <div className="ml-4 md:ml-10 "> */}

          <h3 className="text-customBlue900 text-2xl font-bold my-4 sm:my-5 dark:text-customBlue100">
            Do You Want To Change Your Password?
          </h3>
          <form
            className="w-full sm:w-3/4 md:w-1/2 lg:w-[50%]"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2  font-medium text-customBlue900 dark:text-customBlue100"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                className={`shadow-sm bg-gray-50 border
      border-gray-300
       border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password && (
                <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 font-medium text-customBlue900 dark:text-customBlue100"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className={`shadow-sm bg-gray-50 border *:${
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300"
                } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray`}
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
            <div className="flex justify-end mt-5">
              <button
                type="button"
                onClick={handleCancel}
                className="text-customBlue900 bg-customGray focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-300 dark:focus:ring-blue-800 mr-2 dark:text-white hover:bg-gray-500 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="text-white bg-customBlue900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2.5 text-center dark:bg-customBlue600 dark:hover:bg-customBlue300 dark:focus:ring-blue-800 hover:bg-customBlue300"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mx-2 white-icon"></i>
                  </>
                ) : (
                  <span>Update Changes</span>
                )}
              </button>
            </div>
          </form>
          {/* Add the ConfirmModal */}
          <ConfirmModal
            message="Are you sure you want to cancel Change Your Password?"
            onConfirm={confirmCancel}
            onCancel={closeModal}
            isOpen={isModalOpen}
          />
        </div>
      </main>
    </div>
  );
}
