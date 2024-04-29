import React, { useEffect, useState } from 'react';

const useData = () => {
    const [paints,setPaints] = useState([])
    const [category,setCategory] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch('http://localhost:3000/paints')
            const data = await res.json()
            setPaints(data)
        }
        fetchData()
    },[])
    useEffect(()=>{
        const setcategory = async()=>{
            const res = await fetch('http://localhost:3000/category')
            const data = await res.json()
            setCategory(data)
        }
        setcategory()
    })
    return {paints,category}
};

export default useData;