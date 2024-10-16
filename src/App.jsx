import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskForm from './components/TaskForm';
import Sidebar from './components/Sidebar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks';
import EditTaskModal from './components/EditTaskModal';
import Categories from './pages/Categories';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import "react-toastify/dist/ReactToastify.css";
import { initialAuth } from './redux/reducers/authSlice';
 
store.dispatch(initialAuth());
const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6 bg-white">
            <Routes>
              <Route path="/create-task" element={<TaskForm />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/edit-task/:id" element={<EditTaskModal />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
        
      </HashRouter>
      <ToastContainer />
    </Provider>
  );
};

export default App;
