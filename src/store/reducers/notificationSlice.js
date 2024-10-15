import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    notifications:[],
    loading: false,
    error: null,
};

export const fetchNotification = createAsyncThunk(
    'notifications/fetchNotification', async (_, { getState, rejectWithValue }) => {
      try {
        const token = getState().auth.token;
        const config = { headers: { token: `Bearer ${token}` }, };
        const response = await api.get('/notifications', config);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


const notificationsSlice = createSlice({
    name:'notifications',
    initialState,
    reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchNotification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload.notifications;
      })
      .addCase(fetchNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    }

})

export default notificationsSlice.reducer;