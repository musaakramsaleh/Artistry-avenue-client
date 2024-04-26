import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from '../Components/Errorpage/Errorpage';
import Root from '../Components/Root/Root';
import Home from '../Page/Home';
import Allart from '../Page/Allart';


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

        }
    ]
    }])
export default router