import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init.js'
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceHolder = event =>{
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address : event.target.address.value,
            phone: event.target.phone.value
        }

       axios.post('http://localhost:5000/order',order)
       .then(response =>{
          // console.log(response)

          const {data} = response;
          if(data.insertedId){
             toast('your order is booked!!')
             event.target.reset()
          }

           
       })
       

    }
   
    return (
        <div className='w-50 mx-auto '>
            <h2>Please order : {service.name}</h2>

            <form onSubmit={handlePlaceHolder}>

                <input  className='w-100 mb-2' value={user?.displayName} readOnly type="text" name="name" id="" placeholder='name' required/>
                <br />
                <input  className='w-100 mb-2' value={user?.email} readOnly type="email" name="email" id="" placeholder='email' required/>
                <br />
                <input  className='w-100 mb-2' value={service.name} readOnly type="text" name="service" id="" placeholder='service' required/>
                <br />
                <input  className='w-100 mb-2'  type="text" name="address" id="" placeholder='address' required/>
                <br />
                <input  className='w-100 mb-2' type="text" name="phone" id="" placeholder='phone' required/>
                <br />

                <input type="submit" value="place order" />

            </form>
        </div>
    );
};

export default Checkout;