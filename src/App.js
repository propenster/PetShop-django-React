import React, { Component } from 'react';
import axios from 'axios';
import Pet from './components/Pet';

export class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pets: [],
      loading: true,
      input : {pet_name:null, pet_category:null, pet_location:null, pet_image:null, pet_owner_name:null, pet_owner_email:null, pet_owner_phone:null, 
        pet_registration_date:null, pet_is_available:null}
      
    }
  }


  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/pets')
      .then(res=> {
        const pets = res.data;
        this.setState({
          pets: pets,
          loading: false
        });
      })

  }

  handleInputChange = event => {
    this.setState({input: event.target.value})
  }

  handleSubmit = event =>{
      event.preventDefault();

      const input = {
        pet_name: this.state.input.pet_name,
        pet_category: this.state.input.pet_category,
        pet_image: this.state.input.pet_image,
        pet_owner_name: this.state.input.pet_owner_name,
        pet_owner_email: this.state.input.pet_owner_email,
        pet_owner_phone: this.state.input.pet_owner_phone,
        pet_registration_date: this.state.input.pet_registration_date,
        pet_is_available: this.state.input.pet_is_available
      }


      axios.post('http://127.0.0.1:8000/api/pets', { input })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }


  render() {
    return (
      <div className='App'>
          <header><h1>WonderPet.com</h1></header>
          <main>

            {this.state.pets.map(pet=>(
                <Pet 
                key={pet.id}
                pet_name={pet.pet_name}
                pet_category={pet.pet_category}
                pet_location={pet.pet_location}
                pet_image={pet.pet_image}
                pet_owner_name={pet.pet_owner_name}
                pet_owner_email={pet.pet_owner_email}
                pet_owner_phone={pet.pet_owner_phone}
                pet_registration_date={pet.pet_registration_date}
                pet_is_available={pet.pet_is_available}
                isLoading={this.state.loading}

                />
            ))
            
          };

          <form onSubmit={this.handleSubmit}>
            
            <label>Pet Name:<input type="text" name="pet_name" onChange={this.handleInputChange} /></label>
            <label>Pet Category<input type="text" name="pet_category" onChange={this.handleInputChange} /></label>
            <label>Pet Location<input type="text" name="pet_location" onChange={this.handleInputChange} /></label>
            <label>Pet Image<input type="text" name="pet_image" onChange={this.handleInputChange} /></label>
            <label>Pet Owner<input type="text" name="pet_owner_name" onChange={this.handleInputChange} /></label>
            <label>Owner Email<input type="text" name="pet_owner_email" onChange={this.handleInputChange} /></label>
            <label>Owner Phone<input type="text" name="pet_owner_phone" onChange={this.handleInputChange} /></label>
            <label>Registration date<input type="text" name="pet_registration_date" onChange={this.handleInputChange} /></label>
            <label>Pet Adoptible<input type="text" name="pet_is_available" onChange={this.handleInputChange} /></label>

            <button type="submit">Create pet</button>



          </form>


            
          </main>
      </div>
    )
  }
}

export default App
