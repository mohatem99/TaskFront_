import Login from "./pages/Login";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Login />
      {/* <Home /> */}

      <ToastContainer />
    </>
  );
}

export default App;
