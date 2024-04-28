import React, { useEffect } from 'react';
import UseAuth from '../Hooks/UseAuth';

const Myitems = () => {
    const {user} = UseAuth()
    console.log(user)
    useEffect(()=>{
        fetch(`http://localhost:3000/paints/${user?.email}`)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
        })
        
    },[user])
    return (
        <div>
            
        </div>
    );
};

export default Myitems;