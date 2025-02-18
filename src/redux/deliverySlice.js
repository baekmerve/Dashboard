import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  deliveryList: [],
  loading: false,
  error: null,
};

//function for all DeliveryList
export const fetchDeliveryList = createAsyncThunk(
  "delivery/fetchDeliveryList", // Action type
  async () => {
    const response = await axios.get("http://localhost:5001/shippedProducts");

    //return response.data.users; // Return the data
    const { data } = response;

    return data;
  }
);

export const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeliveryList.pending, (state) => {
        state.loading = true; // Set loading to true when the request is pending
      })
      .addCase(fetchDeliveryList.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the request is fulfilled
        state.deliveryList = action.payload; // Save the fetched data to state
      })
      .addCase(fetchDeliveryList.rejected, (state, action) => {
        state.loading = false; // Set loading to false when the request is rejected
        state.error = action.error.message; // Store the error message
      });
  },
});

export const {} = deliverySlice.actions;

export default deliverySlice.reducer;
