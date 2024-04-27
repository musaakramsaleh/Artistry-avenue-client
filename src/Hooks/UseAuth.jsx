import React, { useContext } from 'react';
import { AuthContext } from '../Components/Firebase-provider/Firebase_Provider';

const UseAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default UseAuth;