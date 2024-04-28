import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from '../Components/Errorpage/Errorpage';
import Root from '../Components/Root/Root';
import Home from '../Page/Home';
import Allart from '../Page/Allart';
import Register from '../Components/Register';
import Login from '../Components/Login';
import Addcard from '../Page/Addcard';
import Paintdetails from '../Components/Paint_detais/Paintdetails';
import Myitems from '../Page/Myitems';
import Update from '../Components/Update';


const router = createBrowserRouter([
    {
      element:<Root></Root>,
      path:'/',
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/new',
            element:<Allart></Allart>,
            loader:()=> fetch('http://localhost:3000/paints')

        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/addcraft',
            element:<Addcard></Addcard>
        },
        {
            path:'/Paintdetails/:id',
            element:<Paintdetails></Paintdetails>
        },
        {
            path:'/myitems',
            element:<Myitems></Myitems>
        },
        {
            path:'/update/:id',
            element:<Update></Update>,
            loader: ({params})=>fetch(`http://localhost:3000/paint/${params.id}`)
        }
    ]
    }])
export default router