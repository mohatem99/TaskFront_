import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {store} from "../src/store/index.js";
import { Provider } from "react-redux";
import { initialAuth } from "./store/reducers/authSlice.js";

store.dispatch(initialAuth());
// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
