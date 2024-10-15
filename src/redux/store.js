import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authSlice';
import userReducer from './reducers/userSlice'
import categoriesReducer from './reducers/categoriesSlice';
import notificationsReducer from './reducers/notificationSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    categories: categoriesReducer,
    notifications: notificationsReducer,
  }
});