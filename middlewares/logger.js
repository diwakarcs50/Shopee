export const logger=(stroe)=>(next)=>(action)=>{
    console.log(stroe)
    next(action)
  
}