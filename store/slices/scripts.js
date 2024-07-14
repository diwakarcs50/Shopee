import {createStore,combineReducers} from 'redux'
import { productlist } from './productslist'

import productReducer from './productsSlices'
import  {cartReducer, cartAddItem, cartRemoveItem, decreaseItem, increaseItem,slice } from './cartSlices'
import whisListReducer, { addWhishlist } from './whishlistSlices'
import { produce } from 'immer'
import { configureStore } from '@reduxjs/toolkit'
import { logger } from '../../middlewares/logger'
import { apimiddleware } from '../../middlewares/api'


// const CART_ADD_ITEM ='cart/additem'
// const CART_REMOVE_ITEM ='cart/removeitem'
// const WHISHLIST_ADD_ITEM ='whislist/additem'
// const INCREASE_PRODUCT_QUANTITY ='product/increaseItem'
// const DECREASE_PRODUCT_QUANTITY ='product/decreaseItem'



// const initialState={
//     products:productlist,
//     cartItems:[],
//     whisList:[]

// }

const reducer=combineReducers({
    products:productReducer,
    cartItems:cartReducer,
    whisList:whisListReducer
})



// function reducer(state=initialState,action){
   
   
//     switch(action.type){
//     case CART_ADD_ITEM:
//         return {...state, cartItems:[...state.cartItems,action.payload]}

//     case WHISHLIST_ADD_ITEM:  
//         return {...state,whisList:[...state.whisList,action.payload]}

//     case CART_REMOVE_ITEM:
//        return{
//         ...state,
//         cartItems:state.cartItems.filter((item)=>{
//               return item.id !== action.payload.id
//         })
//        }   

//      case INCREASE_PRODUCT_QUANTITY:
//         return {
//             ...state,
//             cartItems:state.cartItems.map((item)=>{
//                 if(item.id === action.payload.id){
//                      return {...item,quantity:item.quantity+1}
//                 }
//                 return item
//             })
//         }  


//      case DECREASE_PRODUCT_QUANTITY:
//         return{

//             ...state,
//             cartItems:state.cartItems.map((item)=>{
//                 if(item.id === action.payload.id){
//                     return {...item,quantity:item.quantity-1}
//                 }
//                 return item

//             })

//         }   
//    }


//    return state

// }

// export const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__())
// function logger(stores){
//     return function(next){
//         return function(action){
//             console.log(stores)

//         }
//     }
// }



export const store=configureStore({
    reducer,
    middleware:() => [apimiddleware],
})






// console.log(store.getState())
// console.log(productlist)


// store.dispatch(addWhishlist(1))
// store.dispatch(addWhishlist(12))
// store.dispatch(cartAddItem({id:3,quantity:4}))
// store.dispatch(cartAddItem({id:1,quantity:1}))
// store.dispatch(cartAddItem({id:12,quantity:1}))
// store.dispatch(cartRemoveItem(1))
// store.dispatch(increaseItem({id:1}))
// store.dispatch(decreaseItem({id:12}))


// store.dispatch({type:WHISHLIST_ADD_ITEM,payload:{id:1}})

// store.dispatch({type:WHISHLIST_ADD_ITEM,payload:{id:12}})

// console.dir(store)

/*trying Immer*/
// const users=[
//     {
//         id:1,
//         name:'pk',

//     }
//     ,
//     {
//         id:2,
//         name:'rk',
        
//     }
//     ,
//     {
//         id:3,
//         name:'mk',
        
//     }
// ]

// const newUsers=produce(users,(usersCopy)=>{
//     console.log(usersCopy)
//     usersCopy[1].id=70
// })


// console.log(users)
// console.log(newUsers)
// console.log(users === newUsers)
/*trying Immer*/


console.log(slice)
console.log(slice.actions)