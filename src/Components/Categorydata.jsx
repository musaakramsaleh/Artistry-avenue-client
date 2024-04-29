import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useData from '../Hooks/UseData';
import CategorySingle from './CategorySingle';

const Categorydata = () => {
    const id = useParams()
    const {paints} = useData()
    const category = id.subcategory
    const hexa =  paints.filter(paint=>paint.subCategory=== category)
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between'>
          {
            hexa.map(paint=><CategorySingle key = {paint._id} paint = {paint}></CategorySingle>)
          }
        </div>
        </div>
    );
};

export default Categorydata;