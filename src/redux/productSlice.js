import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {

  productList: [],
  product: "",
  loading: false,
  error: null,
};

//function for all products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", // Action type
  async () => {
    const response = await axios.get("https://dummyjson.com/products?limit=0");
    const { data } = response;
    console.log("🚀 fetchProducts- async - data:", data);

    return data.products;
  }
);

//function for single product
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct", // Action type

  async (productId) => {
    const response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    const { data } = response;
    console.log("🚀 fetchSingProduct- data:", data);

    return data;
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {  } = productSlice.actions;

export default productSlice.reducer;

