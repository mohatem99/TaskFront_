import { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SettNav from "../components/layout/SettNav";
import { profileData, updateLoggedUser } from "../store/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import notify from "../hooks/useNotification";
import ConfirmModal from "../components/Confirm/ConfirmModal";

export default function ProfileSettings() {
  const profile = useSelector((state) => state.users.user);
  const { loading } = useSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  // const fileInputRef = useRef(null);
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Full Name must be at least 3 characters long")
      .max(100, "Too Long to be Name !"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    image: Yup.mixed()
      .nullable()
      .test(
        "fileSize",
        "Image size is too large. Max size is 2MB.",
        (value) => !value || (value && value.size <= 2000000)
      ),
  });

  const initialValues = {
    name: profile?.name || "",
    email: profile?.email || "",
    // image: profile?.image?.secure_url || null,
  };
  const handleChanges = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);

      if (values.image) {
        formData.append("image", values.image);
      }
      const result = await dispatch(updateLoggedUser(formData)).unwrap();
      if (result) {
        notify("Profile Updated Successfuly!", "success");
      } else {
        notify("Failed Update!. Please Login", "error");
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
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  useEffect(() => {
    dispatch(profileData());
  }, [dispatch]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      formik.setFieldValue("image", file);
      formik.setFieldValue("imagePreview", imageUrl);

    }
  };

  const triggerFileInput = () => {
    document.getElementById("image").click();
  };

  const handleCancel = () => {
    setIsModalOpen(true); // Open the confirmation modal
  };
  const confirmCancel = () => {
    setIsModalOpen(false);

    notify("Profile Update is cancelled", "success");
  };
  // Cancel the cancel action
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1 overflow-y-auto p-2 2xl:px-10  ">
      <header className="text-2xl font-bold text-customBlue900 dark:text-white">
        Settings
      </header>
      <SettNav />
      <main>
        <div>
          <h3 className="text-customBlue900 font-bold mt-5 text-2xl dark:text-customBlue100">
            Profile Information
          </h3>

          <div>
            <form className="w-full" onSubmit={formik.handleSubmit}>
              <div className="flex md:flex-row items-center md:space-x-3 ml-0 md:ml-14 my-5">
                <div className=" flex justify-start items-center gap-x-5 mb-5">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  <div
                    onClick={triggerFileInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block flex items-center justify-center cursor-pointer  w-20 h-20 rounded-full"
                  >
                    {formik.values.imagePreview ? (
                      <img
                        src={formik.values.imagePreview}
                        alt="Uploaded"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    ) : (
                      <img
                        src={profile?.image?.secure_url}
                        alt="Uploaded"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={triggerFileInput}
                    className="text-white mt-5 bg-customBlue900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2.5 dark:bg-customBlue600 dark:hover:bg-customBlue300 hover:bg-customBlue300"
                  >
                    Upload Photo
                  </button>
                </div>
              </div>
              <div className="w-full mx-auto flex flex-col gap-x-10 mt-7">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-customBlue900 dark:text-customBlue100"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    // {...formik.getFieldProps("name")}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
                      {formik.errors.name}
                    </p>
                  )}
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-customBlue100 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:focus:bg-customGray"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-span-2 flex justify-end mt-5">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-customBlue900 bg-customGray focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-300 dark:focus:ring-blue-800 mr-2 dark:text-white hover:bg-gray-500 hover:text-white"
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
              message="Are you sure you want to cancel Updating profile?"
              onConfirm={confirmCancel}
              onCancel={closeModal}
              isOpen={isModalOpen}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
