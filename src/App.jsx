import Login from "./components/Auth/Login";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SideBarComponent } from "./components/layout/SidbarComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import AuthGuard from "./guard/AuthGuard";
import ForgetPass from "./components/Auth/ForgetPass";
import CheckEmail from "./components/Auth/CheckEmail";
import NewPass from "./components/Auth/NewPass";
import SignUp from "./components/Auth/SignUp";
import Auth from "./components/layout/Auth";

let router = createBrowserRouter([
  // {
  //   path: "/home",
  //   element: (
  //     <AuthGuard>
  //       <Landing />
  //     </AuthGuard>
  //   ),
  // },
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
