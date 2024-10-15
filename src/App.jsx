
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SideBarComponent } from "./components/layout/SidbarComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import SettLayout from "./components/layout/SettLayout";

import Landing from "./pages/Landing";
import Auth from "./components/layout/Auth";
import AuthGuard from "./guard/AuthGuard";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp"

import ForgetPass from "./components/Auth/ForgetPass";
import CheckEmail from "./components/Auth/CheckEmail";
import NewPass from "./components/Auth/NewPass";

import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import TaskForm from "./components/taskComponents/TaskForm";
import Tasks from "./pages/Tasks"

import ProfileSettings from "./pages/ProfileSettings";
import PasswordSettings from "./pages/PasswordSettings";
import AppearanceSettings from "./pages/AppearanceSettings";


let router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        index: true,
        element: (
          <AuthGuard>
            <Landing />
          </AuthGuard>
        ),
      },

      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "forget-pass", element: <ForgetPass /> },
      { path: "check-email", element: <CheckEmail /> },
      { path: "new-pass", element: <NewPass /> },
    ],
  },



  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },

  {
    path: "/analytics",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Analytics />,
      },
    ],
  },

  {
    path: "/create-task",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TaskForm />,
      },
    ],
  },

  {
    path: "/profilesetting",
    element: <SettLayout />,
    children: [
      {
        index: true,
        element: <ProfileSettings />,
      },
    ],
  },

  {
    path: "/passwordsetting",
    element: <SettLayout />,
    children: [
      {
        index: true,
        element: <PasswordSettings />,
      },
    ],
  },

  {
    path: "/appearancesetting",
    element: <SettLayout />,
    children: [
      {
        index: true,
        element: <AppearanceSettings />,
      },
    ],
  },

  {
    path: "/tasks",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer />
    </>
  );
}

export default App;
