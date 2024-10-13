import Dash from "./pages/Dashboard";
import Layout from "./layout/Layout";
import { Route, HashRouter, Routes } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Settings from "./pages/Settings";
import Landing from "./pages/Landing";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route index element={<Landing />}></Route>

          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dash />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;

// https://task-management-depi.vercel.app/api
