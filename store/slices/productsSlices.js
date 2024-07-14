import { createSlice } from "@reduxjs/toolkit";
import { productlist } from "./productslist";

// export default function productReducer(state=productlist,action){

//     return state

// }

const slice=createSlice({
    name:'product',
    initialState:{
        list:[],
        loading:false,
        error:''
    },
    reducers:{
        addProducts(state,action){
             state.loading=false
             state.list= action.payload
             state.error=''
        },

        setLoading(state){
            state.loading=true
        },

        fetchProductsError(state,action){
            state.loading=false,
            state.error=action.payload || 'ERROR OCCURED'
        }

    }
})

export default slice.reducer

export const {addProducts,setLoading,fetchProductsError} = slice.actions