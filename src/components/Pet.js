import React from 'react';
import '../App.css';

function Pet({pet_name, pet_category, pet_location, pet_image, pet_owner_name, pet_owner_email, pet_owner_phone, pet_registration_date,  pet_is_available, isLoading}) {
    return (
        <div className="pet">
                    <div className="card">
                        <img src={pet_image} alt="pet picturesss" />
                        <h2 className="card-header">{pet_name}</h2>
                        <div className="card-body">
                            <p>Location: {pet_location}</p>
                            <p>Owner Name: {pet_owner_name}</p>
                            <p>Owner Email: <a href="mailto:"{...pet_owner_email}>{pet_owner_email}</a></p>
                            <p>Owner Phone: {pet_owner_phone}</p>
                            <p>Registered: in {pet_category} on {pet_registration_date}</p> 
                            <p>Adoptible: {pet_is_available}</p>
                        </div>
                        
                    </div>
                
            
        </div>
    )
}

export default Pet;



            