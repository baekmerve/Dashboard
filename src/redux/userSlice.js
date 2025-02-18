import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userList: [],
  user: "",
  loading: false,
  error: null,
};

//function for all users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers", // Action type
  async () => {
    const response = await axios.get("https://dummyjson.com/users?limit=0");

    //return response.data.users; // Return the data
    const { data } = response;
    console.log("🚀 fetchUsers- async - data:", data);

    return data.users;
  }
);

//function for single user
export const fetchSingleUser = createAsyncThunk(
  "users/fetchSingleUser", // Action type

  async (userId) => {
    const response = await axios.get(`https://dummyjson.com/users/${userId}`);
    const { data } = response;
    console.log("🚀 fetchSingleUser- data:", data);

    return data;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true; // Set loading to true when the request is pending
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the request is fulfilled
        state.userList = action.payload; // Save the fetched data to state
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false; // Set loading to false when the request is rejected
        state.error = action.error.message; // Store the error message
      })
      .addCase(fetchSingleUser.pending, (state) => {
        state.loading = true; // Set loading to true when the request is pending
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the request is fulfilled
        state.user = action.payload; // Save the fetched data to state
      })
      .addCase(fetchSingleUser.rejected, (state, action) => {
        state.loading = false; // Set loading to false when the request is rejected
        state.error = action.error.message; // Store the error message
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
