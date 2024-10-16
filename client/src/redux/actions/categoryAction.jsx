import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../utils/toast";

export const viewCategories = createAsyncThunk(
  "/category/viewCategories",
  async (_,{rejectWithValue }) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/category/view`);
      // notify(response?.data?.message, 'success')
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
      notify(error.response?.data?.message || 'Unable to fetch categories');
      return rejectWithValue(
        error.response.data.message || "Unable to fetch categories"
      );
    }
  }
);

export const addCategory = createAsyncThunk(
    '/category/addCategory', async (categoryData, {rejectWithValue}) =>{
        try{
            const response = await axios.post( `${import.meta.env.VITE_BASE_URL}/api/category/add`, categoryData, {withCredentials: true});
            notify(response?.data?.message, 'success')
            return response.data;
        }
        catch(error){
            console.log(error);
            notify(error.response?.data?.message || 'Adding category failed');
            return rejectWithValue(
                error.response.data.message || "Adding category failed"
            )
        }
    }
)

export const deleteCategory = createAsyncThunk('/category/deletecategory', async (categoryData, {rejectWithValue})=>{
    try{
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/category/delete`)
        notify(response?.data?.message, 'success')
        return response.data;
    }
    catch(error){
        console.log(error);
        notify(error.response?.data?.message || 'Category deletion failed');
        return rejectWithValue(
            error.response.data.message || "Category deletion failed"
        )
    }
})
