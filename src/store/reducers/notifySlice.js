import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/baseUrl";

const initialState = {
  items: [],
  loading: false,
  error: null,
  unseenCount: 0,
};

// Mark a specific notification as read
export const markNotificationAsRead = createAsyncThunk(
  "notifications/markNotificationAsRead",
  async (notificationId, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const config = { headers: { token: `Bearer ${token}` } };
      const response = await api.put(
        `/notifications/${notificationId}`,
        {},
        config
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Fetch notifications for a user
export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const config = { headers: { token: `Bearer ${token}` } };
      const response = await api.get(`/notifications`, config);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNewNotification: (state, action) => {
      const newNotification = {
        ...action.payload,
        createdAt: new Date().toISOString(),
      };
      state.items.unshift(newNotification); // Add the new notification at the start of the array
      state.unseenCount += 1; // Increment unseen count

      // Sort the notifications: unread first, then by date
      state.items.sort((a, b) => {
        if (a.isRead === b.isRead) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return a.isRead ? 1 : -1; // Unread first
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.notifications;
        state.unseenCount = action.payload.notifications.filter(
          (n) => !n.isRead
        ).length;

        // Sort the notifications: unread first, then by date
        state.items.sort((a, b) => {
          if (a.isRead === b.isRead) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          }
          return a.isRead ? 1 : -1; // Unread first
        });
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Handle marking a notification as read
      .addCase(markNotificationAsRead.pending, (state) => {
        state.loading = true;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        const updatedNotification = action.payload.notification;
        const notificationIndex = state.items.findIndex(
          (n) => n._id === updatedNotification._id
        );

        // If notification is found, mark as read
        if (notificationIndex !== -1) {
          const notification = state.items[notificationIndex];

          // Check if it was unread and update accordingly
          if (!notification.isRead) {
            notification.isRead = true;
            state.unseenCount -= 1;
          }
        }
        state.loading = false; // Stop loading after successful read operation
      })

      .addCase(markNotificationAsRead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the addNewNotification action
export const { addNewNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
