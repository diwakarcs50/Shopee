import {createRoot} from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import { store } from './store/slices/scripts'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'



const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/whishlisht',
                element:<div>Hello</div>
            }
        ]

        
    }
])
createRoot(document.querySelector('#root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)