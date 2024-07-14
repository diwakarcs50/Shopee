import React from 'react'
import { productlist } from './store/slices/productslist'
import Products from './Components/Products'
import { store } from './store/slices/scripts'
import {useSelector} from 'react-redux'
import './App.css'
import Header from './Components/Header'
import{Outlet} from 'react-router-dom'

function App() {
    // const prod=store.getState().products
    
    return (
        <>
         <Header/>
         <Outlet/> 
        </>
       
    )
}

export default App
