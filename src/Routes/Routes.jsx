import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from '../Components/Errorpage/Errorpage';
import Root from '../Components/Root/Root';
import Home from '../Page/Home';
import Allart from '../Page/Allart';
import Register from '../Components/Register';
import Login from '../Components/Login';


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
            element:<Allart></Allart>

        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
    ]
    }])
export default router