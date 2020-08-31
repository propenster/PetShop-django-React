import React from 'react';
import '../App.css';

const List = (props) => {
    const { pets } = props;

    if(!pets || pets.length === 0) return <p>No pets yet sorry</p>
    return (
        <ul>
            <h2 className="list-head">Pets</h2>
                { pets.map((pet) =>{
                    return(
                        <li key={pet.id} className='list'>
                            <span className='pet-text'> {pet.pet_name} </span>
                            <span className='pet-category'>{pet.pet_category}</span>
                        </li>
                    );
                })

                }
            
        </ul>
    );
};

export default List;