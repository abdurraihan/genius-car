import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [order , setOrder] = useState();
    useEffect(()=>{
        const getOrder = async () =>{
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const {data} = await axios.get(url);
            setOrder(data);
            
        }

        getOrder();
    },[order])
    return (
        <div>
            <h1> this is your order: {order?.length} </h1>
            
        </div>
    );
};

export default Order;