import React from 'react'
import {useSelector} from 'react-redux'
import '../App.css'
import Products from '../Components/Products'

function Home() {
    const productsList=useSelector((state)=>state.products.list)
    const isLoading=useSelector((state)=>state.products.loading)
    const error=useSelector((state)=>state.products.error)
    console.log(productsList)
    return isLoading ? (
        
        <h1 style={{textAlign:'center'}}>Loading...</h1>
    ):(
        error ||
            <div className='products-container'>
        {
            productsList.map(({id,title,rating,price,image})=>{
               
               return <Products 
               productId={id}
               title={title} 
                key={id}
                rating={rating.rate}
                price={price}
                imageUrl={image}/>

                
            })
        }
              </div>
        )
        
        
    
}

export default Home
