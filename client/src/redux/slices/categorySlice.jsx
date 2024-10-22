import { createSlice } from "@reduxjs/toolkit"
import { addCategory, deleteCategory, viewCategories } from "../actions/categoryAction"

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categoryList: [],
        isLoading: false,
        error: null,
    },
    reducer: {},
    extraReducers: (builder)=>{
        builder
            .addCase(viewCategories.pending, (state) =>{
                state.isLoading = true,
                state.error = null
            })
            .addCase(viewCategories.fulfilled, (state, action) =>{
                state.isLoading = false,
                state.categoryList = action.payload
            })
            .addCase(viewCategories.rejected, (state, action) =>{
                state.isLoading = false,
                state.error = action.payload
            })
            .addCase(addCategory.pending, (state) =>{
                state.isLoading = true,
                state.categoryList = 
                state.error = null
            })
            .addCase(addCategory.fulfilled, (state, action) =>{
                state.isLoading = false,
                console.log(action.payload, "in category slice")
                state.categoryList = [...state.categoryList, action.payload]
            })
            .addCase(deleteCategory.fulfilled, (state,action) => {
                state.isLoading = false,
                state.categoryList = state.categoryList.filter((category)=> {return category.id !== action.payload})
            })
    }
})

export const selectCategoryList = (state)=> {return state.category.categoryList}
export default categorySlice.reducer;
