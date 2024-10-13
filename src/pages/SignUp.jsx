import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/reducers/authSlice";
import notify from "../hooks/useNotification";
import LeftBanner from "../components/LeftBanner"
import { Link } from "react-router-dom";
import avatar from "../assets/Avatar.png"

export default function SignUp() {
  const [selectedImage,setSelectedImage] = useState(null)
  const dispatch = useDispatch();

  // Validation schema with Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
    .min(2, 'First Name must be at least 2 characters')
    .max(50, 'Too Long!')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Last Name must be at least 2 characters')
    .max(50, 'Too Long!')
    .required('Last Name is required'),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
      password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
      image: Yup.mixed()
      .nullable()
      .test(
        "fileSize",
        "Image size is too large. Max size is 2MB.",
        (value) => !value || (value && value.size <= 2000000)
      ),
    });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  };

  // function dataURLtoFile(dataurl, filename) {
  //   var arr = dataurl.split(','),
  //     mime = arr[0].match(/:(.*?);/)[1],
  //     bstr = atob(arr[1]),
  //     n = bstr.length,
  //     u8arr = new Uint8Array(n);
  
  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }
  
  //   return new File([u8arr], filename, {
  //     type: mime
  //   });
  // }

  const handleRegister = async (values, { setSubmitting }) => {
    // const imageFile = dataURLtoFile(values.image)
    // console.log(imageFile)

    try {
      const formData = new FormData();
      // formData.append("firstName", values.firstName);
      formData.append("name", `${values.firstName} ${values.lastName}`);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("confirmPassword", values.confirmPassword);

      if (values.image) {
        formData.append("image", values.image);
      }

      console.log(values)
      const result = await dispatch(registerUser(formData)).unwrap();
      console.log(result)


      if (result) {
        notify("You created an account successfully", "success");
      } else {
        notify("Register failed. Please check your credentials.", "error");
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
    onSubmit: handleRegister,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  const handleImageUpload = (e) => {
    const file = e.currentTarget.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      formik.setFieldValue("image", file);
      // document.getElementById('image').value = '';
    } else {
      formik.setFieldValue("image", null);
    }
  };
  const triggerFileInput = () => {
    document.getElementById('image').click();
  };

  return (
    <div className="h-screen">
      <div className="h-screen grid  grid-cols-1 md:grid-cols-3  gap-9">
        <div className=" md:col-span-1 w-full bg-white">
          <div className=" hidden md:block w-3/4 h-screen bg-customBlue900 text-white z-10">
            <LeftBanner />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:col-span-2 ">
          
          <div className="flex items-center justify-center h-screen w-full md:w-3/4">
            <div className="w-[80%]">
              <h1 className="text-customBlue900 font-bold mb-7 text-2xl text-center mt-10">
                Sign Up
              </h1>
              <form className="w-full" onSubmit={formik.handleSubmit}>
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
              {selectedImage ? (
                <img src={selectedImage} alt="Uploaded" className="h-full w-full object-cover rounded-lg" />
              ) : (
                <div className="">
                <img src={avatar} alt="upload-icon" className=" mb-3"/>
                </div>
                )}
            </div>
                  {formik.errors.image && formik.touched.image ? (
                    <div className="text-red-500 text-sm">
                      {formik.errors.image}
                    </div>
                  ) : null}
                          <button 
          type="button" 
          className="text-white mt-5 bg-customBlue900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-xs px-4 py-2.5 dark:bg-customBlue600 dark:hover:bg-customBlue300 hover:bg-customBlue300"
          onClick={triggerFileInput}
        >
          Upload Photo
        </button>
          </div>


              <div className='grid grid-cols-2 gap-x-3'>
                <div className="mb-5">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className={`bg-gray-50 border ${
                      formik.errors.firstName && formik.touched.firstName
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-customBlue700 block w-full p-2.5`}
                    required
                  />
                  {formik.errors.firstName && formik.touched.firstName && (
                    <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                  )}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className={`bg-gray-50 border ${
                      formik.errors.lastName && formik.touched.lastName
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-customBlue700 block w-full p-2.5`}
                    required
                  />
                  {formik.errors.lastName && formik.touched.lastName && (
                    <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                  )}
                </div>
                </div>
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`bg-gray-50 border ${
                      formik.errors.email && formik.touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-customBlue700 block w-full p-2.5`}
                    required
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                  )}
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={`bg-gray-50 border ${
                      formik.errors.password && formik.touched.password
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-customBlue700 block w-full p-2.5`}
                    required
                  />
                  {formik.errors.password && formik.touched.password && (
                    <div className="text-red-500 text-sm">{formik.errors.password}</div>
                  )}
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-500"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    onChange={(e) => {
                      formik.handleChange(e);
                      if (formik.errors.confirmPassword) {
                        formik.setFieldTouched('confirmPassword', false);
                      }
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className={`bg-gray-50 border ${
                      formik.errors.confirmPassword && formik.touched.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-customBlue700 block w-full p-2.5`}
                    required
                  />
                  {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
                  )}
                </div>
                  
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className={`text-white bg-customBlue900 hover:bg-customBlue600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 w-full ${
                    formik.isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Create Account
                </button>
              </form>
              <div className="flex justify-center items-center">
              <p className='text-gray-500 mt-10'>Already Have an account? <Link to={"/login"} className='text-customBlue900 font-bold'>Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
