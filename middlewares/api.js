import { addProducts, fetchProductsError } from "../store/slices/productsSlices"

export const apimiddleware=({dispatch})=>(next)=>(action)=>{
    const BASE_URL='https://fakestoreapi.com'
    if(action.type === 'api/makeCall'){
        next(action)
        const {url,onError,onStart,onSuccess} =action.payload
        dispatch({
            type:onStart
        })
        fetch(`${BASE_URL}/${url}`)
        .then((res)=>res.json())
        .then((data)=>dispatch({
            type:onSuccess,
            payload:data
        }))
        .catch(()=>{
              dispatch({
                type:onError
              })
        })

         console.log(url)
    }
    else{
        next(action)
    }
    
}

export const fetchData=(payload)=> ({type :'api/makeCall',payload})