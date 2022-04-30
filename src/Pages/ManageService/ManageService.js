import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
const [services , setServices] = useServices();

const handleDelete = id => {
    const proceed = window.confirm("are you sure ?");
    if(proceed){
        const url = `http://localhost:5000/service/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            const remaining = services.filter(service => service._id !== id);
            setServices(remaining);
        })

    }

}
    return (
        <div>

            <h1> manage your service </h1>

            {
                services.map(service=> <div key={service._id}>
                    
                    <h3>{service.name} <button onClick={()=>{
                        handleDelete(service._id)
                    }}>X</button></h3>
                    
                    
                     </div>)
            }
            
        </div>
    );
};

export default ManageService;