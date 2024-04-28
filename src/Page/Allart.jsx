import React from 'react';
import useData from '../Hooks/UseData';
import SinglePaint from '../Components/Single-paint/SinglePaint';

const Allart = () => {
    const {paints} = useData()
    console.log(paints)
    return (
        <div>
            <h2>{paints.length}</h2>
            
        </div>
    );
};

export default Allart;