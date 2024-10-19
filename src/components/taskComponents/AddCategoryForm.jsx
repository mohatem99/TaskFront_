import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addCategory } from "../../store/reducers/categoriesSlice";
import notify from "../../hooks/useNotification";
 
export default function AddCategoryForm({ onClose }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
 
  const formik = useFormik({
    initialValues: {
      categoryName: "",
    },
    validationSchema: Yup.object({
      categoryName: Yup.string()
        .trim()
        .required("Category name is required")
        .min(2, "Category name must be at least 2 characters long")
        .max(30, "Too Long!"),
    }),
    onSubmit: (values, { resetForm }) => {
      // Check for duplicate category name
      const isDuplicate = categories.some(
        (category) => category.name.toLowerCase() === values.categoryName.toLowerCase()
      );
 
      if (isDuplicate) {
        notify("This category already exists!", "error");
        return; // Prevent form submission if duplicate found
      }
 
      dispatch(addCategory({ name: values.categoryName }));
      resetForm();
      onClose();
      notify("Category Added Successfully", "success");
    },
  });
 
  const handleCancel = () => {
    onClose();
  };
 
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-customBlue900 font-montserrat text-[20px] font-bold mb-4">
          Add New Category
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-customBlue900 mb-2 font-montserrat text-[18px] font-normal">
              Category Name
            </label>
            <input
              type="text"
              name="categoryName"
              value={formik.values.categoryName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-2 border rounded-lg ${
                formik.touched.categoryName && formik.errors.categoryName
                  ? "border-red-500"
                  : "border-neutral-300"
              } `}
              placeholder="Enter category name"
            />
            {formik.errors.categoryName && formik.touched.categoryName && (
              <p className="bg-teal-500 text-white p-2 my-1 text-sm rounded-lg border-red-500">
                {formik.errors.categoryName}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-400 hover:bg-gray-700 font-montserrat text-white px-4 py-2 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-customBlue900 hover:bg-[#000541] font-montserrat text-white px-4 py-2 rounded-lg"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
 