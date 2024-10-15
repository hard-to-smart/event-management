import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const viewCategories = createAsyncThunk(
  "/category/viewcategories",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get("/api/category/view");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response.data.message || "Unable to fetch categories"
      );
    }
  }
);

export const addCategory = createAsyncThunk(
    '/category/addcategory', async (categoryData, {rejectWithValue}) =>{
        try{
            const response = await axios.post('/api/category/add');
            return response.data;
        }
        catch(error){
            console.log(error);
            return rejectWithValue(
                error.response.data.message || "Adding category failed"
            )
        }
    }
)

export const deleteCategory = createAsyncThunk('/category/deletecategory', async (categoryData, {rejectWithValue})=>{
    try{
        const response = await axios.delete('/api/category/delete')
        return response.data;
    }
    catch(error){
        console.log(error);
        return rejectWithValue(
            error.response.data.message || "Category deletion failed"
        )
    }
})
