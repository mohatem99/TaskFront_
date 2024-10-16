import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasksSlice';
import categoriesReducer from './reducers/categoriesSlice';
import authReducer from './reducers/authSlice';
import userReducer from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
    auth: authReducer,
    users: userReducer
  }
});
