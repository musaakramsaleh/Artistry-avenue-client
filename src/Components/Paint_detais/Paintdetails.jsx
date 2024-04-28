import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../Hooks/UseData';

const Paintdetails = () => {
    const { paints } = useData();
    const { id } = useParams()
    const [single, setSingle] = useState({});
    useEffect(() => {
        
        const foundPaint = paints.find(item => item._id === id);
        if (foundPaint) {
            setSingle(foundPaint);
        }
    }, [paints, id]);
    console.log(single)
    return (
        <div>
            
        </div>
    );
};

export default Paintdetails;