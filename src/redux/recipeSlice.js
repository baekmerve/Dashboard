import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {

  recipeList:[],
  recipe:"",
  loading: false,
  error: null,
};

//function for all recipes
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes", // Action type
  async () => {
    const response = await axios.get("https://dummyjson.com/recipes?limit=0");
    const { data } = response;
    console.log("🚀 fetchRecipes- async - data:", data);

    return data.recipes;
  }
);

//function for single recipe
export const fetchSingleRecipe = createAsyncThunk(
  "recipes/fetchSingleRecipe", // Action type

  async (recipeId) => {
    const response = await axios.get(
      `https://dummyjson.com/recipes/${recipeId}`
    );
    const { data } = response;
    console.log("🚀 fetchSingleRecipe- data:", data);

    return data;
  }
);
export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipeList = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSingleRecipe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action.payload;
      })
      .addCase(fetchSingleRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {  } = recipeSlice.actions;

export default recipeSlice.reducer;

