import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import categoriesReducer from './reducers/categoriesSlice';
import authReducer from './reducers/authSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
    auth: authReducer,
  }
});
