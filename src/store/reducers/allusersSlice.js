import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/baseUrl';

const initialState = {
    users: [],
    loading: false,
    error: null,
  };

  export const allUsers = createAsyncThunk(
    'users/allUsers', async (_, {  rejectWithValue }) => {
      try {
        const response = await api.get('/users');
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


  const allUsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(allUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(allUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(allUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    
    }
  });
  export default allUsersSlice.reducer;
  