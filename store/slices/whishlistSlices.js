
export const WHISHLIST_ADD_ITEM ='whislist/additem'


export const addWhishlist=(id)=>{
    return{
        type:WHISHLIST_ADD_ITEM,
        payload:{id :id }
    }

}
export default function whisListReducer(state=[],action){
    switch(action.type){
        case WHISHLIST_ADD_ITEM:
            return [...state,action.payload]

        default:
            return state    
    }


}