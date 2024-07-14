import { createSelector, createSlice } from "@reduxjs/toolkit"
import { produce } from "immer"

// export const CART_ADD_ITEM ='cart/cartAddItem'
// export const CART_REMOVE_ITEM ='cart/cartRemoveItem'
// export const INCREASE_PRODUCT_QUANTITY ='cart/increaseItem'
// export const DECREASE_PRODUCT_QUANTITY ='cart/decreaseItem'


// export function cartAddItem(productData){

//     return{
//         type:CART_ADD_ITEM,
//         // payload:{productData,quantity:1}
//         payload:productData
//     }
// }

// export function cartRemoveItem(productId){
//     return {
//         type:CART_REMOVE_ITEM,
//         payload:{productId:productId}
//     }
// }


// export function increaseItem(productId){
//     return{
//         type:INCREASE_PRODUCT_QUANTITY,
//         payload:{productId}

//     }
// }

// export function decreaseItem(productId){
//     return{
//         type:DECREASE_PRODUCT_QUANTITY,
//         payload:{productId}
//     }

// }




// export default function cartReducer(state=[],action){
//     return produce(state,(copyState)=>{
//         const existingItemIndex=copyState.findIndex(
//             (item)=>item.productId === action.payload.productId
//         )
        
//         switch(action.type){
//             case CART_ADD_ITEM:
                
//                 console.log(existingItemIndex)
//                 if(existingItemIndex !== -1){
//                     copyState[existingItemIndex].quantity+=1
//                     break
//                 }
//                 copyState.push({...action.payload,quantity:1})
//                 break
    
//             case CART_REMOVE_ITEM:
//                 copyState.splice(existingItemIndex,1)
//                 break
    
    
//             case INCREASE_PRODUCT_QUANTITY:
//                 copyState[existingItemIndex].quantity+=1
//                 break;
                
                
//             case DECREASE_PRODUCT_QUANTITY:
//                copyState[existingItemIndex].quantity-=1
//                if(copyState[existingItemIndex].quantity === 0){
//                   copyState.splice(existingItemIndex,1)
//                }             
    
//          }

//         return copyState

//     })
     
// }


export const getAllCartItems=({products,cartItems})=>{
    return cartItems.list.map(({productId,quantity})=>{
    const cartProduct =  products.list.find((product)=>product.id === productId)
    return {...cartProduct,quantity}
    }).filter(({title})=>title)
}

export const getMemoCartItems = createSelector(getAllCartItems,(state)=>state)

const findExistingIndex=(state,action)=>{
    const existingItemIndex=state.findIndex(
       (item)=>item.productId === action.payload.productId
   )
   return existingItemIndex
}

export const slice=createSlice({
    name:'cart', 
    initialState:{
        loading : false,
        list:[],
        error:''
    },
    reducers:{
        handleCartError(state,action){
             state.loading=false
             state.error=action.payload || 'error in cart'
        },
        fetchCartItems(state){
            state.loading=true
        },
        loadCartItems(state,action){
            state.loading=false
            state.list= action.payload.products

        },
        cartAddItem(state,action){
            const existingItemIndex=findExistingIndex(state.list,action)
            if(existingItemIndex !== -1){
                state.list[existingItemIndex].quantity+=1
                
            }
            else{
                state.list.push({...action.payload,quantity:1})
            }
        },
        cartRemoveItem(state,action){
            const existingItemIndex=findExistingIndex(state.list,action)
            state.list.splice(existingItemIndex,1)

        },

        increaseItem(state,action){
            const existingItemIndex=findExistingIndex(state.list,action)
            state.list[existingItemIndex].quantity+=1
        },

        decreaseItem(state,action){
            const existingItemIndex=findExistingIndex(state.list,action)
            state.list[existingItemIndex].quantity-=1
               if(state.list[existingItemIndex].quantity === 0){
                  state.list.splice(existingItemIndex,1)
               }  

        }

    }

})

export const cartReducer=slice.reducer

export const {
    handleCartError,
    fetchCartItems,
    cartAddItem,
    cartRemoveItem,
    increaseItem,
    decreaseItem,
    loadCartItems

}=slice.actions

console.dir(cartAddItem)


//this is code without IMMER
// switch(action.type){
//     case CART_ADD_ITEM:
//         const existingItem=state.find(
//             (item)=>item.productId === action.payload.productId
//         )
//         console.log(existingItem)
//         if(existingItem){
//             return state.map((item)=>{
//                 if(item.productId === existingItem.productId){
//                     return {...item,quantity:item.quantity+1}
//                 }
//                 return item
//             })
//         }
//         return [...state,{...action.payload,quantity:1}]

//     case CART_REMOVE_ITEM:
//         return state.filter((item)=>{
//                   return item.productId !== action.payload.productId
//             })


//     case INCREASE_PRODUCT_QUANTITY:
//         return  state.map((item)=>{
//                 if(item.productId === action.payload.productId){
//                         return {...item,quantity:item.quantity+1}
//                 }
//                 return item
//             })
        
        
//     case DECREASE_PRODUCT_QUANTITY:
//         return state.map((item)=>{
//                 if(item.productId === action.payload.productId){

//                     return {...item,quantity:item.quantity-1>0?item.quantity-1:0}
//                 }
//                 return item

//             })

//     default:
//         return state             

//  }