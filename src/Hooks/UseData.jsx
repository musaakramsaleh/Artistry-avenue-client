import React, { useEffect, useState } from 'react';

const useData = () => {
    const [paints,setPaints] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch('http://localhost:3000/paints')
            const data = await res.json()
            setPaints(data)
        }
        fetchData()
    },[])
    return {paints}
};

export default useData;